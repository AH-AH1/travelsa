import { useState, useEffect } from 'react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  points: number;
  unlocked: boolean;
}

export function useGameification() {
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('travelsa-points');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem('travelsa-achievements');
    return saved ? JSON.parse(saved) : initialAchievements;
  });

  useEffect(() => {
    localStorage.setItem('travelsa-points', points.toString());
    localStorage.setItem('travelsa-achievements', JSON.stringify(achievements));
  }, [points, achievements]);

  const addPoints = (amount: number) => {
    setPoints(prev => prev + amount);
  };

  const unlockAchievement = (id: string) => {
    setAchievements(prev =>
      prev.map(achievement =>
        achievement.id === id
          ? { ...achievement, unlocked: true }
          : achievement
      )
    );
    const achievement = achievements.find(a => a.id === id);
    if (achievement && !achievement.unlocked) {
      addPoints(achievement.points);
    }
  };

  return { points, achievements, addPoints, unlockAchievement };
}

const initialAchievements: Achievement[] = [
  {
    id: 'explorer',
    title: 'Safari Explorer',
    description: 'Start planning your first safari adventure',
    points: 100,
    unlocked: false
  },
  {
    id: 'planner',
    title: 'Master Planner',
    description: 'Complete your first custom itinerary',
    points: 200,
    unlocked: false
  },
  {
    id: 'luxury',
    title: 'Luxury Seeker',
    description: 'Book your first 5-star accommodation',
    points: 300,
    unlocked: false
  }
];