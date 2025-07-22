import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';

interface AchievementPopupProps {
  title: string;
  points: number;
  isVisible: boolean;
  onClose: () => void;
}

export default function AchievementPopup({ 
  title, 
  points, 
  isVisible, 
  onClose 
}: AchievementPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3"
          onAnimationComplete={() => {
            setTimeout(onClose, 3000);
          }}
        >
          <div className="bg-amber-100 p-2 rounded-full">
            <Trophy className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-sm text-gray-600">+{points} points</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}