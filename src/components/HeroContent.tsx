import React from 'react';
import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight mb-6">
        Discover the <span className="gradient-text">Magic</span> of South Africa
      </h1>
      <div className="relative">
        <p className="text-xl text-gray-200 max-w-2xl">
          Experience luxury safaris, pristine beaches, and world-class wineries in the heart of Africa's most diverse destination.
        </p>
        <div className="absolute inset-0 shimmer"></div>
      </div>
    </motion.div>
  );
}