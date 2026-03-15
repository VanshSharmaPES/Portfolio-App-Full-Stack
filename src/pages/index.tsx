import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Syne, JetBrains_Mono } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Motion = motion as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

function MagneticButton({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <MotionDiv
      style={{ position: "relative", display: "inline-block" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </MotionDiv>
  );
}

export default function LandingPage() {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-[#0a0a0a]"
    >
      <Head>
        <title>{`${PORTFOLIO_DATA.name} | ${PORTFOLIO_DATA.title}`}</title>
      </Head>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />

      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
        className="text-center max-w-2xl relative z-10"
      >
        <p className={`${jetbrainsMono.className} text-sm font-semibold text-[#f59e0b] uppercase tracking-widest mb-6 border-b border-[#f59e0b]/20 pb-2 inline-block`}>
          Portfolio
        </p>

        <h1 className={`${syne.className} text-6xl md:text-8xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]`}>
          {PORTFOLIO_DATA.name}
        </h1>

        <p className={`${jetbrainsMono.className} text-lg md:text-xl text-[#a3a3a3] mb-12 leading-relaxed max-w-lg mx-auto`}>
          {PORTFOLIO_DATA.tagline}
        </p>

        <MagneticButton>
          <Link
            href="/home"
            className={`${jetbrainsMono.className} relative overflow-hidden group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#f59e0b] text-[#0a0a0a] text-sm font-bold tracking-widest uppercase transition-all duration-300 no-underline shadow-lg shadow-[#f59e0b]/20`}
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">Enter Portfolio</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <div className="absolute inset-0 h-full w-full bg-[#fbbf24] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </MagneticButton>
      </Motion.div>
    </Motion.div>
  );
}