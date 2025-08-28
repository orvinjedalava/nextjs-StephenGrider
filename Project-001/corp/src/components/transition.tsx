'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TransitionProps {
  children: ReactNode
}

const variants = {
  hidden: { opacity: 0, x: 200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
}

export default function Transition({ children }: TransitionProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.3
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
