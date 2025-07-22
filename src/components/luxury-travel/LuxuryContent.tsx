import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import VehicleFeature from './VehicleFeature';
import AnimatedHeading from '../shared/AnimatedHeading';
import AnimatedText from '../shared/AnimatedText';
import { useInView } from 'framer-motion';
import { useGamification } from '../../context/GamificationContext';

const features = [
  "Luxury air-conditioned vehicles",
  "Professional chauffeur services",
  "Scenic route planning",
  "Flexible scheduling"
];

export default function LuxuryContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { unlockAchievement } = useGamification();

  React.useEffect(() => {
    if (isInView) {
      unlockAchievement('luxury_explorer');
    }
  }, [isInView]); // Remove unlockAchievement from dependencies

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <AnimatedHeading>
        Explore in Comfort and Style
      </AnimatedHeading>
      
      <AnimatedText className="text-gray-600 mb-8" delay={0.2}>
        Travel South Africa in ultimate luxury with our premium fleet of vehicles. 
        From Mercedes-Benz luxury sedans to high-end SUVs, every journey is an 
        experience in comfort and sophistication.
      </AnimatedText>

      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {features.map((feature, index) => (
          <VehicleFeature 
            key={index} 
            feature={feature} 
            delay={index * 0.1} 
          />
        ))}
      </motion.div>
    </motion.div>
  );
}