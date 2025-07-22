export interface Achievement {
  id: string;
  title: string;
  description: string;
  points: number;
  unlocked: boolean;
}

export interface GamificationContextType {
  points: number;
  achievements: Achievement[];
  addPoints: (amount: number) => void;
  unlockAchievement: (id: string) => void;
}