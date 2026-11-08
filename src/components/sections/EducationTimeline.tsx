'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Sparkles, Calendar, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { TIMELINE } from '@/data/education';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function EducationTimeline() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-accent" />;
      case 'experience':
        return <Briefcase className="w-4 h-4 text-detail-light" />;
      default:
        return <Sparkles className="w-4 h-4 text-accent-2" />;
    }
  };

  return (
    <section id="journey" className="py-24 sm:py-32 relative bg-bg overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-surface-light/20 blur-[150px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          number="04"
          label="JOURNEY &amp; TIMELINE"
          title="From Foundational CS Theory to High-Impact Products."
          description="A chronological record of academic milestones, intensive self-directed engineering, and building toward venture-scale technology."
        />

        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical central glowing line */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-6 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-accent via-detail to-transparent opacity-30"
          />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col md:flex-row items-start"
                >
                  {/* Timeline Node Icon (centered on desktop, left on mobile) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-card border-2 border-accent flex items-center justify-center z-10 shadow-glow-accent">
                    {getIcon(item.type)}
                  </div>

                  {/* Card Content container */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-surface-card border border-white/5 hover:border-accent/30 transition-all duration-300 shadow-xl group">
                      {/* Meta header */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-2 font-mono text-xs ${
                          isEven ? 'md:justify-end' : ''
                        }`}
                      >
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold">
                            {item.badge}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-text-muted">
                          <Calendar className="w-3 h-3 text-accent" />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-text group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <div
                        className={`flex items-center gap-2 text-sm text-detail-light font-medium mt-1 mb-4 ${
                          isEven ? 'md:justify-end' : ''
                        }`}
                      >
                        <span>{item.organization}</span>
                        <span className="text-white/20">&bull;</span>
                        <span className="flex items-center gap-1 text-xs text-text-muted font-normal">
                          <MapPin className="w-3 h-3 text-text-muted" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Description Bullet Points */}
                      <ul className="space-y-2 text-xs sm:text-sm text-text-muted text-left font-sans">
                        {item.description.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      {item.technologies && (
                        <div
                          className={`flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5 ${
                            isEven ? 'md:justify-end' : ''
                          }`}
                        >
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-md bg-surface-light border border-white/5 font-mono text-[10px] text-text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

