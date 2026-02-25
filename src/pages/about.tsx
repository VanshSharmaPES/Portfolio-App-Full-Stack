import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Syne, JetBrains_Mono } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function About() {
  const highlights = [
    {
      title: "Education",
      desc: "B.Tech in Computer Science (AI/ML) at PES University",
      year: "2024 - Present"
    },
    {
      title: "Community",
      desc: "Active contributor in tech communities and student organizations",
      year: "Constant"
    },
    {
      title: "Opportunities",
      desc: "Always open to new opportunities and collaborations.",
      year: "Looking Forward"
    }
  ];

  return (
    <Layout>
      <Head><title>About | {PORTFOLIO_DATA.name}</title></Head>

      <section className="min-h-[calc(100vh-64px)] flex flex-col px-6 sm:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full my-auto py-12 md:py-20 z-10 relative">

          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24 text-center md:text-left"
          >
            <p className={`${jetbrainsMono.className} text-sm font-semibold text-[#f59e0b] uppercase tracking-widest mb-4 inline-block border-b border-[#f59e0b]/20 pb-2`}>
              About
            </p>
            <h1 className={`${syne.className} text-5xl md:text-7xl font-extrabold text-[#fafafa] tracking-tight`}>
              Who I Am
            </h1>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start pb-12">

            {/* Bio section with dark mode typography */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <h2 className={`${syne.className} text-3xl font-bold text-[#fafafa] border-l-4 border-[#f59e0b] pl-6`}>
                My Journey
              </h2>
              <p className={`${jetbrainsMono.className} text-base md:text-lg text-[#a3a3a3] leading-relaxed`}>
                {PORTFOLIO_DATA.about}
              </p>
            </MotionDiv>

            {/* Alternating Side-by-Side Timeline Layout */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline Center Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#f59e0b]/50 via-white/10 to-transparent -translate-x-1/2" />

              <div className="space-y-12">
                {highlights.map((item, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] border-4 border-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.5)] -translate-x-1/2 z-10" />

                    {/* Empty Space for offset */}
                    <div className="hidden md:block w-1/2" />

                    {/* Card */}
                    <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}>
                      <div className="p-6 md:p-8 rounded-2xl bg-[#171717]/80 border border-white/5 hover:border-[#f59e0b]/30 transition-colors duration-300 group">
                        <span className={`${jetbrainsMono.className} text-xs font-bold text-[#f59e0b] tracking-wider mb-2 block opacity-80 group-hover:opacity-100 transition-opacity`}>
                          {item.year}
                        </span>
                        <h3 className={`${syne.className} text-xl md:text-2xl font-bold text-[#fafafa] mb-3`}>
                          {item.title}
                        </h3>
                        <p className={`${jetbrainsMono.className} text-sm text-[#a3a3a3] leading-relaxed`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

          </div>

          {/* Skills Marquee/Grid */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-16 mt-8 border-t border-white/5"
          >
            <h3 className={`${jetbrainsMono.className} text-sm font-bold text-[#a3a3a3] uppercase tracking-widest mb-10 text-center`}>
              Technical Arsenal
            </h3>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {PORTFOLIO_DATA.skills.map((skill) => (
                <MotionDiv
                  key={skill}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="px-6 py-4 rounded-xl bg-[#171717] border border-white/5 hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/10 transition-all duration-300 group cursor-default shadow-lg shadow-black/20"
                >
                  <span className={`${jetbrainsMono.className} text-base font-semibold text-[#a3a3a3] group-hover:text-[#fafafa] transition-colors`}>
                    {skill}
                  </span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

        </div>
      </section>
    </Layout>
  );
}