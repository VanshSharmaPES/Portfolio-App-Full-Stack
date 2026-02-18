import React, { useState, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionDiv = motion.div as any;

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
    'w-full px-5 py-3 md:py-4 rounded-xl border border-white/10 bg-surface-light text-text placeholder-text-muted/50 text-sm md:text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200';

  return (
    <Layout>
      <Head><title>Contact | {PORTFOLIO_DATA.name}</title></Head>

      <section className="min-h-[calc(100vh-64px)] flex flex-col px-6 sm:px-8 lg:px-16 py-10 md:py-0">
        <div className="max-w-7xl mx-auto w-full my-auto">

          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-10"
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-4">Get In Touch</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16 items-center">

            {/* Left — info */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-8 md:space-y-10"
            >
              <div>
                <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6 md:mb-8">
                  I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                </p>

                <a
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  className="inline-flex items-center gap-3 text-base md:text-lg font-medium text-text hover:text-accent transition-colors duration-200 no-underline"
                >
                  <div className="p-2 md:p-3 rounded-full bg-surface-light border border-white/10 text-accent">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  {PORTFOLIO_DATA.contact.email}
                </a>
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                <a
                  href={`https://github.com/${PORTFOLIO_DATA.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-surface-light text-text-muted hover:text-text hover:border-accent transition-all duration-200 no-underline"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={`https://linkedin.com/in/${PORTFOLIO_DATA.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-surface-light text-text-muted hover:text-text hover:border-accent transition-all duration-200 no-underline"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </MotionDiv>

            {/* Right — form */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2 ml-1">
                      Name
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
                    <label htmlFor="email" className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2 ml-1">
                      Email
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
                  <label htmlFor="message" className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary text-primary-dark text-base font-bold rounded-xl hover:opacity-90 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-orange-500/20"
                >
                  {status === 'loading' ? 'Sending…' : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {message && (
                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-xl text-sm font-medium border ${status === 'success'
                    ? 'bg-green-950/40 text-green-400 border-green-900'
                    : 'bg-red-950/40 text-red-400 border-red-900'
                    }`}
                >
                  {message}
                </MotionDiv>
              )}
            </MotionDiv>

          </div>
        </div>
      </section>
    </Layout>
  );
}