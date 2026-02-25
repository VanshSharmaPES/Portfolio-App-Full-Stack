import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Syne, JetBrains_Mono } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Projects() {
  return (
    <Layout>
      <Head><title>Projects | {PORTFOLIO_DATA.name}</title></Head>

      <section className="min-h-[calc(100vh-64px)] flex flex-col px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full my-auto py-10">

          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16 text-left pt-6"
          >
            <p className={`${jetbrainsMono.className} text-sm font-semibold text-[#f59e0b] uppercase tracking-widest mb-4 inline-block border-b border-[#f59e0b]/20 pb-2`}>
              Work
            </p>
            <h1 className={`${syne.className} text-5xl md:text-7xl font-extrabold text-[#fafafa] tracking-tight mb-4`}>
              Projects
            </h1>
          </MotionDiv>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pb-12">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProjectCard({ project, index }: { project: any, index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <MotionDiv
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col p-8 md:p-10 rounded-2xl bg-[#171717]/50 border border-white/5 overflow-hidden min-h-[400px]"
    >
      {/* Dynamic Hover Background Reveal */}
      <MotionDiv
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.05), transparent 40%)`
        }}
      />

      {/* Large background number */}
      <div className={`${jetbrainsMono.className} absolute -bottom-6 -right-4 text-[120px] font-bold text-white/5 z-0 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-[#f59e0b]/10`}>
        0{index + 1}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <h2 className={`${syne.className} text-2xl md:text-3xl font-bold text-[#fafafa] group-hover:text-[#f59e0b] transition-colors duration-300 pr-12`}>
            {project.title}
          </h2>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 right-0 p-3 rounded-full bg-white/5 border border-white/10 text-[#a3a3a3] hover:text-[#0a0a0a] hover:bg-[#f59e0b] hover:border-[#f59e0b] transition-all duration-300 z-20 group/link"
          >
            <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
          </a>
        </div>

        <p className={`${jetbrainsMono.className} text-base text-[#a3a3a3] leading-relaxed mb-8 grow`}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5">
          {project.technologies.map((tech: string) => (
            <span key={tech} className={`${jetbrainsMono.className} px-4 py-1.5 text-xs font-semibold rounded-full bg-[#0a0a0a] text-[#a3a3a3] border border-white/5 group-hover:border-[#f59e0b]/30 group-hover:text-[#fafafa] transition-colors duration-300`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}