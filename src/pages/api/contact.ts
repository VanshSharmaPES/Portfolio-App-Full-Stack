import type { NextApiRequest, NextApiResponse } from 'next';
// FIXED: Using the import alias with explicit .ts extension
import dbConnect from '@/lib/mongoose'; 
// FIXED: Using the import alias with explicit .ts extension
import Message from '@/models/Message';

// Type definition for the API response
type Data = {
  success: boolean;
  message?: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Only allow POST requests for form submission
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  // Connect to the MongoDB database
  await dbConnect(); 

  const { name, email, message } = req.body;

  // Basic Input Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name, email, or message.' });
  }

  try {
    // Create a new message document using the Mongoose model
    const newMessage = await Message.create({ name, email, message });

    // Success response
    return res.status(201).json({ success: true, message: 'Message sent and saved successfully!', data: newMessage });

  } catch (error: any) {
    // Detailed error handling
    console.error('API Error:', error.message);
    let errorMessage = 'An unexpected error occurred.';
    
    if (error.name === 'ValidationError') {
        errorMessage = 'Validation failed: ' + Object.values(error.errors).map((err: any) => err.message).join(', ');
    }
    
    return res.status(500).json({ success: false, message: errorMessage });
  }
}