import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Motion = motion as any;

export default function LandingPage() {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center text-text px-6 relative overflow-hidden"
    >
      <Head>
        <title>{`${PORTFOLIO_DATA.name} | ${PORTFOLIO_DATA.title}`}</title>
      </Head>

      {/* Stronger ambient glow for landing page specifically */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
        className="text-center max-w-2xl relative z-10"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6 border-b border-accent/20 pb-2 inline-block">
          Portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          <span className="text-gradient block">{PORTFOLIO_DATA.name}</span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed max-w-lg mx-auto">
          {PORTFOLIO_DATA.tagline}
        </p>

        <Link
          href="/home"
          className="inline-flex items-center gap-3 px-10 py-4 border border-white/10 text-lg font-medium rounded-full text-text hover:border-accent hover:bg-accent/10 transition-all duration-300 no-underline group shadow-lg shadow-black/50"
        >
          Enter Portfolio
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 text-accent" />
        </Link>
      </Motion.div>
    </Motion.div>
  );
}