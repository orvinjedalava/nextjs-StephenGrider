'use client'

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTransitionState } from 'next-transition-router';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0},
  // exit: { opacity: 0, scale: 0 }
}

export default function Hero(props: HeroProps) {
  const { imgData, imgAlt, title } = props;
  const { stage } = useTransitionState();

  return (
    <div className="relative h-screen">
      <motion.div 
        className="absolute -z-10 inset-0"
      >
        <Image
          src={imgData}
          alt={imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </motion.div>
      <div className="pt-48 flex justify-center items-center">
        <motion.h1 
          className="text-white text-6xl"
          initial={variants.initial}
          animate={ stage === 'leaving' ? variants.exit : variants.animate}
          // animate={stage === 'leaving' ? variants.leaving : variants.entering}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
