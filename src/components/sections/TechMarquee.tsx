'use client';

import { MARQUEE_TECH } from '@/data/skills';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function TechMarquee() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Duplicate items for continuous seamless loop
  const marqueeItems = [...MARQUEE_TECH, ...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <section
      aria-label="Technologies Marquee"
      className="py-10 border-y border-white/[0.06] bg-surface-card/40 backdrop-blur-sm overflow-hidden relative select-none"
    >
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div
        className={`flex items-center gap-6 whitespace-nowrap ${
          prefersReducedMotion ? 'overflow-x-auto' : 'animate-marquee hover:[animation-play-state:paused]'
        }`}
      >
        {marqueeItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface/70 border border-white/5 hover:border-accent/40 hover:bg-surface-light transition-all duration-300 group cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
            <span className="font-heading font-semibold text-sm sm:text-base text-text group-hover:text-accent transition-colors">
              {tech.name}
            </span>
            <span className="font-mono text-[11px] text-text-muted/60 group-hover:text-text-muted">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

