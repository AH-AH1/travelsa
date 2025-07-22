import React from 'react';
import { motion } from 'framer-motion';

interface HeroButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

export default function HeroButton({ children, primary = false }: HeroButtonProps) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-8 py-4 rounded-full font-semibold transition-colors relative
        overflow-hidden group
        ${primary 
          ? 'bg-amber-400 text-gray-900 hover:bg-amber-300' 
          : 'border-2 border-white text-white hover:bg-white/10'
        }
      `}
    >
      <span className="relative z-10">{children}</span>
      <div className={`
        absolute inset-0 -translate-x-full group-hover:translate-x-0 
        transition-transform duration-300
        ${primary ? 'bg-amber-300' : 'bg-white/10'}
      `} />
    </motion.button>
  );
}