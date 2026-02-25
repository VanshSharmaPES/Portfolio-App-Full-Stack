import React, { useState, FormEvent, ChangeEvent, useRef } from 'react';
import Head from 'next/head';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Syne, JetBrains_Mono } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        setStatus('success');
        setMessage(responseData.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setMessage(responseData.message || 'Submission failed.');
      }
    } catch {
      setStatus('error');
      setMessage('A network error occurred.');
    }
  };

  const inputClass =
    `w-full px-5 py-4 mt-2 rounded-xl border border-white/5 bg-[#171717] text-[#fafafa] placeholder-[#a3a3a3]/50 text-base focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]/50 transition-all duration-300 shadow-inner shadow-black/50 ${jetbrainsMono.className}`;

  return (
    <Layout>
      <Head><title>Contact | {PORTFOLIO_DATA.name}</title></Head>

      <section className="min-h-[calc(100vh-64px)] flex flex-col px-6 sm:px-8 lg:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto w-full my-auto py-12 md:py-20 z-10">

          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16"
          >
            <p className={`${jetbrainsMono.className} text-sm font-semibold text-[#f59e0b] uppercase tracking-widest mb-4 inline-block border-b border-[#f59e0b]/20 pb-2`}>
              Contact
            </p>
            <h1 className={`${syne.className} text-5xl md:text-7xl font-extrabold text-[#fafafa] tracking-tight`}>
              Let&apos;s Connect
            </h1>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — info */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <div>
                <h2 className={`${syne.className} text-3xl font-bold text-[#fafafa] mb-6`}>
                  Start a Conversation
                </h2>
                <p className={`${jetbrainsMono.className} text-lg text-[#a3a3a3] leading-relaxed mb-10`}>
                  I&apos;m currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                </p>

                <a
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  className={`${jetbrainsMono.className} inline-flex items-center gap-4 text-base md:text-lg font-medium text-[#fafafa] hover:text-[#f59e0b] transition-colors duration-300 no-underline group`}
                >
                  <div className="p-4 rounded-2xl bg-[#171717] border border-white/5 text-[#f59e0b] group-hover:scale-110 group-hover:bg-[#f59e0b]/10 transition-all duration-300 shadow-lg shadow-black/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="relative">
                    {PORTFOLIO_DATA.contact.email}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#f59e0b] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                <a
                  href={`https://github.com/${PORTFOLIO_DATA.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${jetbrainsMono.className} inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-white/5 bg-[#171717] text-[#a3a3a3] hover:text-[#0a0a0a] hover:bg-[#f59e0b] hover:border-[#f59e0b] transition-all duration-300 no-underline shadow-lg shadow-black/20 group`}
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm uppercase tracking-wider">GitHub</span>
                </a>
                <a
                  href={`https://linkedin.com/in/${PORTFOLIO_DATA.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${jetbrainsMono.className} inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-white/5 bg-[#171717] text-[#a3a3a3] hover:text-[#0a0a0a] hover:bg-[#f59e0b] hover:border-[#f59e0b] transition-all duration-300 no-underline shadow-lg shadow-black/20 group`}
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm uppercase tracking-wider">LinkedIn</span>
                </a>
              </div>
            </MotionDiv>

            {/* Right — form */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Decorative Form Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f59e0b]/10 to-transparent blur-2xl -z-10 rounded-3xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`${jetbrainsMono.className} block text-xs font-bold text-[#a3a3a3] uppercase tracking-widest ml-2`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={`${jetbrainsMono.className} block text-xs font-bold text-[#a3a3a3] uppercase tracking-widest ml-2`}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`${jetbrainsMono.className} block text-xs font-bold text-[#a3a3a3] uppercase tracking-widest ml-2`}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <MagneticButton>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`${jetbrainsMono.className} relative overflow-hidden group w-full flex justify-center items-center gap-3 px-8 py-5 bg-[#f59e0b] text-[#0a0a0a] text-sm font-bold tracking-wide uppercase rounded-xl disabled:opacity-50 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]`}
                  >
                    <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-1">
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                      {status !== 'loading' && <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />}
                    </span>
                    <div className="absolute inset-0 h-full w-full bg-[#fbbf24] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                  </button>
                </MagneticButton>

                {message && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${jetbrainsMono.className} mt-6 p-5 rounded-xl text-sm font-semibold border text-center ${status === 'success'
                      ? 'bg-green-950/20 text-green-400 border-green-900/50'
                      : 'bg-red-950/20 text-red-400 border-red-900/50'
                      }`}
                  >
                    {message}
                  </MotionDiv>
                )}
              </form>
            </MotionDiv>

          </div>
        </div>
      </section>
    </Layout>
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
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <MotionDiv
      style={{ position: "relative", display: "block" }}
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