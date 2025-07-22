import React, { useState } from 'react';
import { Trophy, X } from 'lucide-react';
import { useGameification } from '../hooks/useGameification';

export default function GameificationOverlay() {
  const { points, achievements } = useGameification();
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowAchievements(true)}
        className="fixed bottom-4 right-4 bg-amber-400 text-gray-900 rounded-full p-4 shadow-lg hover:bg-amber-300 transition-colors z-50"
      >
        <Trophy className="w-6 h-6" />
      </button>

      {showAchievements && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Your Journey</h3>
              <button
                onClick={() => setShowAchievements(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Explorer Points</span>
                <span className="text-2xl font-bold text-amber-500">{points}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-amber-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((points / 1000) * 100, 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border ${
                    achievement.unlocked
                      ? 'bg-amber-50 border-amber-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <span className="text-amber-500 font-bold">
                      +{achievement.points}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}