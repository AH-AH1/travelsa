import { useState, useEffect } from 'react';
import { Achievement } from '../types/gamification';
import { initialAchievements } from '../config/achievements';
import { STORAGE_KEYS, getStorageItem, setStorageItem } from '../utils/storage';

export function useAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>(() => 
    getStorageItem(STORAGE_KEYS.ACHIEVEMENTS, initialAchievements)
  );

  useEffect(() => {
    setStorageItem(STORAGE_KEYS.ACHIEVEMENTS, achievements);
  }, [achievements]);

  const unlockAchievement = (id: string) => {
    setAchievements(prev =>
      prev.map(achievement =>
        achievement.id === id
          ? { ...achievement, unlocked: true }
          : achievement
      )
    );
  };

  return { achievements, unlockAchievement };
}