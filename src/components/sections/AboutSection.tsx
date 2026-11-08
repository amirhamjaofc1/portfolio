'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Rocket, GraduationCap } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { PERSONAL_INFO } from '@/data/content';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function AboutSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-bg overflow-hidden">
      {/* Warm ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[160px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          number="01"
          label="ABOUT"
          title="Bridging Theoretical CS with Shipped Software Products."
          description="A third-year Computer Science student who codes with startup velocity, building robust distributed backends and fluid, kinetic frontends."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Lime-Yellow Photo Card */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            {/* The Lime-Yellow Card matching the yellow wall */}
            <div className="relative w-full max-w-[420px] rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#D7E52A]/20 via-[#D7E52A]/5 to-transparent border border-accent/40 shadow-glow-accent group">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#E2B734]/10 border border-accent/30 shadow-inner">
                {/* Real photo: amir-1-yellow.webp */}
                <Image
                  src="/images/amir-1-yellow.webp"
                  alt="Amir Hamja - Independent Learner and Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-750 ease-out group-hover:scale-105"
                />

                {/* Warm ambient rim vignette ensuring skin tones stay 100% natural */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none opacity-40 mix-blend-soft-light bg-gradient-to-t from-[#BFA328]/30 via-transparent to-transparent"
                />

                {/* Subtle overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-bg/85 backdrop-blur-md border border-accent/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs text-text font-medium">CSE 3rd Year</span>
                  </div>
                  <span className="font-mono text-[11px] text-accent font-semibold">Self-Driven</span>
                </div>
              </div>

              {/* Card caption */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs font-mono text-text-muted">
                <span>AMIR HAMJA // PORTRAIT</span>
                <span className="text-accent">EST. 2023</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story & Engineering Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 text-text-muted text-base sm:text-lg leading-relaxed font-sans"
            >
              <p className="text-text font-medium text-lg sm:text-xl leading-snug">
                {PERSONAL_INFO.aboutStory.lead}
              </p>

              <p>{PERSONAL_INFO.aboutStory.paragraph1}</p>

              <p>{PERSONAL_INFO.aboutStory.paragraph2}</p>
            </motion.div>

            {/* Quick Metrics / Stats Grid */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/[0.08]"
            >
              {PERSONAL_INFO.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl bg-surface/60 border border-white/5 hover:border-accent/30 transition-colors"
                >
                  <span className="block font-heading text-2xl sm:text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </span>
                  <span className="block font-mono text-[11px] sm:text-xs text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Core Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {PERSONAL_INFO.philosophy.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-surface-card border border-white/5 hover:border-white/15 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent mb-3">
                    {idx === 0 && <Code2 className="w-4 h-4" />}
                    {idx === 1 && <Sparkles className="w-4 h-4" />}
                    {idx === 2 && <Rocket className="w-4 h-4" />}
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-text mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

