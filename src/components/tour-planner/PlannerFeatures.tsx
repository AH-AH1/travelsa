import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "AI-powered recommendations",
  "Real-time availability",
  "Instant pricing",
  "Customizable itineraries"
];

export default function PlannerFeatures() {
  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          <Check className="w-5 h-5 text-green-500" />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
}