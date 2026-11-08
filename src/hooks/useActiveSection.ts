'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export function useActiveSection(sectionIds: string[], offset: number = 220): string {
  const [activeSection, setActiveSection] = useState<string>('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (typeof window === 'undefined') return;

    if (latest < 200) {
      if (activeSection !== '') setActiveSection('');
      return;
    }

    const scrollPosition = latest + offset;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const id = sectionIds[i];
      const element = document.getElementById(id);
      if (element) {
        if (scrollPosition >= element.offsetTop) {
          if (activeSection !== id) {
            setActiveSection(id);
          }
          return;
        }
      }
    }
  });

  return activeSection;
}
