import { TimelineItem } from '@/types';

export const TIMELINE: TimelineItem[] = [
  {
    id: 'startup-builder',
    type: 'milestone',
    title: 'Founder & Full Stack Product Builder',
    organization: 'Startup Discovery / Stealth',
    location: 'Dhaka, Bangladesh',
    period: '2024 - Present',
    current: true,
    badge: 'Current Venture',
    description: [
      'Architecting and shipping end-to-end web applications with a commercial product mindset, starting with BazarDor.',
      'Conducting user research with local merchants and digital consumers to pinpoint ecommerce and inventory pain points.',
      'Iterating rapidly on product-market fit, focusing on extreme web performance, frictionless onboarding, and conversion optimization.',
      'Building the groundwork for a bootstrapped tech venture in digital commerce infrastructure.',
    ],
    technologies: ['Next.js 14', 'Better Auth', 'PostgreSQL', 'Tailwind CSS', 'Vercel Edge', 'Prisma'],
  },
  {
    id: 'fullstack-dev',
    type: 'experience',
    title: 'Independent Full Stack Web Developer',
    organization: 'Freelance & Open Source Projects',
    location: 'Remote',
    period: '2023 - Present',
    current: true,
    badge: 'Engineering',
    description: [
      'Delivering custom web applications, responsive landing platforms, and bespoke client dashboards with modern frontend frameworks.',
      'Specializing in fluid kinetic web experiences combining Framer Motion, GSAP, and accessible responsive design.',
      'Refactoring legacy codebases into modular, type-safe Next.js and TypeScript architectures.',
      'Collaborating with global open-source developers to improve developer tools and component libraries.',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
  },
  {
    id: 'cs-degree',
    type: 'education',
    title: 'B.Sc. in Computer Science & Engineering',
    organization: 'University Department of CSE', // TODO: Update with your exact University Name (e.g., Brac University, DIU, UIU)
    location: 'Dhaka, Bangladesh',
    period: '2023 - 2027 (Currently 3rd Year)',
    current: true,
    badge: 'Undergraduate',
    description: [
      'Pursuing rigorous training in Computer Science theory, advanced algorithms, and software engineering methodologies.',
      'Coursework mastery: Data Structures & Algorithms, Object-Oriented Programming (C++/Java), Database Management Systems, Computer Networks, Operating Systems, and Software Engineering.',
      'Applying academic algorithms (graph traversal, dynamic programming, tree balancing) directly to practical web performance and state modeling challenges.',
      'Collaborating in academic project labs and competitive programming study circles.',
    ],
    technologies: ['C', 'C++', 'Data Structures', 'Algorithms', 'DBMS', 'OS', 'Networking'],
  },
  {
    id: 'self-taught-foundation',
    type: 'milestone',
    title: 'Intensive Self-Directed Software Engineering',
    organization: 'Autonomous Learning & Project Prototyping',
    location: 'Dhaka, Bangladesh',
    period: '2021 - 2023',
    current: false,
    badge: 'Foundations',
    description: [
      'Completed hundreds of hours of hands-on software development, building full-stack applications from scratch.',
      'Mastered modern JavaScript ES6+, asynchronous programming patterns, document object model manipulation, and component lifecycle paradigms.',
      'Established disciplined version control habits, clean Git commit workflows, and technical documentation practices.',
    ],
    technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Git', 'Linux Basics', 'Web Standards'],
  },
];

