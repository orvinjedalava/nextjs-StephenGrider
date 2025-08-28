'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TransitionProps {
  children: ReactNode
}

// const variants = {
//   hidden: { opacity: 0  },
//   enter: { opacity: 1 },
//   exit: { opacity: 0 },
// }

export default function Transition({ children }: TransitionProps) {
  return (
    <motion.div 
      className="relative h-screen"
      initial={{ backgroundColor: "rgba(0,0,0,1)" }}
      animate={{ backgroundColor: 'rgba(0,0,0,0)' }}
      exit={{ backgroundColor: "rgba(0,0,0,1)" }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>

    // <motion.div
    //   variants={variants}
    //   initial="hidden"
    //   animate="enter"
    //   exit="exit"
    //   transition={{ 
    //     type: "spring", 
    //     stiffness: 260, 
    //     damping: 20,
    //     duration: 0.2
    //   }}
    //   className="w-full"
    // >
    //   {children}
    // </motion.div>
  )
}
