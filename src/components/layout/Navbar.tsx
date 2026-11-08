'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const sectionIds = ['about', 'skills', 'projects', 'journey', 'contact'];
  const activeSection = useActiveSection(sectionIds, 180);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'py-3 bg-bg/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-text focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-surface border border-white/10 group-hover:border-accent/60 transition-colors duration-300">
            <span className="font-heading font-black text-sm tracking-tighter text-accent">
              AH
            </span>
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-lg bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-tight text-text group-hover:text-accent transition-colors duration-200">
              Amir Hamja
            </span>
            <span className="font-mono text-[10px] text-text-muted tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Full Stack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-surface/60 border border-white/5 backdrop-blur-md px-4 py-1.5 rounded-full">
          {NAV_LINKS.map((link) => {
            const isActive = isHomePage && activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={isHomePage ? link.href : `/${link.href}`}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors duration-200 flex items-center gap-1.5 ${isActive
                  ? 'text-accent font-semibold'
                  : 'text-text-muted hover:text-text'
                  }`}
              >
                <span className="text-[10px] text-accent/70">{link.number}</span>
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/[0.06] rounded-full border border-accent/30 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA & Resume Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={isHomePage ? '#contact' : '/#contact'}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-bg bg-accent hover:bg-accent-hover transition-all duration-300 shadow-glow-accent hover:shadow-lg"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-white/10 text-text hover:text-accent focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-mono border-b border-white/5 text-text-muted hover:text-accent hover:bg-white/[0.02]"
                >
                  <span className="text-text font-medium">{link.label}</span>
                  <span className="text-xs text-accent">{link.number}</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-bg text-sm font-semibold tracking-wide"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-between pt-3 text-xs text-text-muted font-mono">
                  <span>Status:</span>
                  <span className="text-accent flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    Open for roles &amp; startups
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

