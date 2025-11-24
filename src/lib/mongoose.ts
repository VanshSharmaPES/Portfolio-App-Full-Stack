import mongoose from 'mongoose';

// Ensure MONGODB_URI is defined
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Global is used here to maintain a cached connection across hot reloads
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log('Using cached MongoDB connection.');
    return cached.conn;
  }

  if (!cached.promise) {
    // FIX: Removing the problematic 'bufferCommands' option to resolve Mongoose type error.
    // Modern Mongoose handles connection options internally.
    const opts = {}; 

    // Set up the connection promise
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    });
  }
  
  cached.conn = await cached.promise;
  console.log('New MongoDB Connection Established.');
  return cached.conn;
}

export default dbConnect;