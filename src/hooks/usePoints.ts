import { useState, useEffect } from 'react';
import { STORAGE_KEYS, getStorageItem, setStorageItem } from '../utils/storage';

export function usePoints() {
  const [points, setPoints] = useState(() => 
    getStorageItem(STORAGE_KEYS.POINTS, 0)
  );

  useEffect(() => {
    setStorageItem(STORAGE_KEYS.POINTS, points);
  }, [points]);

  const addPoints = (amount: number) => {
    setPoints(prev => prev + amount);
  };

  return { points, addPoints };
}