import { useState, useCallback } from 'react';

export function useAchievementPopup() {
  const [achievementPopup, setAchievementPopup] = useState({
    isVisible: false,
    title: '',
    points: 0
  });

  const showAchievementPopup = useCallback((title: string, points: number) => {
    setAchievementPopup({
      isVisible: true,
      title,
      points
    });
  }, []);

  const hideAchievementPopup = useCallback(() => {
    setAchievementPopup(prev => ({
      ...prev,
      isVisible: false
    }));
  }, []);

  return {
    achievementPopup,
    showAchievementPopup,
    hideAchievementPopup
  };
}