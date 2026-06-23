import { loadEnvConfig } from '@next/env';
import { neon } from '@neondatabase/serverless';

// Load environment variables from the project root (.env.local, etc.)
loadEnvConfig(process.cwd());

const databaseUrl = process.env.DATABASE_URL || '';

if (!databaseUrl) {
  console.error('Error: DATABASE_URL is not set in environment variables.');
  process.exit(1);
}

const sql = neon(databaseUrl);

async function setup() {
  console.log('Connecting to Neon database and setting up schema...');
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `;
    console.log('✓ Successfully created "messages" table in Neon database.');
  } catch (error) {
    console.error('✗ Failed to create table:', error);
    process.exit(1);
  }
}

setup();
