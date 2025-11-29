import React from 'react';
import Head from 'next/head';
import { Code } from 'lucide-react';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Layout>
      <Head><title>About | {PORTFOLIO_DATA.name}</title></Head>
      <section className="min-h-screen pt-10 px-4 sm:px-8 lg:px-16 bg-primary-dark text-neutral-text">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium mb-10 border-b-4 border-accent pb-2 inline-block">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              <p className="text-lg text-neutral-text/90 leading-relaxed text-justify">
                {PORTFOLIO_DATA.about}
              </p>
              <p className="text-lg font-semibold text-accent">
                I am always open to new opportunities and collaborations. Let's build something great together.
              </p>
            </motion.div>
            
            {/* CHANGED: text-primary-dark -> text-neutral-text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 p-6 bg-surface-light rounded-xl shadow-inner text-neutral-text border border-accent/10"
            >
              <h3 className="text-2xl font-semibold text-accent mb-4">Core Skills</h3>
              <ul className="space-y-3">
                {PORTFOLIO_DATA.skills.map(skill => (
                  <li key={skill} className="flex items-center">
                    <Code className="w-5 h-5 mr-3 text-accent shrink-0" />
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}