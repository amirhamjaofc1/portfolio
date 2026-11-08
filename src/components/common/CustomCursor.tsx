'use client';

import { useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Global mouse coordinates reactive store
let mousePos = { x: -100, y: -100, isTouch: false };
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => {
    listener();
  });
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return mousePos;
}

function getServerSnapshot() {
  return { x: -100, y: -100, isTouch: true };
}

if (typeof window !== 'undefined') {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  mousePos = { ...mousePos, isTouch };

  window.addEventListener(
    'pointermove',
    (e: PointerEvent) => {
      mousePos = { x: e.clientX, y: e.clientY, isTouch: false };
      emitChange();
    },
    { passive: true }
  );
}

export function CustomCursor() {
  const pos = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(pos.x);
  const mouseY = useMotionValue(pos.y);

  mouseX.set(pos.x);
  mouseY.set(pos.y);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  if (pos.isTouch || pos.x < 0) return null;

  return (
    <>
      {/* Center sharp dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-accent"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
        }}
      />

      {/* Trailing smooth magnetic ring with subtle purple rim */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-purple/40 bg-purple/5 backdrop-blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
        }}
      />
    </>
  );
}
