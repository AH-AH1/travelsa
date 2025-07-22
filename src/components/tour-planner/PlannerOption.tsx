import React from 'react';
import { motion } from 'framer-motion';

interface PlannerOptionProps {
  option: string;
  onClick: () => void;
  index: number;
}

export default function PlannerOption({ option, onClick, index }: PlannerOptionProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, backgroundColor: 'rgb(254, 243, 199)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-amber-400 
                 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
    >
      {option}
    </motion.button>
  );
}