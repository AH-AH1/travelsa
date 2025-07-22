import React from 'react';
import { motion } from 'framer-motion';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`
        bg-white rounded-lg p-6 shadow-md
        hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:border-amber-200
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}