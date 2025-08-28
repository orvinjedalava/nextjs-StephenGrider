'use client';

import { useRef } from 'react';
import { TransitionRouter } from 'next-transition-router';
import { animate } from 'framer-motion/dom';

export default function Providers({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null!);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        animate(
          wrapperRef.current,
          // { opacity: [1, 0] },
          { backgroundColor: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"] },
          { duration: 0.5, onComplete: next }
        );
      }}
      enter={(next) => {
        animate(
          wrapperRef.current, 
          // { opacity: [0, 1] },
          { backgroundColor: ["rgba(0,0,0,1)", "rgba(0,0,0,0)"] },
          { duration: 0.5, onComplete: next }
        );
      }}
    >
      <div ref={wrapperRef}>{children}</div>
    </TransitionRouter>
  );
}
