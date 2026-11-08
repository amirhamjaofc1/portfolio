'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete?: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if session has already displayed the full intro
    const hasLoaded = sessionStorage.getItem('portfolio_intro_seen');
    const intervalTime = hasLoaded ? 12 : 22;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem('portfolio_intro_seen', 'true');
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        // Random incremental feel
        const jump = Math.floor(Math.random() * 8) + 3;
        return Math.min(100, prev + jump);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg px-6 select-none"
        >
          {/* Subtle background ambient pulse */}
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
            {/* Monospace section indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-4"
            >
              INITIALIZING ARCHITECTURE
            </motion.div>

            {/* Main Name Reveal */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text"
              >
                Amir Hamja
              </motion.h1>
            </div>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-muted text-sm sm:text-base font-sans tracking-wide mb-8"
            >
              Full Stack Web Developer &bull; CSE Student &bull; Startup Builder
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full bg-surface-light/60 h-[2px] rounded-full overflow-hidden relative border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-detail to-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Numeric Percentage & Status */}
            <div className="flex justify-between w-full mt-3 font-mono text-[11px] text-text-muted">
              <span className="text-detail">SYSTEM_READY</span>
              <span className="text-accent">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

