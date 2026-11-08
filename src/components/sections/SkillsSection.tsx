'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { SKILL_CATEGORIES } from '@/data/skills';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const tabIcons = [
    <Layout key="fe" className="w-4 h-4" />,
    <Server key="be" className="w-4 h-4" />,
    <Database key="db" className="w-4 h-4" />,
    <Wrench key="tools" className="w-4 h-4" />,
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-bg overflow-hidden">
      {/* Decorative teal ambient light */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-detail/10 blur-[160px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          number="02"
          label="SKILLS &amp; EXPERTISE"
          title="Engineered for Scalability, Speed, and Type-Safety."
          description="A battle-tested stack balancing cutting-edge React ecosystem performance with battle-hardened backend logic and relational data persistence."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-2 border-b border-white/[0.08]">
          {SKILL_CATEGORIES.map((cat, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs sm:text-sm transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-bg font-semibold bg-accent shadow-glow-accent'
                    : 'text-text-muted hover:text-text bg-surface/60 border border-white/5 hover:border-white/15'
                }`}
              >
                <span>{tabIcons[index]}</span>
                <span>{cat.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-bg/20 text-bg' : 'bg-white/5 text-text-muted'
                  }`}
                >
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category header & summary */}
            <div className="mb-8 p-6 rounded-2xl bg-surface-card border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-text mb-1">
                  {SKILL_CATEGORIES[activeTab].title}
                </h3>
                <p className="text-sm text-text-muted font-sans">
                  {SKILL_CATEGORIES[activeTab].description}
                </p>
              </div>

              <div className="font-mono text-xs text-detail-light bg-detail/15 border border-detail/30 px-3.5 py-1.5 rounded-full">
                Production-Ready
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 rounded-2xl bg-surface/50 border border-white/5 hover:border-accent/40 hover:bg-surface/80 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-surface-light flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-heading font-semibold text-base text-text group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {skill.tag && (
                        <span className="font-mono text-[10px] text-text-muted bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                          {skill.tag}
                        </span>
                      )}
                      <span className="font-mono text-xs font-semibold text-accent">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-surface-light overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-detail to-accent rounded-full"
                      initial={prefersReducedMotion ? { width: `${skill.level}%` } : { width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Experience tenure label */}
                  <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-text-muted/70">
                    <span>Experience</span>
                    <span>{skill.experience}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

