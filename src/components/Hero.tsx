"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Syne, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { Download } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import Image from "next/image";

// Fonts
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionH1 = motion.h1 as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionP = motion.p as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionSpan = motion.span as any;

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "3+", label: "Web Projects" },
  { value: "Full Stack", label: "Specialist" },
  { value: "MERN", label: "Core Stack" },
];

const roles = ["Full Stack Developer", "Backend Engineer", "Frontend Specialist"];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Typewriter state
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      const updatedText = isDeleting
        ? fullText.substring(0, typewriterText.length - 1)
        : fullText.substring(0, typewriterText.length + 1);

      setTypewriterText(updatedText);

      if (isDeleting) {
        setTypingSpeed(prevSpeed => prevSpeed / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [typewriterText, isDeleting, typingSpeed, loopNum]);

  // Spotlight effect tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (heroEl) {
        heroEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center pt-10">

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

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-10">

          {/* Text Content */}
          <div className="max-w-2xl pt-4">

            {/* Tagline */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#f59e0b]" />
              <p className={`${jetbrainsMono.className} text-sm font-medium text-[#f59e0b] tracking-widest uppercase`}>
                <span className="inline-block min-w-[180px]">{typewriterText}</span>
                <MotionSpan
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-[2px] h-4 bg-[#f59e0b] ml-1 align-middle"
                />
              </p>
            </MotionDiv>

            {/* Headline */}
            <MotionH1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${syne.className} text-6xl sm:text-7xl lg:text-8xl font-extrabold text-[#fafafa] leading-[1.1] tracking-tight mb-6 drop-shadow-sm`}
            >
              Hello, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">
                {PORTFOLIO_DATA.name}
              </span>
            </MotionH1>

            {/* Description */}
            <MotionP
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`${jetbrainsMono.className} text-base sm:text-lg text-[#a3a3a3] mb-10 leading-relaxed max-w-xl`}
            >
              {PORTFOLIO_DATA.tagline}
            </MotionP>

            {/* Buttons */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-5"
            >
              {/* Magnetic Button */}
              <MagneticButton>
                <Link
                  href="/projects"
                  className={`${jetbrainsMono.className} relative overflow-hidden group inline-flex items-center justify-center px-8 py-4 bg-[#f59e0b] text-[#0a0a0a] text-sm font-bold tracking-wide uppercase transition-all duration-300 no-underline`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">View Projects</span>
                  <div className="absolute inset-0 h-full w-full bg-[#fbbf24] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="Vansh_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${jetbrainsMono.className} relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-sm font-bold tracking-wide uppercase text-[#fafafa] hover:border-[#f59e0b]/30 bg-transparent transition-all duration-300 no-underline`}
                >
                  <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 relative z-10 text-[#f59e0b]" />
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 text-[#a3a3a3] group-hover:text-[#fafafa]">Resume</span>
                  <div className="absolute inset-0 h-full w-full bg-white/5 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </a>
              </MagneticButton>
            </MotionDiv>
          </div>

          {/* Photo */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 relative pt-4 md:ml-auto"
          >
            {/* Minimal aesthetic border & glow */}
            <div className="absolute inset-0 rounded-full bg-[#f59e0b]/20 blur-[60px] md:blur-[80px]" />
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 relative z-10 bg-[#171717] ring-1 ring-[#f59e0b]/20 hover:ring-[#f59e0b]/50 transition-all duration-500">
              <Image
                src="/image.jpg"
                alt="Vansh Sharma"
                width={320}
                height={320}
                className="object-cover w-full h-full grayscale-[20%] contrast-125 transition-all duration-500 hover:grayscale-0 hover:scale-105"
                priority
              />
            </div>
          </MotionDiv>

        </div>

        {/* Stats */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/5 pt-12 pb-8 mt-4 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12"
        >
          {stats.map((stat, i) => (
            <MotionDiv
              key={stat.label}
              className="text-center md:text-left group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
            >
              <p className={`${syne.className} text-4xl sm:text-5xl font-bold text-[#fafafa] mb-2`}>
                {stat.value}
              </p>
              <p className={`${jetbrainsMono.className} text-xs font-semibold text-[#a3a3a3] uppercase tracking-widest`}>
                {stat.label}
              </p>
            </MotionDiv>
          ))}
        </MotionDiv>

      </div>
    </section>
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
      style={{ position: "relative" }}
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
