import React from 'react';
import type { AppProps } from 'next/app';
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