'use client';

import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '@/data/content';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-accent/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/[0.06]">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-heading font-black text-2xl text-text tracking-tight">
                  Amir Hamja
                </span>
                <span className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-sm">
                Full Stack Web Developer &amp; Computer Science undergraduate. Building
                production web applications, fluid digital interactions, and preparing to launch my
                startup.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:bg-surface-light transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:bg-surface-light transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:bg-surface-light transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="font-mono text-[10px] text-accent/60">{link.number}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Availability info */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Availability
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Currently open for select freelance contracts, engineering opportunities, and startup
                partnerships.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-white/10 text-xs font-mono text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span>Available Q1/Q2 2026</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="block font-mono text-xs text-text-muted">
                Location: <strong className="text-text font-normal">{PERSONAL_INFO.location}</strong>
              </span>
              <span className="block font-mono text-xs text-text-muted mt-1">
                Timezone: <strong className="text-text font-normal">{PERSONAL_INFO.timezone}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            &copy; {currentYear} Amir Hamja. Crafted with Next.js, Tailwind, Framer Motion &amp; GSAP.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-200"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

