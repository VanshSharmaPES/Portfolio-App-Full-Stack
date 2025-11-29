import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { PORTFOLIO_DATA } from '@/data/portfolioData'; // Import data

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <main className={inter.variable}>
      <Head>
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* --- SEO FIXES START --- */}
        <title>{PORTFOLIO_DATA.name} | Portfolio</title>
        <meta name="description" content={PORTFOLIO_DATA.tagline} />
        <meta name="keywords" content={PORTFOLIO_DATA.skills.join(", ")} />
        <meta name="author" content={PORTFOLIO_DATA.name} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${PORTFOLIO_DATA.name} | Portfolio`} />
        <meta property="og:description" content={PORTFOLIO_DATA.tagline} />
        <meta property="og:image" content="/image.jpg" /> {/* Uses your profile image as preview */}
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${PORTFOLIO_DATA.name} | Portfolio`} />
        <meta property="twitter:description" content={PORTFOLIO_DATA.tagline} />
        <meta property="twitter:image" content="/image.jpg" />
        {/* --- SEO FIXES END --- */}
      </Head>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default MyApp;