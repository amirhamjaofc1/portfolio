'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/content';
import { MagneticButton } from '@/components/common/MagneticButton';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Scroll parallax for hero portrait - modern hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const imageY = useTransform(smoothProgress, [0, 1], ['0%', '14%']);
  const textY = useTransform(smoothProgress, [0, 1], ['0%', '8%']);
  const opacity = useTransform(smoothProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-36 sm:pt-40 md:pt-44 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-bg"
    >
      {/* Background ambient lighting - warm lime paired with subtle neon purple glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[400px] bg-accent/8 blur-[160px] pointer-events-none rounded-full -z-10" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] sm:w-[600px] h-[420px] bg-purple/15 blur-[180px] pointer-events-none rounded-full -z-10" />

      {/* Decorative subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #F2F2EE 1px, transparent 1px), linear-gradient(to bottom, #F2F2EE 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bio & Text Content */}
          <motion.div
            style={prefersReducedMotion ? {} : { y: textY, opacity }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Status Pill with subtle purple & lime border */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface/80 border border-white/10 hover:border-purple/40 backdrop-blur-md text-xs font-sans mb-6 transition-colors shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-text-muted font-medium">Available for Contracts &bull; Building Next-Gen Startup</span>
            </motion.div>

            {/* Main Headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={prefersReducedMotion ? { opacity: 1 } : { y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-text leading-[1.02]"
              >
                Amir Hamja
              </motion.h1>
            </div>

            {/* Animated Role Text */}
            <div className="overflow-hidden mb-6">
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-accent"
              >
                <span>Full Stack Web Developer</span>
                <span className="text-text-muted/40 font-sans text-sm">//</span>
                <span className="text-text-muted text-lg sm:text-xl font-normal hidden sm:inline">
                  CSE Student
                </span>
              </motion.div>
            </div>

            {/* Tagline / Narrative summary */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-sans mb-8"
            >
              Third-year Computer Science &amp; Engineering student architecting scalable full-stack web
              systems, fluid kinetic interfaces, and purpose-built digital products.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <MagneticButton strength={0.25}>
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-semibold text-bg bg-accent hover:bg-accent-hover transition-all duration-300 shadow-glow-accent hover:shadow-glow-purple"
                >
                  <span>View Selected Work</span>
                  <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-sans text-sm font-medium text-text bg-surface/80 hover:bg-surface-light border border-white/10 hover:border-purple/50 transition-all duration-300"
                >
                  <Download className="w-4 h-4 text-purple-light transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>Resume / CV</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Socials & GitHub / LinkedIn Links */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-4 text-xs font-sans text-text-muted"
            >
              <span className="text-text-muted/60 uppercase tracking-widest text-[10px] font-semibold">Connect:</span>
              <a
                href={PERSONAL_INFO.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/amirhamjaofc1</span>
              </a>
              <span className="text-white/15">&bull;</span>
              <a
                href={PERSONAL_INFO.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors duration-200"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>amir-hamja01</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Portrait with safe top clearance, Lime Rim Light & Purple Accent */}
          <motion.div
            style={prefersReducedMotion ? {} : { y: imageY }}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0 pt-2 lg:pt-4"
          >
            <div className="relative w-full max-w-[400px] lg:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08] hover:border-purple/40 bg-surface-card group shadow-2xl transition-all duration-500">
              {/* Lime Rim Light on side (left edge glow) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    'linear-gradient(110deg, rgba(215, 229, 42, 0.26) 0%, rgba(215, 229, 42, 0.08) 25%, transparent 60%)',
                }}
              />

              {/* Edge mask to seamlessly blend charcoal background of photo into page #0B0B0D */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  boxShadow: 'inset 0 0 55px 18px #0B0B0D',
                }}
              />

              {/* Subtle film grain texture specifically across the photo frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none z-20 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* The Hero Photo: amir-2-dark */}
              <Image
                src="/images/amir-2-dark.webp"
                alt="Amir Hamja - Full Stack Web Developer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Floating tech badge in corner with purple touch */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between p-3.5 rounded-2xl bg-bg/85 backdrop-blur-md border border-white/10 group-hover:border-purple/30 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-purple-light border border-purple/30">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-heading text-xs font-semibold text-text">
                      Startup Focus
                    </span>
                    <span className="block font-sans text-[11px] text-text-muted">
                      Full-Stack Architecture
                    </span>
                  </div>
                </div>

                <div className="font-mono text-xs text-purple-light bg-purple/15 px-2.5 py-1 rounded-full border border-purple/30">
                  v2026.1
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
