import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  CheckCircle2,
  Calendar,
  UserCheck,
  Zap,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { PageTransition } from '@/components/common/PageTransition';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found | Amir Hamja',
    };
  }

  return {
    title: `${project.title} — Case Study | Amir Hamja`,
    description: project.overview,
    openGraph: {
      title: `${project.title} — Case Study | Amir Hamja`,
      description: project.tagline,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const projectIndex = PROJECTS.findIndex((p) => p.slug === params.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  return (
    <PageTransition>
      <main className="min-h-screen bg-bg text-text pt-28 pb-20 overflow-hidden relative">
        {/* Ambient background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/5 blur-[160px] pointer-events-none rounded-full -z-10" />

        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          {/* Back to Work Link & Breadcrumb */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all projects</span>
            </Link>

            <div className="font-mono text-xs text-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>{project.category}</span>
            </div>
          </div>

          {/* Header section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 font-mono text-xs text-text-muted mb-3">
              <span className="text-accent">{project.year}</span>
              <span>&bull;</span>
              <span className="text-detail-light">{project.status}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text mb-4">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-text-muted font-sans leading-relaxed max-w-3xl mb-8">
              {project.tagline}
            </p>

            {/* Quick Action Buttons (Live Site & GitHub) */}
            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-bg font-mono text-xs font-semibold hover:bg-accent-hover transition-colors shadow-glow-accent"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Application</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-white/10 hover:border-accent/40 text-text font-mono text-xs font-medium hover:bg-surface-light transition-colors"
                >
                  <Github className="w-4 h-4 text-accent" />
                  <span>View Source Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Hero Media Preview */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-surface border border-white/10 mb-16 shadow-2xl">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </div>

          {/* Quick Meta Grid: Role, Timeline, Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 p-6 rounded-2xl bg-surface-card border border-white/5">
            <div>
              <span className="block font-mono text-[11px] text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                <span>My Role</span>
              </span>
              <p className="font-heading font-medium text-sm text-text">{project.role}</p>
            </div>

            <div>
              <span className="block font-mono text-[11px] text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Timeline</span>
              </span>
              <p className="font-heading font-medium text-sm text-text">{project.timeline}</p>
            </div>

            <div>
              <span className="block font-mono text-[11px] text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Deployment</span>
              </span>
              <p className="font-heading font-medium text-sm text-text">Vercel Edge &amp; CI/CD</p>
            </div>
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-16">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
                <span className="text-accent font-mono text-sm">01 //</span>
                <span>Executive Overview</span>
              </h2>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed font-sans">
                {project.overview}
              </p>
            </section>

            {/* Metrics */}
            {project.metrics && (
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
                  <span className="text-accent font-mono text-sm">02 //</span>
                  <span>Performance &amp; Quality Metrics</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-5 rounded-2xl bg-surface/70 border border-white/5"
                    >
                      <span className="block font-heading text-2xl font-bold text-accent mb-1">
                        {m.value}
                      </span>
                      <span className="block font-mono text-xs text-text-muted uppercase">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Stack Breakdown */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
                <span className="text-accent font-mono text-sm">03 //</span>
                <span>Technology Stack Breakdown</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.techStack.map((stack) => (
                  <div
                    key={stack.category}
                    className="p-5 rounded-2xl bg-surface-card border border-white/5"
                  >
                    <h3 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                      {stack.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg bg-surface border border-white/5 font-mono text-xs text-text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
                <span className="text-accent font-mono text-sm">04 //</span>
                <span>Key Engineering Capabilities</span>
              </h2>

              <div className="space-y-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface/50 border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-base text-text-muted font-sans leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Architectural Challenges & Solutions */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
                <span className="text-accent font-mono text-sm">05 //</span>
                <span>Challenges &amp; Technical Solutions</span>
              </h2>

              <div className="space-y-4">
                {project.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-surface-card border border-white/5 space-y-3"
                  >
                    <div className="flex items-start gap-2 text-accent-2 font-mono text-xs uppercase tracking-wider font-semibold">
                      <span>Problem:</span>
                    </div>
                    <p className="text-sm sm:text-base text-text font-medium leading-relaxed font-sans">
                      {item.problem}
                    </p>

                    <div className="pt-2 border-t border-white/5">
                      <span className="block font-mono text-xs text-detail-light uppercase tracking-wider font-semibold mb-1">
                        Architectural Solution:
                      </span>
                      <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Future Roadmap */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
                <span className="text-accent font-mono text-sm">06 //</span>
                <span>Future Iterations &amp; Startup Roadmap</span>
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.futureRoadmap.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-xl bg-surface/50 border border-white/5 flex items-start gap-3"
                  >
                    <Zap className="w-4 h-4 text-accent-2 mt-1 shrink-0" />
                    <span className="text-sm text-text-muted font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Pagination Navigation Footer */}
          <div className="mt-20 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col items-start"
              >
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider flex items-center gap-1 group-hover:text-accent">
                  <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                  <span>Previous Project</span>
                </span>
                <span className="font-heading font-bold text-base text-text group-hover:text-accent transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/#projects"
              className="px-5 py-2 rounded-full bg-surface border border-white/10 font-mono text-xs text-text hover:border-accent/40 transition-colors"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col items-end text-right"
              >
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider flex items-center gap-1 group-hover:text-accent">
                  <span>Next Project</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="font-heading font-bold text-base text-text group-hover:text-accent transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}

