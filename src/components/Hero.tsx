import React from 'react';
import { features } from '../config/icons';
import FeatureCard from './FeatureCard';
import HeroButton from './HeroButton';
import HeroBackground from './HeroBackground';
import BrandLogo from './BrandLogo';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <HeroBackground />
      <div className="relative z-10 px-4 py-16 md:py-32 mx-auto max-w-7xl min-h-screen flex flex-col justify-center">
        <BrandLogo />
        <HeroContent />
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <HeroButton primary>Plan Your Journey</HeroButton>
          <HeroButton>View Destinations</HeroButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
}