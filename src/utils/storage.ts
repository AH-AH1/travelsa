export const STORAGE_KEYS = {
  ACHIEVEMENTS: 'travelsa-achievements',
  POINTS: 'travelsa-points'
} as const;

export function getStorageItem<T>(key: string, defaultValue: T): T {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
}

export function setStorageItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}