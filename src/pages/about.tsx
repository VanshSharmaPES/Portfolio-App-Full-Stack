import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

export default function About() {
  return (
    <Layout>
      <Head><title>About | {PORTFOLIO_DATA.name}</title></Head>

      <section className="min-h-[calc(100vh-64px)] flex flex-col px-6 sm:px-8 lg:px-16 py-10 md:py-0">
        <div className="max-w-7xl mx-auto w-full my-auto">

          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12 pt-6"
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">About</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-4">
              Who I Am
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start pb-6">

            {/* Bio */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-6 md:space-y-8"
            >
              <p className="text-base md:text-lg text-text-muted leading-relaxed line-clamp-6 md:line-clamp-none">
                {PORTFOLIO_DATA.about}
              </p>

              <div className="p-4 md:p-6 border-l-4 border-accent bg-surface-light/50 rounded-r-xl">
                <p className="text-sm md:text-base text-text-muted italic">
                  Always open to new opportunities and collaborations.
                </p>
              </div>

              {/* Highlight cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 md:p-6 rounded-2xl bg-surface-light border border-white/5 hover:border-accent/20 transition-colors">
                  <h3 className="text-base font-bold text-text mb-1">Education</h3>
                  <p className="text-sm text-text-muted">B.Tech in Computer Science (AI/ML) at PES University</p>
                </div>
                <div className="p-5 md:p-6 rounded-2xl bg-surface-light border border-white/5 hover:border-accent/20 transition-colors">
                  <h3 className="text-base font-bold text-text mb-1">Community</h3>
                  <p className="text-sm text-text-muted">Active contributor in tech communities and student organizations</p>
                </div>
              </div>
            </MotionDiv>

            {/* Skills Wrapper - Reverted to Vertical List */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-surface-light border border-white/5">
                <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4 md:mb-6">Skills</h3>

                {/* Vertical List with Theme Accents */}
                <ul className="space-y-3">
                  {PORTFOLIO_DATA.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-base font-medium text-text-muted hover:text-text transition-colors duration-200 group cursor-default">
                      {/* Theme Dot */}
                      <span className="w-2 h-2 rounded-full bg-accent/70 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(249,115,22,0.6)] transition-all duration-300" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionDiv>

          </div>
        </div>
      </section>
    </Layout >
  );
}