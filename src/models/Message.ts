import mongoose, { Document, Schema, Model } from 'mongoose';

/**
 * TypeScript Interface for the MongoDB Document structure.
 * This provides type safety for data interaction.
 */
export interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Define the Schema for the MongoDB collection
const MessageSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: [true, 'Message content is required.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the Mongoose Model. We check if the model already exists to prevent re-definition errors during hot-reloads.
const Message: Model<IMessage> = mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);

export default Message;