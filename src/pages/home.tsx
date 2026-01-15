import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Download, Code2, Database, Server, Globe, Sparkles, Zap } from 'lucide-react';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

// --- TYPE FIX ---
const MotionDiv = motion.div as any;

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{PORTFOLIO_DATA.name} | Home</title>
        <meta name="description" content={PORTFOLIO_DATA.tagline} />
      </Head>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-surface-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <section className="relative min-h-[110vh] flex flex-col justify-center px-4 sm:px-8 lg:px-16 bg-primary-dark text-neutral-text z-10">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between mb-16">
          
          {/* Left Text Content */}
          <MotionDiv 
            variants={itemVariants}
            className="max-w-lg mb-10 md:mb-2 relative"
          >
            {/* Decorative corner element */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-accent/30 rounded-lg rotate-12 animate-pulse"></div>
            
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <p className="text-xl text-accent font-semibold">Hello, I'm</p>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold text-neutral-text leading-tight bg-gradient-to-r from-neutral-text via-accent/80 to-neutral-text bg-clip-text">
              {PORTFOLIO_DATA.name}
            </h1>
            <h2 className="text-3xl sm:text-4xl text-accent/90 font-light mt-2 mb-6 flex items-center gap-2">
              {PORTFOLIO_DATA.title}
              <Zap className="w-8 h-8 text-accent animate-pulse" />
            </h2>
            <p className="text-lg text-neutral-text/80 mb-8 leading-relaxed">
              {PORTFOLIO_DATA.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/projects"
                className="group relative inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full shadow-lg text-primary-dark bg-accent hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 no-underline overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <Briefcase className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              <a 
                href="Vansh_Sharma_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 border-2 border-accent text-base font-semibold rounded-full text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 active:scale-95 no-underline overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Download CV
                  <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </div>
          </MotionDiv>
          
          {/* Right Image with glow effect */}
          <MotionDiv 
            variants={itemVariants}
            className="relative group"
          >
            {/* Animated glow */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-500 animate-pulse"></div>
            
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-accent flex items-center justify-center bg-surface-light shrink-0 group-hover:scale-105 transition-transform duration-300 group-hover:border-accent/80">
              <Image 
                src="/image.jpg" 
                alt="Vansh Sharma"
                width={256}
                height={256}
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Decorative rings */}
            <div className="absolute -inset-4 border-2 border-accent/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -inset-8 border border-accent/10 rounded-full"></div>
          </MotionDiv>
        </div>

        {/* Bottom Stats with enhanced cards */}
        <MotionDiv 
          variants={itemVariants}
          className="max-w-7xl w-full mx-auto border-t border-accent/20 pt-12 pb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Code2, value: "1+", label: "Years Experience" },
              { icon: Globe, value: "3+", label: "Web Projects" },
              { icon: Server, value: "100%", label: "Backend Uptime" },
              { icon: Database, value: "Full Stack", label: "Specialist" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-surface-light/50 to-transparent border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex justify-center text-accent mb-3 group-hover:scale-110 transition-transform">
                    <stat.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-text mb-1 text-center">{stat.value}</h3>
                  <p className="text-neutral-text/60 text-sm text-center">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>
      </section>
    </Layout>
  );
};

export default HomePage;