import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongoose';
import Message from '@/models/Message';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  await dbConnect();

  const { name, email, message } = req.body;

  // Strict validation: All fields are mandatory
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are mandatory.' });
  }

  try {
    // 1. Save to MongoDB
    const newMessage = await Message.create({ name, email, message });

    // 2. Send Email Notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `New Portfolio Contact from ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully.');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // We do NOT fail the response here, as the DB save was successful.
      }
    }

    return res.status(201).json({ success: true, message: 'Message sent successfully!', data: newMessage });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('API Error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error occurred.' });
  }
}