import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// --- TYPE FIX ---
const Motion = motion as any;

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary-dark flex flex-col items-center justify-center text-neutral-text relative overflow-hidden">
      <Head>
        <title>{`${PORTFOLIO_DATA.name} | ${PORTFOLIO_DATA.title}`}</title>
      </Head>

      {/* Enhanced Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-surface-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center px-4 relative"
      >
        {/* Decorative corner elements */}
        <div className="absolute -top-12 -left-12 w-24 h-24 border-2 border-accent/20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 border-2 border-accent/20 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Logo Icon with enhanced effects */}
        <Motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-8 relative"
        >
          {/* Continuous glow */}
          <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-full animate-pulse"></div>
          <div className="relative p-6 bg-gradient-to-br from-accent/20 to-transparent border-2 border-accent/40 rounded-2xl">
            <Code2 size={80} strokeWidth={1.5} className="text-accent animate-pulse" />
          </div>
        </Motion.div>

        {/* Name with gradient effect */}
        <Motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-neutral-text via-accent to-neutral-text bg-clip-text text-transparent"
        >
          {PORTFOLIO_DATA.name}
        </Motion.h1>

        {/* Tagline with icons */}
        <Motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Terminal className="w-6 h-6 text-accent animate-pulse" />
          <p className="text-xl md:text-2xl text-neutral-text/80 font-light max-w-2xl">
            {PORTFOLIO_DATA.tagline}
          </p>
          <Sparkles className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
        </Motion.div>

        {/* Enhanced Enter Button */}
        <Motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="/home"
            className="group relative inline-flex items-center px-10 py-5 border-2 border-accent text-lg font-semibold rounded-full text-accent hover:bg-accent hover:text-primary-dark transition-all duration-300 transform hover:scale-105 active:scale-95 no-underline overflow-hidden shadow-lg hover:shadow-accent/50"
          >
            <span className="relative z-10 flex items-center">
              Enter Portfolio
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </Motion.div>
        
        {/* Scroll indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-16 flex flex-col items-center gap-2 text-accent/60"
        >
          <span className="text-sm uppercase tracking-wider">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent/60 rounded-full animate-bounce"></div>
          </div>
        </Motion.div>
      </Motion.div>
    </div>
  );
}