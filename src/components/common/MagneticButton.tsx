'use client';

import React from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  ...props
}: MagneticButtonProps) {
  const magneticRef = useMagnetic<HTMLDivElement>({ strength });

  return (
    <div
      ref={magneticRef}
      className={`inline-block transition-transform ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

