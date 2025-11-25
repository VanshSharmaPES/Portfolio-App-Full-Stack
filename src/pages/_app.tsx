import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.css'; 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <main className={inter.variable}>
      <Head>
  {/* We added '?v=2' to the end of the href */}
  <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Vansh Sharma | Portfolio</title>
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