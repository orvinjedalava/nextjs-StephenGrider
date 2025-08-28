'use client'

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  const { imgData, imgAlt, title } = props;
  return (
    <div className="relative h-screen">
      <motion.div 
        className="absolute -z-10 inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
