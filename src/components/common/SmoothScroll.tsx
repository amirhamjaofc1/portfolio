'use client';

import { ReactLenis } from 'lenis/react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 1.8,
      }}
    >
      {children}
    </ReactLenis>
  );
}
