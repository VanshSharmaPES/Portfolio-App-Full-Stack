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

// --- TYPE FIX ---
// --- TYPE FIX ---
// We cast motion.div to 'any' to bypass the React 19 className conflict.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

const containerVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
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
        {/* Usng MotionDiv instead of motion.div to avoid type error */}
        <MotionDiv
          key={router.pathname}
          variants={containerVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="w-full min-h-screen"
        >
          <Component {...pageProps} />
        </MotionDiv>
      </AnimatePresence>
    </main>
  );
}

export default MyApp;