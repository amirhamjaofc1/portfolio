'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface SectionHeaderProps {
  number: string; // e.g. "01", "02", "03"
  label: string;  // e.g. "ABOUT", "SKILLS", "FEATURED WORK"
  title: string;  // Punchy headline
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  number,
  label,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={`mb-12 md:mb-20 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {/* Numbered Category Badge */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`inline-flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-[0.22em] ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="font-semibold text-accent">{number}</span>
        <span className="text-muted/50">//</span>
        <span className="text-text-muted">{label}</span>
      </motion.div>

      {/* Main Punchy Headline */}
      <motion.h2
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[1.1]"
      >
        {title}
      </motion.h2>

      {/* Optional Subtitle / Narrative */}
      {description && (
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-text-muted leading-relaxed font-sans"
        >
          {description}
        </motion.p>
      )}

      {/* Accent divider line */}
      <motion.div
        initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`mt-8 h-px bg-gradient-to-r from-accent/50 via-surface-border to-transparent ${
          align === 'center' ? 'mx-auto w-32' : 'w-24 origin-left'
        }`}
      />
    </div>
  );
}

