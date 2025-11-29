import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Download, Code2, Database, Server, Globe } from 'lucide-react';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

// The "Child" variant - simple fade up
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
      
      <section className="min-h-[110vh] flex flex-col justify-center px-4 sm:px-8 lg:px-16 bg-primary-dark text-neutral-text">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between mb-16">
          
          {/* Left Text Content - Stagger Item 1 */}
          <motion.div 
            variants={itemVariants}
            className="max-w-lg mb-10 md:mb-2"
          >
            <p className="text-xl text-accent font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-6xl sm:text-7xl font-medium text-neutral-text leading-tight">
              {PORTFOLIO_DATA.name}
            </h1>
            <h2 className="text-3xl sm:text-4xl text-neutral-text/90 font-light mt-2 mb-6">
              {PORTFOLIO_DATA.title}
            </h2>
            <p className="text-lg text-neutral-text/80 mb-8">
              {PORTFOLIO_DATA.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/projects"
                className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-primary-dark bg-accent hover:bg-accent/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 no-underline"
              >
                View My Work
                <Briefcase className="ml-2 w-5 h-5 group-hover:animate-bounce" />
              </Link>

              <a 
                href="Vansh_Sharma_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 border-2 border-accent text-base font-medium rounded-full text-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 transform hover:scale-105 active:scale-95 no-underline"
              >
                Download CV
                <Download className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Right Image - Stagger Item 2 */}
          <motion.div 
            variants={itemVariants}
            className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-accent flex items-center justify-center bg-surface-light shrink-0 relative group hover:scale-105 transition-transform duration-300 hover:border-accent/80"
          >
            <Image 
              src="/image.jpg" 
              alt="Vansh Sharma"
              width={256}
              height={256}
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </div>

        {/* Bottom Stats - Stagger Item 3 */}
        <motion.div 
          variants={itemVariants}
          className="max-w-7xl w-full mx-auto border-t border-accent/20 pt-12 pb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="flex justify-center text-accent mb-2"><Code2 size={32} /></div>
              <h3 className="text-3xl font-bold text-neutral-text">1+</h3>
              <p className="text-neutral-text/60 text-sm">Years Experience</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center text-accent mb-2"><Globe size={32} /></div>
              <h3 className="text-3xl font-bold text-neutral-text">3+</h3>
              <p className="text-neutral-text/60 text-sm">Web Projects</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center text-accent mb-2"><Server size={32} /></div>
              <h3 className="text-3xl font-bold text-neutral-text">100%</h3>
              <p className="text-neutral-text/60 text-sm">Backend Uptime</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center text-accent mb-2"><Database size={32} /></div>
              <h3 className="text-3xl font-bold text-neutral-text">Full Stack</h3>
              <p className="text-neutral-text/60 text-sm">Specialist</p>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default HomePage;