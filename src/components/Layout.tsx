import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-primary-dark font-sans antialiased transition-colors duration-500 flex flex-col text-neutral-text">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 shadow-lg backdrop-blur-sm border-b border-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <Link href="/home" className="flex items-center space-x-2 text-2xl font-bold text-accent no-underline hover:text-neutral-text transition-colors">
              <Code2 className="w-8 h-8" />
              <span>Vansh's Space</span>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex space-x-6 m-0 p-0 list-none">
                {navLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href} className="text-lg font-medium text-neutral-text hover:text-accent transition duration-300 no-underline">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="md:hidden text-neutral-text hover:text-accent p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-primary-dark shadow-xl border-t border-accent/30">
            <ul className="flex flex-col space-y-2 p-4 m-0 list-none">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link 
                    href={href} 
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-neutral-text hover:bg-white/5 hover:text-accent rounded-lg no-underline"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Added mb-12 to main to ensure content doesn't touch footer on small screens */}
      <main className="grow pt-16 mb-12">
        {children}
      </main>

      {/* FIXED: Updated text color to text-neutral-text/60 and increased padding (py-8) */}
      <footer className="bg-primary-dark border-t border-accent/20 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center text-sm text-neutral-text/60">
          <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;