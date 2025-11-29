import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 10,
  },
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <main className={inter.variable}>
      <Head>
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <title>{PORTFOLIO_DATA.name} | Portfolio</title>
        <meta name="description" content={PORTFOLIO_DATA.tagline} />
        <meta name="keywords" content={PORTFOLIO_DATA.skills.join(", ")} />
        <meta name="author" content={PORTFOLIO_DATA.name} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${PORTFOLIO_DATA.name} | Portfolio`} />
        <meta property="og:description" content={PORTFOLIO_DATA.tagline} />
        <meta property="og:image" content="/image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${PORTFOLIO_DATA.name} | Portfolio`} />
        <meta property="twitter:description" content={PORTFOLIO_DATA.tagline} />
        <meta property="twitter:image" content="/image.jpg" />
      </Head>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="w-full min-h-screen"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default MyApp;