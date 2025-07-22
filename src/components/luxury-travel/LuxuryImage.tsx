import React from 'react';
import { motion } from 'framer-motion';

export default function LuxuryImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative h-[400px] rounded-lg overflow-hidden group"
    >
      <img 
        src="https://images.unsplash.com/photo-1549194898-60fd030ecc0f?ixlib=rb-4.0.3" 
        alt="Luxury Vehicle"
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}