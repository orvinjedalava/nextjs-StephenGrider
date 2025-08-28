'use client';

import { useRef } from 'react';
import { TransitionRouter } from 'next-transition-router';
import { animate } from 'framer-motion/dom';
import Transition from '@/components/transition';


export default function Providers({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null!);
  
  return (
    <TransitionRouter
      auto
      leave={(next) => {
        animate(
          wrapperRef.current,
          { backgroundColor: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"] },
          { duration: 0.3, onComplete: next }
        );
      }}
      enter={(next) => {
        animate(
          wrapperRef.current, 
          { backgroundColor: ["rgba(0,0,0,1)", "rgba(0,0,0,0)"] },
          { duration: 0.3, onComplete: next }
        );
      }}
    >
      {/* Need to use Transition for root page enter and exit animation */}
      <div ref={wrapperRef}>
          <Transition>
            {children}
          </Transition>
      </div>
    </TransitionRouter>
  );
}
