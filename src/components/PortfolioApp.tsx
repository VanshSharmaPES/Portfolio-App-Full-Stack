import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Menu, X, Code, Briefcase, User, Mail, Zap, Github, Linkedin, Send } from 'lucide-react';

// --- CONFIGURATION DATA ---
// Update this data object with your actual information, projects, and social handles.
const PORTFOLIO_DATA = {
  name: "Vansh Sharma",
  title: "Full Stack Developer (MERN + Next.js)",
  tagline: "Building scalable, type-safe, and highly responsive web applications.",
  about: "I am a passionate Full Stack Developer with 5 years of experience in the MERN stack (MongoDB, Express, React, Node.js) and modern frameworks like Next.js and TypeScript. I focus on clean architecture, performance, and delivering excellent user experiences that work flawlessly across all devices and orientations. I thrive on solving complex problems and transforming ideas into production-ready software.",
  skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "Express.js", "MongoDB", "Git"],
  projects: [
    { id: 1, title: "NextAuth E-commerce Backend", description: "Built a secure e-commerce backend with NextAuth for authentication and Stripe integration for payments.", technologies: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Stripe"], link: "#" },
    { id: 2, title: "TypeScript Task Manager App", description: "A simple, type-safe To-Do application demonstrating clean state management and reusable components in React/TS.", technologies: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"], link: "#" },
    { id: 3, title: "Microservices API Gateway", description: "Developed a Node.js/Express API Gateway to manage routing and rate limiting for several backend microservices.", technologies: ["Node.js", "Express.js", "Rate Limiting", "Docker"], link: "#" },
  ],
  contact: {
    email: "vansh.sharma.dev@example.com",
    github: "VanshSharmaDev",
    linkedin: "vansh-sharma-profile",
  }
};

// --- TYPESCRIPT INTERFACE DEFINITIONS ---
interface FormData {
  name: string;
  email: string;
  message: string;
}

// --- COMPONENTS ---

/**
 * Generic Section Wrapper component.
 */
const Section: React.FC<{ id: string, title?: string, children: React.ReactNode, className?: string }> = ({ id, title, children, className = '' }) => (
  <section id={id} className={`min-h-screen pt-20 px-4 sm:px-8 lg:px-16 py-12 bg-white dark:bg-gray-900 transition-colors duration-500 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {title && (
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 border-b-4 border-indigo-500 pb-2 inline-block">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

/**
 * Responsive Navigation Bar.
 */
const Navbar: React.FC<{ sections: { name: string, href: string }[], isOpen: boolean, setIsOpen: (isOpen: boolean) => void }> = ({ sections, isOpen, setIsOpen }) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm transition-colors duration-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <a href="#hero" className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          <Zap className="w-6 h-6" />
          <span>{PORTFOLIO_DATA.name.split(' ')[0]}'s DevFolio</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {sections.map(({ name, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-lg font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu Content (Visible on small screens) */}
    {isOpen && (
      <nav id="mobile-menu" className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 origin-top">
        <ul className="flex flex-col space-y-2 p-4">
          {sections.map(({ name, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-indigo-400 rounded-lg transition duration-300"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )}
  </header>
);

/**
 * Hero Section (The initial introduction).
 */
const HeroSection: React.FC = () => (
  <Section id="hero" className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-8rem)] pt-16">
      <div className="max-w-lg mb-10 md:mb-0">
        <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Hello, I'm</p>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {PORTFOLIO_DATA.name}
        </h1>
        <h2 className="text-3xl sm:text-4xl text-gray-600 dark:text-gray-400 font-light mt-2 mb-6">
          {PORTFOLIO_DATA.title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          {PORTFOLIO_DATA.tagline}
        </p>
        <a
          href="#projects"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition duration-300 transform hover:scale-105"
        >
          View My Work
          <Briefcase className="ml-2 w-5 h-5" />
        </a>
      </div>
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500 dark:border-indigo-400 flex items-center justify-center bg-gray-200 dark:bg-gray-700 shrink-0">
        {/* Placeholder for Profile Picture */}
        <User className="w-24 h-24 text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  </Section>
);

/**
 * About Me Section and Core Skills.
 */
const AboutSection: React.FC = () => (
  <Section id="about" title="About Me">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      <div className="lg:col-span-2 space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {PORTFOLIO_DATA.about}
        </p>
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          I am always open to new opportunities and collaborations. Let's build something great together.
        </p>
      </div>
      <div className="lg:col-span-1 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner">
        <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Core Skills</h3>
        <ul className="space-y-3">
          {PORTFOLIO_DATA.skills.map(skill => (
            <li key={skill} className="flex items-center text-gray-700 dark:text-gray-300">
              <Code className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
              <span className="font-medium">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

/**
 * Projects Showcase Section.
 */
const ProjectsSection: React.FC = () => (
  <Section id="projects" title="My Projects" className="bg-gray-50 dark:bg-gray-900">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {PORTFOLIO_DATA.projects.map(project => (
        <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

/**
 * Contact Section with MongoDB API integration logic.
 */
const ContactSection: React.FC = () => {
  // Explicitly define state types for TypeScript
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
      // API call to the Next.js API route: /api/contact
      const response = await fetch('/api/contact', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        setStatus('success');
        setMessage(responseData.message || 'Message sent successfully! I will be in touch soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle API returning a failure status
        setStatus('error');
        setMessage(responseData.message || 'Submission failed due to server error.');
      }
    } catch (error) {
      // Handle network errors
      console.error('Network Error:', error);
      setStatus('error');
      setMessage('A network error occurred. Please check your connection.');
    }
  };


  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Contact Form */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:disabled:bg-indigo-700 transition duration-300 transform hover:scale-[1.01]"
            >
              {status === 'loading' ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Status Message */}
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-sm text-center font-medium ${
              status === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
              status === 'error' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : ''
            }`}>
              {message}
            </div>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 pt-4">
          <a
            href={`https://github.com/${PORTFOLIO_DATA.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href={`https://linkedin.com/in/${PORTFOLIO_DATA.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>

      </div>
    </Section>
  );
};

/**
 * Footer Component.
 */
const Footer: React.FC = () => (
  <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
      <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
    </div>
  </footer>
);

/**
 * Main Application Component.
 */
const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans antialiased transition-colors duration-500">
      <Navbar
        sections={sections}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
      
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;