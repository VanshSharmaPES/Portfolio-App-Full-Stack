import React, { useState, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import { Send, Github, Linkedin } from 'lucide-react';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';

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
      <section className="min-h-screen pt-10 px-4 sm:px-8 lg:px-16 bg-primary-dark text-neutral-text">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium mb-10 border-b-4 border-accent pb-2 inline-block">Get In Touch</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {/* CHANGED: text-primary-dark -> text-neutral-text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface-light p-8 rounded-xl shadow-2xl text-neutral-text border border-accent/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-accent">Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    // CHANGED: Dark inputs for Cyber theme
                    className="w-full px-4 py-2 border border-primary-dark rounded-lg shadow-sm focus:ring-2 focus:ring-accent focus:border-transparent bg-primary-dark/50 text-neutral-text placeholder-neutral-text/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-accent">Email *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 border border-primary-dark rounded-lg shadow-sm focus:ring-2 focus:ring-accent focus:border-transparent bg-primary-dark/50 text-neutral-text placeholder-neutral-text/30"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-accent">Message *</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                    className="w-full px-4 py-2 border border-primary-dark rounded-lg shadow-sm focus:ring-2 focus:ring-accent focus:border-transparent bg-primary-dark/50 text-neutral-text placeholder-neutral-text/30"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-primary-dark bg-accent hover:bg-accent/80 disabled:opacity-50 transition duration-300 transform hover:scale-[1.01]"
                >
                  {status === 'loading' ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>Send Message <Send className="ml-2 w-5 h-5" /></>
                  )}
                </button>
              </form>

              {message && (
                <div className={`mt-4 p-3 rounded-lg text-sm text-center font-medium ${
                  status === 'success' ? 'bg-green-900/30 text-green-300 border border-green-500/30' : 'bg-red-900/30 text-red-300 border border-red-500/30'
                }`}>
                  {message}
                </div>
              )}
            </motion.div>

            <div className="flex justify-center space-x-6 pt-4">
              <a href={`https://github.com/${PORTFOLIO_DATA.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-neutral-text hover:text-accent transition duration-300 transform hover:scale-110">
                <Github className="w-8 h-8" />
              </a>
              <a href={`https://linkedin.com/in/${PORTFOLIO_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-neutral-text hover:text-accent transition duration-300 transform hover:scale-110">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}