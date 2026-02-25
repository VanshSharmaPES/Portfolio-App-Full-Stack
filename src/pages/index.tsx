import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Syne, JetBrains_Mono } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      ref={containerRef}
      className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-[#fafafa] px-6 relative overflow-hidden"
    >
      <Head>
        <title>{`${PORTFOLIO_DATA.name} | ${PORTFOLIO_DATA.title}`}</title>
      </Head>

      {/* Background Noise Image/SVG Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Spotlight */}
      <MotionDiv
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.08), transparent 40%)`
        }}
      />

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl relative z-10"
      >
        <p className={`${jetbrainsMono.className} text-sm font-semibold text-[#f59e0b] uppercase tracking-widest mb-6 border-b border-[#f59e0b]/20 pb-2 inline-block`}>
          Portfolio
        </p>

        <h1 className={`${syne.className} text-6xl md:text-8xl font-bold mb-8 tracking-tight`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] block drop-shadow-sm">
            {PORTFOLIO_DATA.name}
          </span>
        </h1>

        <p className={`${jetbrainsMono.className} text-lg md:text-xl text-[#a3a3a3] mb-12 leading-relaxed max-w-lg mx-auto`}>
          {PORTFOLIO_DATA.tagline}
        </p>

        <MagneticButton>
          <Link
            href="/home"
            className={`${jetbrainsMono.className} relative overflow-hidden group inline-flex items-center gap-3 px-10 py-4 bg-[#f59e0b] text-[#0a0a0a] text-sm font-bold tracking-wide uppercase transition-all duration-300 no-underline shadow-lg shadow-orange-500/20`}
          >
            <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-1">
              Enter Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-[#fbbf24] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </MagneticButton>
      </MotionDiv>
    </MotionDiv>
  );
}

// Magnetic Button Wrapper
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

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <MotionDiv
      style={{ position: "relative", display: "inline-block" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </MotionDiv>
  );
}