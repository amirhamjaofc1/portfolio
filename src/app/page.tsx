import { Loader } from '@/components/layout/Loader';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechMarquee } from '@/components/sections/TechMarquee';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EducationTimeline } from '@/components/sections/EducationTimeline';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 0. Cinematic Initial Name Reveal Loader */}
      <Loader />

      {/* 1. Hero Section with amir-2-dark parallax portrait */}
      <HeroSection />

      {/* 2. Infinite Tech Stack Marquee */}
      <TechMarquee />

      {/* 3. 01 About Section with amir-1-yellow card */}
      <AboutSection />

      {/* 4. 02 Skills & Expertise Section */}
      <SkillsSection />

      {/* 5. 03 Featured Projects Section */}
      <ProjectsSection />

      {/* 6. 04 Education & Journey Timeline */}
      <EducationTimeline />

      {/* 7. 05 Contact Section with amir-3-night crimson glow */}
      <ContactSection />
    </>
  );
}

