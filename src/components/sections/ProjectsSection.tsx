'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { PROJECTS } from '@/data/projects';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function ProjectsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-bg overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 blur-[180px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          number="03"
          label="FEATURED WORK"
          title="Hand-Crafted Web Products &amp; Production Systems."
          description="Each project reflects rigorous software engineering: from secure multi-provider authentication and database models to 60fps kinetic design."
        />

        {/* Project Cards Stack */}
        <div className="space-y-16 lg:space-y-24">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.slug}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl bg-surface-card border border-white/[0.08] hover:border-accent/40 transition-all duration-500 overflow-hidden p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-glow-card"
              >
                {/* Accent ambient glow inside card */}
                <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none group-hover:bg-accent/10 transition-all duration-500" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview / Media Frame */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-surface border border-white/10 group-hover:border-accent/40 transition-all duration-500"
                    >
                      {/* Image Preview */}
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} Preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Status badge */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-text font-medium">{project.status}</span>
                      </div>

                      {/* Year pill */}
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-bg/80 backdrop-blur-md border border-white/10 font-mono text-xs text-text-muted">
                        {project.year}
                      </div>

                      {/* Hover action prompt */}
                      <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-bg font-mono text-xs font-semibold shadow-lg">
                        <span>Explore Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </div>

                  {/* Narrative & Details */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Category Label */}
                      <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{project.category}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text group-hover:text-accent transition-colors duration-300 mb-3">
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>

                      {/* Tagline */}
                      <p className="text-base text-text-muted leading-relaxed font-sans mb-6">
                        {project.tagline}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack
                          .flatMap((stack) => stack.items)
                          .slice(0, 6)
                          .map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-surface-light/80 border border-white/5 font-mono text-[11px] text-text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.techStack.flatMap((stack) => stack.items).length > 6 && (
                          <span className="px-2 py-1 rounded-lg bg-surface border border-white/5 font-mono text-[11px] text-accent">
                            +{project.techStack.flatMap((stack) => stack.items).length - 6} more
                          </span>
                        )}
                      </div>

                      {/* Metrics if available */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/5">
                          {project.metrics.slice(0, 2).map((m) => (
                            <div key={m.label} className="p-3 rounded-xl bg-surface/40 border border-white/5">
                              <span className="block font-heading font-bold text-base text-text">
                                {m.value}
                              </span>
                              <span className="block font-mono text-[10px] text-text-muted uppercase">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bg font-mono text-xs font-semibold hover:bg-accent-hover transition-colors shadow-glow-accent"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-surface border border-white/10 hover:border-white/25 text-text font-mono text-xs transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-accent" />
                          <span>Live Site</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub Repository`}
                          className="w-10 h-10 rounded-full bg-surface border border-white/10 hover:border-accent/40 flex items-center justify-center text-text-muted hover:text-accent transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

