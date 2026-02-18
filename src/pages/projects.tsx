import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

export default function Projects() {
  return (
    <Layout>
      <Head><title>Projects | {PORTFOLIO_DATA.name}</title></Head>

      <section className="min-h-[calc(100vh-64px)] flex flex-col px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full my-auto">

          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-10 text-center md:text-left pt-6"
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Work</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-4">Projects</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full mx-auto md:mx-0" />
          </MotionDiv>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-6">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <MotionDiv
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group flex flex-col p-6 md:p-8 rounded-2xl bg-surface-light border border-white/5 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h2>
                </div>

                <p className="text-base text-text-muted leading-relaxed mb-6 grow line-clamp-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 text-text-muted/80 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-accent transition-colors duration-200 no-underline mt-auto"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </MotionDiv>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}