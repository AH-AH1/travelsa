import React from 'react';
import PlannerFeatures from './PlannerFeatures';
import { motion } from 'framer-motion';

export default function PlannerContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Personalized Tour Planning Made Easy
      </h2>
      <p className="text-gray-600 mb-8">
        Our innovative Tour Planner helps create your perfect South African adventure. 
        Answer a few simple questions, and we'll craft a customized itinerary that 
        matches your interests and preferences.
      </p>
      <PlannerFeatures />
    </motion.div>
  );
}