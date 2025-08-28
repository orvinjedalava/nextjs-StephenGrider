'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useTransitionState } from 'next-transition-router';

interface TransitionProps {
  children: ReactNode
}

const variants = {
  initial: { backgroundColor: "rgba(0,0,0,1)" },
  animate: { backgroundColor: "rgba(0,0,0,0)" },
  exit: { backgroundColor: "rgba(0,0,0,1)" }
}

export default function Transition({ children }: TransitionProps) {
  const { stage } = useTransitionState();

  return (
    <motion.div
      key="page" 
      className="relative h-screen"
      initial={ variants.initial }
      animate={stage === 'leaving' ? variants.exit : variants.animate }
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
    
  )
}
