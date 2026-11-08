import { SkillCategory } from '@/types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    description: 'Engineering responsive, pixel-precise web interfaces with 60fps kinetic motion.',
    skills: [
      { name: 'Next.js (App Router)', level: 94, experience: '2+ years', featured: true, tag: 'Core' },
      { name: 'React 18 / 19', level: 95, experience: '3+ years', featured: true, tag: 'Core' },
      { name: 'TypeScript', level: 90, experience: '2+ years', featured: true, tag: 'Type-Safe' },
      { name: 'Tailwind CSS', level: 96, experience: '3+ years', featured: true, tag: 'Styling' },
      { name: 'Framer Motion', level: 92, experience: '2+ years', featured: true, tag: 'Motion' },
      { name: 'GSAP + ScrollTrigger', level: 86, experience: '1.5+ years', featured: true, tag: 'Cinematic' },
      { name: 'HTML5 & Modern CSS3', level: 98, experience: '3+ years', featured: false, tag: 'Semantics' },
      { name: 'DaisyUI & HeroUI', level: 90, experience: '1.5+ years', featured: false, tag: 'Component Kits' },
    ],
  },
  {
    title: 'Backend & Systems',
    description: 'Designing resilient server architectures, secure auth flows, and low-latency APIs.',
    skills: [
      { name: 'Node.js', level: 88, experience: '2.5+ years', featured: true, tag: 'Runtime' },
      { name: 'Express.js', level: 86, experience: '2+ years', featured: false, tag: 'Framework' },
      { name: 'Better Auth', level: 92, experience: '1+ year', featured: true, tag: 'Auth Security' },
      { name: 'RESTful API Architecture', level: 94, experience: '3+ years', featured: true, tag: 'Contracts' },
      { name: 'Next.js Server Actions', level: 90, experience: '1.5+ years', featured: true, tag: 'Full Stack' },
      { name: 'OAuth 2.0 / JWT / CSRF', level: 88, experience: '2+ years', featured: false, tag: 'Security' },
      { name: 'Serverless Functions', level: 84, experience: '1.5+ years', featured: false, tag: 'Cloud Compute' },
    ],
  },
  {
    title: 'Database & Cloud',
    description: 'Modeling normalized data, ensuring consistency, and maintaining cloud deployments.',
    skills: [
      { name: 'PostgreSQL', level: 87, experience: '2+ years', featured: true, tag: 'Relational' },
      { name: 'MongoDB', level: 85, experience: '2+ years', featured: false, tag: 'NoSQL' },
      { name: 'Prisma ORM', level: 90, experience: '2+ years', featured: true, tag: 'ORM' },
      { name: 'Supabase / Firebase', level: 84, experience: '1.5+ years', featured: false, tag: 'BaaS' },
      { name: 'Vercel Deployment', level: 95, experience: '2.5+ years', featured: true, tag: 'Edge Platform' },
      { name: 'Redis Caching', level: 78, experience: '1+ year', featured: false, tag: 'In-Memory' },
    ],
  },
  {
    title: 'Core CS & Engineering Tools',
    description: 'Underpinned by Computer Science fundamentals, algorithm design, and developer tooling.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 88, experience: '3 years (CSE Curriculum)', featured: true, tag: 'CS Theory' },
      { name: 'C / C++', level: 85, experience: '3 years', featured: false, tag: 'Systems' },
      { name: 'Git & GitHub Workflows', level: 94, experience: '3+ years', featured: true, tag: 'VCS' },
      { name: 'Docker Fundamentals', level: 80, experience: '1+ year', featured: false, tag: 'Containers' },
      { name: 'Linux / Bash Shell', level: 82, experience: '2+ years', featured: false, tag: 'OS' },
      { name: 'Postman & API Testing', level: 90, experience: '2+ years', featured: false, tag: 'DevTools' },
      { name: 'Vite & Webpack Tooling', level: 86, experience: '2+ years', featured: false, tag: 'Bundlers' },
    ],
  },
];

export const MARQUEE_TECH = [
  { name: 'Next.js', category: 'Framework' },
  { name: 'React', category: 'Library' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Better Auth', category: 'Security' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'GSAP', category: 'Motion' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'VCS' },
  { name: 'C++', category: 'CS Core' },
  { name: 'DaisyUI', category: 'UI Kit' },
  { name: 'Vercel', category: 'Deployment' },
];

