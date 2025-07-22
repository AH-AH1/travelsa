import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import HoverCard from '../components/shared/HoverCard';
import { Car, Clock, Shield, MapPin } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: "Premium Fleet",
    description: "Modern, comfortable vehicles for all group sizes"
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Available round-the-clock for your convenience"
  },
  {
    icon: Shield,
    title: "Safe Travel",
    description: "Professional drivers and maintained vehicles"
  },
  {
    icon: MapPin,
    title: "Any Destination",
    description: "Transport to all major locations in South Africa"
  }
];

export default function ShuttleService() {
  return (
    <div>
      <PageHeader
        title="Shuttle Service"
        description="Reliable and comfortable transportation across South Africa"
        image="https://images.unsplash.com/photo-1549194898-60fd030ecc0f"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <HoverCard key={index}>
                <service.icon className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}