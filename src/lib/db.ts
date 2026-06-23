import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL || '';

if (!databaseUrl) {
  console.warn('DATABASE_URL is not configured in environment variables');
}

export const sql = neon(databaseUrl);
