import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "3+", label: "Web Projects" },
  { value: "Full Stack", label: "Specialist" },
  { value: "MERN", label: "Core Stack" },
];

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{PORTFOLIO_DATA.name} | Home</title>
        <meta name="description" content={PORTFOLIO_DATA.tagline} />
      </Head>

      <section className="min-h-[calc(100vh-64px)] flex flex-col px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl w-full mx-auto my-auto">

          {/* Hero */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-10">

            {/* Text */}
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl pt-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-secondary" />
                <p className="text-lg font-medium text-text-muted uppercase tracking-wider">
                  Full Stack Developer
                </p>
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold text-text leading-tight tracking-tight mb-6">
                Hello, I'm <br />
                <span className="text-gradient">{PORTFOLIO_DATA.name}</span>
              </h1>

              <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-xl">
                {PORTFOLIO_DATA.tagline}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-8 py-3 bg-text text-primary-dark text-base font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 no-underline shadow-lg shadow-white/5 hover:shadow-orange-500/20"
                >
                  View Projects
                </Link>
                <a
                  href="Vansh_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-white/10 text-base font-medium rounded-full text-text hover:border-accent hover:text-accent transition-all duration-300 no-underline"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </div>
            </MotionDiv>

            {/* Photo */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="shrink-0 relative pt-4"
            >
              {/* Stable border, no glow */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 relative z-10 bg-surface-light">
                <Image
                  src="/image.jpg"
                  alt="Vansh Sharma"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </MotionDiv>
          </div>

          {/* Stats */}
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="border-t border-white/10 pt-10 pb-10 grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-secondary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-text-muted uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </MotionDiv>

        </div>
      </section>
    </Layout>
  );
};

export default HomePage;