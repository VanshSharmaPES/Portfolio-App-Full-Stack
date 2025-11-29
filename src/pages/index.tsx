import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// --- TYPE FIX ---
const Motion = motion as any;

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary-dark flex flex-col items-center justify-center text-neutral-text relative overflow-hidden">
      <Head>
        <title>Welcome | {PORTFOLIO_DATA.name}</title>
      </Head>

      {/* Decorative Background Elements */}
      <div className="absolute center top-[-10%] left-[-10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-surface-light/10 rounded-full blur-3xl" />

      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center px-4"
      >
        {/* Logo Icon */}
        <Motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-6 text-accent"
        >
          <Code2 size={80} strokeWidth={1.5} />
        </Motion.div>

        {/* Name */}
        <Motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl md:text-7xl font-medium mb-4 tracking-tight center"
        >
          {PORTFOLIO_DATA.name}
        </Motion.h1>

        {/* Tagline */}
        <Motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl md:text-2xl center text-neutral-text/80 font-light mb-12 max-w-2xl mx-auto"
        >
          {PORTFOLIO_DATA.tagline}
        </Motion.p>

        {/* Enter Button */}
        <Motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="/home"
            className="group inline-flex items-center px-8 py-4 border-2 border-accent text-lg font-medium rounded-full text-accent hover:bg-accent hover:text-primary-dark transition-all duration-300 transform hover:scale-105 active:scale-95 no-underline"
          >
            Enter Portfolio
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Motion.div>
      </Motion.div>
    </div>
  );
}