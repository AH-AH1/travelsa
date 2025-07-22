import React from 'react';

interface PlannerProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function PlannerProgress({ currentStep, totalSteps }: PlannerProgressProps) {
  return (
    <div className="mb-4">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-amber-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}