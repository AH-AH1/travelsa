import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="group relative p-6 bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
    >
      <div className="relative z-10">
        <div className="p-3 bg-amber-400/20 rounded-lg w-fit group-hover:bg-amber-400/30 transition-colors">
          <Icon className="w-6 h-6 text-amber-400" />
        </div>
        <h3 className="font-semibold text-white mt-4 group-hover:text-amber-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mt-2 group-hover:text-white transition-colors">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}