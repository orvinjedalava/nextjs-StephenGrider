'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import AnimatePresenceWrapper from '@/components/animate-presence-wrapper';
import { AnimatePresence } from 'framer-motion'
import { useTransitionState } from 'next-transition-router';

interface TransitionProps {
  children: ReactNode
}

const variants = {
  initial: { backgroundColor: "rgba(0,0,0,1)" },
  animate: { backgroundColor: "rgba(0,0,0,0)" },
  exit: { backgroundColor: "rgba(0,0,0,1)" }
  // exit: { opacity: 0, scale: 0 }
}

export default function Transition({ children }: TransitionProps) {
  const { stage } = useTransitionState();

  return (
    // <AnimatePresence mode="wait">
      <motion.div
        key="page" 
        className="relative h-screen"
        // variants={variants}
        initial={ variants.initial }
        animate={stage === 'leaving' ? variants.exit : variants.animate }
        // animate="animate"
        // exit="exit"
        transition={{ 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    // </AnimatePresence>
  )
}
