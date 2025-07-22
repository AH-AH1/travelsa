import React from 'react';
import { Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BrandLogo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2 mb-8 group"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Compass className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
      </motion.div>
      <h2 className="text-2xl font-light text-white tracking-wider group-hover:text-amber-300 transition-colors">
        TravelSA
      </h2>
    </motion.div>
  );
}