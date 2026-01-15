import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

// --- TYPE FIX ---
const MotionDiv = motion.div as any;

export default function Projects() {
  return (
    <Layout>
      <Head><title>Projects | {PORTFOLIO_DATA.name}</title></Head>
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-surface-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
                My Projects
                <span className="absolute -top-1 -right-8 text-accent text-sm animate-bounce">🚀</span>
              </h2>
            </div>
            <div className="relative h-1 w-32 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            </div>
          </MotionDiv>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <MotionDiv 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-surface-light/80 to-surface-light/40 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden border-2 border-accent/20 hover:border-accent/40 flex flex-col"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6 flex flex-col h-full">
                  {/* Project number badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-sm border border-accent/30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-neutral-text group-hover:text-accent transition-colors duration-300 pr-12">
                    {project.title}
                  </h3>
                  <p className="text-neutral-text/80 mb-5 grow leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary-dark/50 text-accent border border-accent/30 hover:bg-accent/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link with icon */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 mt-auto"
                  >
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
                
                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}