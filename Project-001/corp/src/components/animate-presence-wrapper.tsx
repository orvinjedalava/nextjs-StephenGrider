'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, cloneElement, isValidElement } from 'react'
import { motion } from 'framer-motion';

interface AnimatePresenceWrapperProps {
  children: ReactNode
}

export default function AnimatePresenceWrapper({ children }: AnimatePresenceWrapperProps) {
  const pathname = usePathname()

  console.log(pathname);
  
  return (
    <AnimatePresence mode="wait">
      {/* {isValidElement(children) 
        ? cloneElement(children, { key: pathname })
        : <div key={pathname}>{children}</div>
      } */}

      <motion.div key={pathname}>{children}</motion.div>
    </AnimatePresence>
  )
}
