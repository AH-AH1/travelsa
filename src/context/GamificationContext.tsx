import React, { createContext, useContext } from 'react';
import { usePoints } from '../hooks/usePoints';
import { useAchievements } from '../hooks/useAchievements';
import type { GamificationContextType } from '../types/gamification';

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const { points, addPoints } = usePoints();
  const { achievements, unlockAchievement } = useAchievements();

  return (
    <GamificationContext.Provider value={{ points, achievements, addPoints, unlockAchievement }}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}