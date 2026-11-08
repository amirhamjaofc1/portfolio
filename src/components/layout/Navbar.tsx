'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const sectionIds = ['about', 'skills', 'projects', 'journey', 'contact'];
  const activeSection = useActiveSection(sectionIds, 220);

  // Modern Framer Motion scroll hook
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 30);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-bg/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/30'
          : 'py-5 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-text focus:outline-none select-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-white/10 group-hover:border-purple/60 group-hover:shadow-glow-purple transition-all duration-300">
            <span className="font-heading font-black text-sm tracking-tight text-accent group-hover:text-purple-light transition-colors">
              AH
            </span>
            <div className="absolute inset-0 rounded-xl bg-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight text-text group-hover:text-accent transition-colors duration-200">
              Amir Hamja
            </span>
            <span className="font-sans text-[11px] font-medium text-text-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Modern Professional Typography */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/70 border border-white/10 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = isHomePage && activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={isHomePage ? link.href : `/${link.href}`}
                className={`relative px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'text-accent font-semibold'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                )}
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/[0.08] border border-accent/30 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions: Let's Talk with subtle purple gradient aura */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={isHomePage ? '#contact' : '/#contact'}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold text-bg bg-accent hover:bg-accent-hover transition-all duration-300 shadow-glow-accent hover:shadow-glow-purple"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-white/10 text-text hover:text-accent focus:outline-none"
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
            className="md:hidden bg-bg/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-sans font-medium border-b border-white/5 text-text-muted hover:text-accent hover:bg-white/[0.03]"
                >
                  <span className="text-text">{link.label}</span>
                  <span className="text-xs font-mono text-purple-light">{link.number}</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-bg font-sans text-sm font-semibold"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-between pt-3 text-xs text-text-muted font-sans">
                  <span>Status:</span>
                  <span className="text-accent flex items-center gap-1.5 font-medium">
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
