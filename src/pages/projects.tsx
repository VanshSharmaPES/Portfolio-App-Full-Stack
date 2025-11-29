import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

// --- TYPE FIX ---
const MotionDiv = motion.div as any;

export default function Projects() {
  return (
    <Layout>
      <Head><title>Projects | {PORTFOLIO_DATA.name}</title></Head>
      <section className="min-h-screen pt-10 px-4 sm:px-8 lg:px-16 bg-primary-dark text-neutral-text">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium mb-10 border-b-4 border-accent pb-2 inline-block">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <MotionDiv 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface-light rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group text-neutral-text flex flex-col border border-accent/10 hover:border-accent/30"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-text/80 mb-4 grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-dark text-accent border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover:underline flex items-center mt-auto"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </a>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}