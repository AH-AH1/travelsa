import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="p-6 bg-gray-800/80 backdrop-blur-sm rounded-lg group hover:bg-gray-700 
                 transition-all duration-300 border border-gray-700 hover:border-amber-400"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-amber-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </motion.div>
  );
}