import React from 'react';
import { Car } from 'lucide-react';
import { motion } from 'framer-motion';

interface VehicleFeatureProps {
  feature: string;
  delay?: number;
}

export default function VehicleFeature({ feature, delay = 0 }: VehicleFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center space-x-3 group p-3 rounded-lg hover:bg-white/50 transition-colors"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Car className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
      </motion.div>
      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
        {feature}
      </span>
    </motion.div>
  );
}