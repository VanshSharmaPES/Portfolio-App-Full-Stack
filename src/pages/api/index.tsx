import Head from 'next/head';
// FIX: Using the import alias and adding the explicit file extension (.tsx)
import App from '@/components/PortfolioApp'; 
import React from 'react';

// Define the type for your page component
const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Vansh Sharma | Full Stack Portfolio</title>
        <meta name="description" content="Vansh Sharma's professional portfolio showcasing Next.js, React, TypeScript, and MongoDB projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* The main portfolio application component */}
      <App />
    </>
  );
};

export default HomePage;