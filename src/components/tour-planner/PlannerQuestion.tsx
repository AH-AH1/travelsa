import React from 'react';
import PlannerOption from './PlannerOption';

interface PlannerQuestionProps {
  question: string;
  options: string[];
  onAnswer: () => void;
}

export default function PlannerQuestion({ question, options, onAnswer }: PlannerQuestionProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h4 className="font-semibold mb-4">{question}</h4>
      <div className="space-y-3">
        {options.map((option, index) => (
          <PlannerOption key={index} option={option} onClick={onAnswer} />
        ))}
      </div>
    </div>
  );
}