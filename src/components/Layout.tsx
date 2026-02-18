import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
    <div className="min-h-screen bg-primary-dark font-sans antialiased flex flex-col text-text selection:bg-accent selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">

            <Link href="/home" className="text-xl font-bold tracking-tight no-underline hover:opacity-80 transition-opacity">
              <span className="text-gradient">{PORTFOLIO_DATA.name}</span>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex space-x-10 m-0 p-0 list-none">
                {navLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href} className="relative text-base font-medium text-text-muted hover:text-text transition-colors duration-200 no-underline group">
                      {name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-secondary group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="md:hidden text-text-muted hover:text-text p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-primary-dark border-t border-white/5 shadow-2xl">
            <ul className="flex flex-col p-4 m-0 list-none space-y-2">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-text-muted hover:text-text hover:bg-white/5 rounded-lg no-underline transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="grow pt-16">
        {children}
      </main>

      <footer className="border-t border-white/5 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center gap-3">
          <div className="w-8 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full opacity-50 mb-2"></div>
          <p className="text-sm text-text-muted">
            Built with Next.js &amp; TypeScript
          </p>
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;