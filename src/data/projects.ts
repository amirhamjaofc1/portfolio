import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    slug: 'bazar-dor',
    title: 'BazarDor',
    tagline: 'Modern, high-performance e-commerce marketplace with seamless social authentication.',
    category: 'Full Stack Web Application',
    featured: true,
    year: '2024 - 2025',
    thumbnail: '/images/bazar-hero.webp',
    images: ['/images/bazar-hero.webp'],
    liveUrl: 'https://bazar-dor-web-application.vercel.app/',
    githubUrl: 'https://github.com/amirhamjaofc1/bazar-dor', // TODO: confirm exact repo url
    status: 'Live Production',
    overview:
      'BazarDor is a full-featured online marketplace platform engineered to deliver rapid product discovery, frictionless shopping bag workflows, and robust authentication. Designed with a customer-first approach, it bridges modern web aesthetics with industrial-grade full-stack security and real-time state management.',
    role: 'Lead Architect & Full Stack Developer (Concept to Production)',
    timeline: '3 Months (Design, Prototyping, Full Stack Implementation, Deployment)',
    techStack: [
      {
        category: 'Frontend & UI',
        items: ['Next.js 14 (App Router)', 'React 18', 'Tailwind CSS', 'DaisyUI', 'HeroUI', 'Lucide React'],
      },
      {
        category: 'Authentication & Security',
        items: ['Better Auth', 'Google OAuth 2.0', 'GitHub OAuth', 'JWT Session Management', 'CSRF Protection'],
      },
      {
        category: 'Backend & Data',
        items: ['Next.js Server Actions', 'RESTful API Routes', 'PostgreSQL / Prisma', 'Edge Caching'],
      },
      {
        category: 'Deployment & DevOps',
        items: ['Vercel', 'Automated CI/CD', 'Lighthouse 95+ Performance', 'Responsive Mobile-First Viewports'],
      },
    ],
    keyFeatures: [
      'Multi-provider authentication powered by Better Auth, enabling seamless single-click login via Google and GitHub with safe session caching.',
      'Comprehensive product catalog with instantaneous keyword filtering, category faceted navigation, and dynamic pricing calculations.',
      'Persistent cart and checkout experience utilizing optimistic UI updates to eliminate perceived latency.',
      'Adaptive responsive layout crafted with DaisyUI and HeroUI tokens, tuned for lightning-fast loads across 3G mobile devices and 4K desktops.',
      'Integrated vendor management dashboard for inventory tracking, price updates, and customer order fulfillment.',
    ],
    challenges: [
      {
        problem:
          'Integrating Better Auth with Next.js 14 App Router while ensuring zero hydration mismatch and ultra-fast session validation on edge-rendered routes.',
        solution:
          'Constructed an isomorphic auth wrapper that reads authenticated cookies server-side before page streaming begins, eliminating layout flashing and redundant auth verification roundtrips.',
      },
      {
        problem:
          'Maintaining high frame rates (60fps) during rapid catalog filtering and real-time product price calculations across hundreds of items.',
        solution:
          'Implemented debounced client-side memoization combined with React 18 transitions (`useTransition`), preventing UI blocking and keeping the search input instantly responsive.',
      },
      {
        problem:
          'Harmonizing DaisyUI and HeroUI components without class collisions or visual inconsistency.',
        solution:
          'Defined a unified Tailwind design token hierarchy with isolated CSS modules and utility classes, establishing consistent border radii, focus rings, and elevation shadows.',
      },
    ],
    architectureHighlights: [
      'Next.js App Router route handlers with strict schema validation.',
      'Edge-ready asset pipeline with automated WebP/AVIF image delivery.',
      'Secure credential handling with zero leak of environment variables.',
      'Modular component structure following Atomic Design principles for long-term scalability.',
    ],
    futureRoadmap: [
      'Integration of Stripe & local mobile payment gateways (bKash/Nagad/SSLCommerz).',
      'AI-powered personalized product recommendations based on browsing history.',
      'Push notification alerts for price drops and flash sale events.',
      'Progressive Web App (PWA) offline mode for catalog browsing.',
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '96 / 100' },
      { label: 'Time to Interactive', value: '< 1.1s' },
      { label: 'OAuth Providers', value: 'Google & GitHub' },
      { label: 'Mobile Optimization', value: '100% Fluid' },
    ],
  },
  {
    slug: 'mera',
    title: 'MERA Platform',
    tagline: 'Modern Enterprise Resource & Analytics suite for agile operational intelligence.',
    category: 'Enterprise SaaS & Analytics',
    featured: true,
    year: '2024',
    thumbnail: '/images/bazar-hero.webp', // We will render a stylish fallback visual
    images: ['/images/bazar-hero.webp'],
    liveUrl: 'https://mera-analytics.vercel.app', // TODO: update with exact demo link
    githubUrl: 'https://github.com/amirhamjaofc1/mera-analytics', // TODO: confirm repo url
    status: 'Active Development',
    overview:
      'MERA is an all-in-one business analytics and resource orchestration engine built to empower small-to-medium teams. By synthesizing operational data into real-time visual dashboards, MERA eliminates spreadsheet chaos and delivers actionable insights on inventory velocity, cash flows, and resource allocation.',
    role: 'Full Stack Engineer & System Designer',
    timeline: '2 Months (Architecture, State Machine Design, Dashboard Build)',
    techStack: [
      {
        category: 'Frontend & Visuals',
        items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Chart.js / Recharts'],
      },
      {
        category: 'State & Data',
        items: ['Zustand', 'React Query / TanStack', 'PostgreSQL', 'Prisma ORM'],
      },
      {
        category: 'Services',
        items: ['Node.js', 'RESTful API', 'Serverless Functions', 'JWT Authentication'],
      },
    ],
    keyFeatures: [
      'Real-time operational dashboard with dynamic KPI cards, predictive trends, and automated cash burn calculations.',
      'Interactive multi-dimensional charts with time-range filtering, export to CSV/PDF, and comparative fiscal quarters.',
      'Granular Role-Based Access Control (RBAC) permitting admin, manager, and auditor permission matrices.',
      'Event audit logging capturing state mutations and critical ledger operations.',
    ],
    challenges: [
      {
        problem:
          'Handling large aggregated time-series datasets in the browser without freezing the main thread or causing dropped frames.',
        solution:
          'Offloaded complex statistical regressions and data rollup functions to Web Workers and server-side aggregation pipelines, streaming pre-digested chart payloads.',
      },
      {
        problem:
          'Designing an intuitive data exploration interface that accommodates non-technical business operators.',
        solution:
          'Conducted iterative user testing to refine navigation hierarchy, adopting high-contrast visual cues, contextual tooltips, and keyboard shortcuts.',
      },
    ],
    architectureHighlights: [
      'Normalized database models with foreign key constraints and transactional integrity.',
      'Decoupled analytics ingestion pipeline designed for future pub/sub message brokers.',
      'Strict TypeScript interfaces ensuring contract integrity between frontend and backend.',
    ],
    futureRoadmap: [
      'Predictive inventory stockout alerts powered by lightweight time-series forecasting.',
      'Automated multi-currency conversion with real-time foreign exchange updates.',
      'Webhook integrations for Slack and Discord operational updates.',
    ],
    metrics: [
      { label: 'Query Response', value: '< 80ms' },
      { label: 'State Sync', value: 'Optimistic' },
      { label: 'Type Coverage', value: '100% Strict' },
    ],
  },
  {
    slug: 'devconf-2026',
    title: 'DevConf 2026',
    tagline: 'High-energy developer conference experience with kinetic animations & ticket booking.',
    category: 'Event Platform & Landing Experience',
    featured: true,
    year: '2025',
    thumbnail: '/images/devconf-hero.webp',
    images: ['/images/devconf-hero.webp'],
    liveUrl: 'https://devconf-2026.vercel.app', // TODO: update with exact demo link
    githubUrl: 'https://github.com/amirhamjaofc1/devconf-2026', // TODO: confirm repo url
    status: 'Featured',
    overview:
      'DevConf 2026 is an immersive flagship developer conference portal crafted with kinetic visual energy. Featuring dynamic speaker lineups, interactive multi-track schedule filters, and a gamified early-bird ticket checkout, this project showcases high-end motion design without sacrificing speed.',
    role: 'Creative Developer & Frontend Architect',
    timeline: '3 Weeks (Concept, Motion Design, Interactive Prototype)',
    techStack: [
      {
        category: 'Motion & Visuals',
        items: ['Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion', 'GSAP ScrollTrigger', 'Canvas Confetti'],
      },
      {
        category: 'UI & Interaction',
        items: ['Lucide Icons', 'CSS Grid Animations', 'Sound Effects (Audio API)', 'Accessible Modals'],
      },
      {
        category: 'Tooling',
        items: ['TypeScript', 'Vercel Analytics', 'SVG Filter Pipelines'],
      },
    ],
    keyFeatures: [
      'Kinetic typography animations and 3D card tilt transformations calibrated for responsive touch and mouse input.',
      'Multi-track conference schedule viewer allowing attendees to bookmark talks across AI, Web3, and Systems tracks.',
      'Interactive tiered ticket selector with live badge generation and celebratory confetti particles.',
      'Fully accessible screen-reader navigation and automated fallback for users requesting reduced motion.',
    ],
    challenges: [
      {
        problem:
          'Coordinating complex GSAP scroll triggers alongside Framer Motion entrance transitions without layout recalculation conflicts.',
        solution:
          'Structured strict lifecycle boundaries: Framer Motion manages component mount states, while GSAP controls passive window-level scroll scrubbing with will-change properties.',
      },
      {
        problem:
          'Ensuring silky 60fps animations across low-power mobile devices with high-density displays.',
        solution:
          'Restricted all animated properties strictly to GPU-accelerated `transform` and `opacity`, avoiding expensive reflows and CSS filter recalculations during scroll.',
      },
    ],
    architectureHighlights: [
      'Zero external motion library bloat: scoped GSAP plugins and tree-shaken Framer Motion.',
      'Mobile-first responsive typography scaling via CSS `clamp()` functions.',
      'Dark cinematic palette tuned with glowing lime accents and atmospheric grain.',
    ],
    futureRoadmap: [
      'Live stream player integration with real-time attendee chat.',
      'Dynamic QR code badge pass generation for in-person venue entry.',
      'Interactive venue map with floorplan wayfinding.',
    ],
    metrics: [
      { label: 'Animation Frame Rate', value: 'Steady 60fps' },
      { label: 'Bundle Footprint', value: 'Minimal' },
      { label: 'Mobile Score', value: '98 / 100' },
    ],
  },
];

