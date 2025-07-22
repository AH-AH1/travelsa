import React from 'react';
import { Car } from 'lucide-react';

export default function LuxuryTravel() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore in Comfort and Style</h2>
            <p className="text-gray-600 mb-8">
              Travel South Africa in ultimate luxury with our premium fleet of vehicles. From Mercedes-Benz luxury sedans to high-end SUVs, every journey is an experience in comfort and sophistication.
            </p>
            <div className="space-y-4">
              {[
                "Luxury air-conditioned vehicles",
                "Professional chauffeur services",
                "Scenic route planning",
                "Flexible scheduling"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1549194898-60fd030ecc0f?ixlib=rb-4.0.3" 
              alt="Luxury Vehicle"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}