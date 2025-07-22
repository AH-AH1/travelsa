import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { useGameification } from '../hooks/useGameification';

export default function TourPlanner() {
  const [currentStep, setCurrentStep] = useState(0);
  const { unlockAchievement } = useGameification();
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

  const handleAnswer = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      unlockAchievement('planner');
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Create Your Perfect Journey</h3>
                <div className="space-y-4">
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-amber-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-4">{questions[currentStep].question}</h4>
                    <div className="space-y-3">
                      {questions[currentStep].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={handleAnswer}
                          className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Personalized Tour Planning Made Easy
            </h2>
            <p className="text-gray-600 mb-8">
              Our innovative Tour Planner helps create your perfect South African adventure. Answer a few simple questions, and we'll craft a customized itinerary that matches your interests and preferences.
            </p>
            <div className="space-y-4">
              {[
                "AI-powered recommendations",
                "Real-time availability",
                "Instant pricing",
                "Customizable itineraries"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}