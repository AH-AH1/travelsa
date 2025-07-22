import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedHeading({ children, className = '' }: AnimatedHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-4xl font-bold mb-6 ${className}`}
    >
      {children}
    </motion.h2>
  );
}