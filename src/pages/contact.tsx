import React, { useState, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import { Send, Github, Linkedin, Sparkles, Mail, MessageSquare } from 'lucide-react';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

// --- TYPE FIX ---
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
    } catch (error) {
      setStatus('error');
      setMessage('A network error occurred.');
    }
  };

  return (
    <Layout>
      <Head><title>Contact | {PORTFOLIO_DATA.name}</title></Head>
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-surface-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
                Get In Touch
                <span className="absolute -top-1 -right-8 text-accent text-sm animate-bounce">💬</span>
              </h2>
            </div>
            <div className="relative h-1 w-32 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            </div>
          </MotionDiv>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="group p-6 bg-gradient-to-br from-surface-light/60 to-surface-light/30 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-neutral-text mb-2">Email Me</h3>
                <p className="text-neutral-text/80 text-sm">{PORTFOLIO_DATA.contact.email}</p>
              </MotionDiv>
              
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="group p-6 bg-gradient-to-br from-surface-light/60 to-surface-light/30 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-neutral-text mb-2">Let's Connect</h3>
                <p className="text-neutral-text/80 text-sm">Available for freelance projects</p>
              </MotionDiv>
            </div>
            
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative bg-gradient-to-br from-surface-light/80 to-surface-light/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-neutral-text border-2 border-accent/20 hover:shadow-accent/10 transition-shadow duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="group">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium mb-2 text-accent">
                    <span className="w-2 h-2 bg-accent rounded-full group-focus-within:scale-150 transition-transform"></span>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border-2 border-accent/30 rounded-xl shadow-sm focus:ring-2 focus:ring-accent focus:border-accent bg-primary-dark/50 text-neutral-text placeholder-neutral-text/30 transition-all duration-300 hover:border-accent/50"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2 text-accent">
                    <span className="w-2 h-2 bg-accent rounded-full group-focus-within:scale-150 transition-transform"></span>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-accent/30 rounded-xl shadow-sm focus:ring-2 focus:ring-accent focus:border-accent bg-primary-dark/50 text-neutral-text placeholder-neutral-text/30 transition-all duration-300 hover:border-accent/50"
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium mb-2 text-accent">
                    <span className="w-2 h-2 bg-accent rounded-full group-focus-within:scale-150 transition-transform"></span>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 border-2 border-accent/30 rounded-xl shadow-sm focus:ring-2 focus:ring-accent focus:border-accent bg-primary-dark/50 text-neutral-text placeholder-neutral-text/30 transition-all duration-300 hover:border-accent/50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative w-full flex justify-center items-center px-8 py-4 border-2 border-transparent text-base font-semibold rounded-xl shadow-lg text-primary-dark bg-accent hover:bg-accent/90 disabled:opacity-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {status === 'loading' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message 
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>

              {message && (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`mt-6 p-4 rounded-xl text-sm text-center font-medium border-2 ${
                    status === 'success' 
                      ? 'bg-green-900/30 text-green-300 border-green-500/30' 
                      : 'bg-red-900/30 text-red-300 border-red-500/30'
                  }`}
                >
                  {message}
                </MotionDiv>
              )}
            </MotionDiv>

            {/* Social links with enhanced effects */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center space-x-8 pt-4"
            >
              <a 
                href={`https://github.com/${PORTFOLIO_DATA.contact.github}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-4 bg-gradient-to-br from-surface-light/60 to-surface-light/30 rounded-xl border border-accent/20 hover:border-accent/40 text-neutral-text hover:text-accent transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <div className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Github className="w-8 h-8 relative group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href={`https://linkedin.com/in/${PORTFOLIO_DATA.contact.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-4 bg-gradient-to-br from-surface-light/60 to-surface-light/30 rounded-xl border border-accent/20 hover:border-accent/40 text-neutral-text hover:text-accent transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <div className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Linkedin className="w-8 h-8 relative group-hover:rotate-12 transition-transform" />
              </a>
            </MotionDiv>
          </div>
        </div>
      </section>
    </Layout>
  );
}