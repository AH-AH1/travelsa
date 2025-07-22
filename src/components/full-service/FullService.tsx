import React from 'react';
import { Shield, Calendar, Ticket, Hotel } from 'lucide-react';
import ServiceCard from './ServiceCard';
import InteractiveSection from '../shared/InteractiveSection';

const services = [
  {
    icon: Calendar,
    title: "Trip Planning",
    description: "Customized itineraries tailored to your preferences"
  },
  {
    icon: Hotel,
    title: "Accommodations",
    description: "Luxury lodging at South Africa's finest properties"
  },
  {
    icon: Ticket,
    title: "Activities & Tours",
    description: "Priority booking for premium experiences"
  },
  {
    icon: Shield,
    title: "Travel Support",
    description: "24/7 concierge service throughout your journey"
  }
];

export default function FullService() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <InteractiveSection achievementId="service_discoverer">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Relax While We Handle Everything
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From the moment you start planning until your return home, our team takes 
              care of every detail, ensuring a seamless and stress-free travel experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </InteractiveSection>
      </div>
    </section>
  );
}