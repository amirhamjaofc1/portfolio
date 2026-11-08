export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  year: string;
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  role: string;
  timeline: string;
  status: 'Live Production' | 'Active Development' | 'Prototype' | 'Featured';
  techStack: {
    category: string;
    items: string[];
  }[];
  keyFeatures: string[];
  challenges: {
    problem: string;
    solution: string;
  }[];
  architectureHighlights: string[];
  futureRoadmap: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experience: string;
    iconName?: string;
    featured?: boolean;
    tag?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'milestone';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  current?: boolean;
  badge?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: string;
}

