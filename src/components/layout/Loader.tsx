'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete?: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [isDone, setIsDone] = useState(false);

  const handleAnimationComplete = () => {
    // Graceful brief pause after line completes
    setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, 280);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -24,
            filter: 'blur(8px)',
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg px-6 select-none"
        >
          {/* Dual ambient pulse: lime & vibrant purple */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/20 blur-[120px]" />
            <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple/20 blur-[130px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
            {/* System indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs text-accent tracking-[0.25em] uppercase mb-4 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple animate-ping" />
              <span>INITIALIZING ARCHITECTURE</span>
            </motion.div>

            {/* Main Name Reveal */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text"
              >
                Amir Hamja
              </motion.h1>
            </div>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-text-muted text-sm sm:text-base font-sans tracking-wide mb-8"
            >
              Full Stack Web Developer &bull; CSE Student &bull; Startup Builder
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full bg-surface-light/60 h-[2px] rounded-full overflow-hidden relative border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-purple via-detail to-accent"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                onAnimationComplete={handleAnimationComplete}
              />
            </div>

            {/* Status indicators */}
            <div className="flex justify-between w-full mt-3 font-mono text-[11px] text-text-muted">
              <span className="text-purple-light">SYS_READY</span>
              <span className="text-accent">100%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
