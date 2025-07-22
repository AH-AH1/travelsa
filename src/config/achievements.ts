export const initialAchievements = [
  {
    id: 'luxury_explorer',
    title: 'Luxury Explorer',
    description: 'Discover our premium travel options',
    points: 50,
    unlocked: false
  },
  {
    id: 'journey_planner',
    title: 'Journey Planner',
    description: 'Start planning your dream vacation',
    points: 100,
    unlocked: false
  },
  {
    id: 'service_discoverer',
    title: 'Service Discoverer',
    description: 'Explore our full range of services',
    points: 75,
    unlocked: false
  }
] as const;

export type Achievement = typeof initialAchievements[number] & { unlocked: boolean };