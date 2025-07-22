import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useGamification } from '../context/GamificationContext';

export function useInViewAnimation(ref: React.RefObject<HTMLElement>, achievementId: string) {
  const isInView = useInView(ref, { once: true });
  const { unlockAchievement } = useGamification();

  useEffect(() => {
    if (isInView) {
      // Only unlock if not already unlocked
      unlockAchievement(achievementId);
    }
  }, [isInView, achievementId]); // Remove unlockAchievement from dependencies

  return isInView;
}