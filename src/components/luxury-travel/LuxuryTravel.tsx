import React from 'react';
import LuxuryContent from './LuxuryContent';
import LuxuryImage from './LuxuryImage';
import InteractiveSection from '../shared/InteractiveSection';

export default function LuxuryTravel() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <InteractiveSection achievementId="luxury_explorer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <LuxuryContent />
            <LuxuryImage />
          </div>
        </InteractiveSection>
      </div>
    </section>
  );
}