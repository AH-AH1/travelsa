import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGamification } from '../../context/GamificationContext';
import { Trophy } from 'lucide-react';

interface InteractiveSectionProps {
  children: React.ReactNode;
  achievementId: string;
  className?: string;
}

export default function InteractiveSection({ children, achievementId, className = '' }: InteractiveSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { unlockAchievement, achievements } = useGamification();
  
  const achievement = achievements.find(a => a.id === achievementId);
  const isUnlocked = achievement?.unlocked;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative group ${className}`}
      onViewportEnter={() => !isUnlocked && unlockAchievement(achievementId)}
    >
      {children}
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-4 -right-4 bg-amber-400 rounded-full p-2 shadow-lg"
        >
          <Trophy className="w-4 h-4 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
}