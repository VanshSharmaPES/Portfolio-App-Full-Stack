import React from 'react';
import Head from 'next/head';
import { Code, Sparkles, Award, Users, Zap } from 'lucide-react';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

// --- TYPE FIX ---
const MotionDiv = motion.div as any;

export default function About() {
  return (
    <Layout>
      <Head><title>About | {PORTFOLIO_DATA.name}</title></Head>
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-surface-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <section className="relative min-h-screen pt-10 px-4 sm:px-8 lg:px-16 bg-primary-dark text-neutral-text z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header with advanced animations */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/30 blur-xl rounded-full animate-pulse"></div>
                <Sparkles className="w-8 h-8 text-accent animate-pulse relative group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-neutral-text via-accent to-neutral-text bg-clip-text text-transparent animate-pulse relative">
                About Me
                <span className="absolute -top-1 -right-8 text-accent text-sm animate-bounce">✨</span>
              </h2>
            </div>
            <div className="relative h-1 w-32 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            </div>
          </MotionDiv>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <MotionDiv 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Bio card with gradient */}
              <div className="p-8 bg-gradient-to-br from-surface-light/80 to-surface-light/40 backdrop-blur-sm rounded-2xl border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <p className="text-lg text-neutral-text/90 leading-relaxed text-justify mb-6">
                  {PORTFOLIO_DATA.about}
                </p>
                <div className="flex items-center gap-3 p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                  <Zap className="w-6 h-6 text-accent animate-pulse" />
                  <p className="text-lg font-semibold text-accent">
                    I am always open to new opportunities and collaborations. Let's build something great together!
                  </p>
                </div>
              </div>
              
              {/* Highlight cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group p-6 bg-gradient-to-br from-surface-light/60 to-surface-light/30 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Award className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-neutral-text mb-2">Education</h3>
                  <p className="text-neutral-text/80">B.Tech in Computer Science (AI/ML) at PES University</p>
                </div>
                
                <div className="group p-6 bg-gradient-to-br from-surface-light/60 to-surface-light/30 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Users className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-neutral-text mb-2">Community</h3>
                  <p className="text-neutral-text/80">Active contributor in tech communities and student organizations</p>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 p-8 bg-gradient-to-br from-surface-light/80 to-surface-light/40 backdrop-blur-sm rounded-2xl border-2 border-accent/20 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent">Core Skills</h3>
                </div>
                <ul className="space-y-4">
                  {PORTFOLIO_DATA.skills.map((skill, index) => (
                    <MotionDiv
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="group"
                    >
                      <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/30">
                        <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="font-medium group-hover:text-accent transition-colors">{skill}</span>
                      </li>
                    </MotionDiv>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </Layout>
  );
}