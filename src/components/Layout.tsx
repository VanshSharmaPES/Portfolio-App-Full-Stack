import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Syne, JetBrains_Mono } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={`min-h-screen bg-[#0a0a0a] font-sans flex flex-col text-[#fafafa] selection:bg-[#f59e0b] selection:text-[#0a0a0a] relative`}>

      {/* Global Background Noise */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-20">

            <Link href="/home" className={`${syne.className} text-2xl font-bold tracking-tight no-underline group`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] group-hover:opacity-80 transition-opacity">
                {PORTFOLIO_DATA.name}
              </span>
            </Link>

            <nav className="hidden md:block">
              <ul className={`flex space-x-10 m-0 p-0 list-none ${jetbrainsMono.className}`}>
                {navLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href} className="relative text-sm font-semibold uppercase tracking-wider text-[#a3a3a3] hover:text-[#fafafa] transition-colors duration-200 no-underline group">
                      {name}
                      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#f59e0b] group-hover:w-full transition-all duration-300 ease-out" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="md:hidden text-[#a3a3a3] hover:text-[#fafafa] p-2 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden absolute top-20 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 shadow-2xl">
            <ul className={`flex flex-col p-4 m-0 list-none space-y-2 ${jetbrainsMono.className}`}>
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-4 text-sm font-semibold uppercase tracking-wider text-[#a3a3a3] hover:text-[#fafafa] hover:bg-white/5 rounded-lg no-underline transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="grow pt-20 relative z-10 w-full">
        {children}
      </main>

      <footer className="border-t border-white/5 py-12 mt-auto relative z-10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center gap-4">
          <div className="w-12 h-[2px] bg-[#f59e0b] rounded-full opacity-50 mb-2"></div>
          <p className={`${jetbrainsMono.className} text-xs uppercase tracking-widest text-[#a3a3a3]`}>
            Built with Next.js &amp; Framer Motion
          </p>
          <p className={`${jetbrainsMono.className} text-xs uppercase tracking-widest text-[#a3a3a3]`}>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;