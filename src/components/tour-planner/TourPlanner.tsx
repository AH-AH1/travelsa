import React, { useState } from 'react';
import { useGamification } from '../../context/GamificationContext';
import PlannerProgress from './PlannerProgress';
import PlannerQuestion from './PlannerQuestion';
import PlannerContent from './PlannerContent';
import InteractiveSection from '../shared/InteractiveSection';
import HoverCard from '../shared/HoverCard';

const questions = [
  {
    question: "What interests you most about South Africa?",
    options: ["Wildlife & Safaris", "Beaches & Coast", "Wine & Cuisine", "Culture & History"]
  },
  {
    question: "How long would you like to stay?",
    options: ["3-5 days", "1 week", "2 weeks", "More than 2 weeks"]
  },
  {
    question: "What type of experiences do you prefer?",
    options: ["Luxury & Comfort", "Adventure & Activity", "Cultural Immersion", "Relaxation"]
  },
  {
    question: "What's your preferred travel style?",
    options: ["All-Inclusive", "Self-Guided", "Private Guide", "Group Tours"]
  }
];

export default function TourPlanner() {
  const [currentStep, setCurrentStep] = useState(0);
  const { unlockAchievement } = useGamification();

  const handleAnswer = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      unlockAchievement('journey_planner');
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <InteractiveSection achievementId="journey_planner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <HoverCard className="bg-gray-50">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Create Your Perfect Journey
                  </h3>
                  <PlannerProgress 
                    currentStep={currentStep} 
                    totalSteps={questions.length} 
                  />
                  <PlannerQuestion 
                    {...questions[currentStep]} 
                    onAnswer={handleAnswer} 
                  />
                </div>
              </HoverCard>
            </div>
            <div className="order-1 md:order-2">
              <PlannerContent />
            </div>
          </div>
        </InteractiveSection>
      </div>
    </section>
  );
}