import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { sql } from '@/lib/db';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  const { name, email, message } = req.body;

  // Strict validation: All fields are mandatory
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are mandatory.' });
  }

  try {
    // 1. Save to Neon (PostgreSQL)
    let newMessage;
    try {
      const results = await sql`
        INSERT INTO messages (name, email, message)
        VALUES (${name}, ${email}, ${message})
        RETURNING *
      `;
      newMessage = results[0];
      if (!newMessage) {
        throw new Error('No record returned from database');
      }
    } catch (dbError: any) {
      console.error('Neon DB Error:', dbError);
      return res.status(500).json({ success: false, message: 'Failed to save message to database.' });
    }

    // 2. Send Email Notification via Resend (HTTPS, bypasses port blocks)
    if (process.env.RESEND_API_KEY && process.env.EMAIL_USER) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>', // Resend's default testing domain
          to: process.env.EMAIL_USER, // Send to your own email attached in env
          subject: `New Portfolio Contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        
        if (error) {
          console.error('Resend API Error:', error);
        } else {
          console.log('Email notification sent successfully via Resend. ID:', data?.id);
        }
      } catch (emailError) {
        console.error('Failed to send email notification (Exception):', emailError);
      }
    } else {
      console.warn("Skipping email send: Missing RESEND_API_KEY or EMAIL_USER");
    }

    return res.status(201).json({ success: true, message: 'Message sent successfully!', data: newMessage });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('API Error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error occurred.' });
  }
}
