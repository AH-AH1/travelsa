import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  title: string;
  description: string;
  points: number;
  unlocked: boolean;
}

export default function AchievementCard({ title, description, points, unlocked }: AchievementCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-lg border transition-all duration-300 ${
        unlocked ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <motion.div
            animate={unlocked ? { rotate: [0, 360] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Trophy className={`w-5 h-5 ${unlocked ? 'text-amber-500' : 'text-gray-400'}`} />
          </motion.div>
          <h4 className="font-semibold">{title}</h4>
        </div>
        <motion.span
          animate={unlocked ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5 }}
          className={`font-bold ${unlocked ? 'text-amber-500' : 'text-gray-400'}`}
        >
          +{points}
        </motion.span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </motion.div>
  );
}