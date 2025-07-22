import React from 'react';

interface ProgressBarProps {
  current: number;
  max: number;
}

export default function ProgressBar({ current, max }: ProgressBarProps) {
  const percentage = Math.min((current / max) * 100, 100);
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-amber-400 h-2 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}