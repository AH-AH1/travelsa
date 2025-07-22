import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { Car, Users, Clock, Star } from 'lucide-react';
import HoverCard from '../components/shared/HoverCard';

const features = [
  {
    icon: Car,
    title: "Luxury Vehicles",
    description: "Travel in comfort with our fleet of premium vehicles"
  },
  {
    icon: Users,
    title: "Personal Guide",
    description: "Expert local guides for personalized experiences"
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Tours adapted to your preferred timing"
  },
  {
    icon: Star,
    title: "Custom Itinerary",
    description: "Tailored experiences based on your interests"
  }
];

export default function PrivateTours() {
  return (
    <div>
      <PageHeader
        title="Private Tours"
        description="Experience South Africa your way with our exclusive private tours"
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <HoverCard key={index}>
                <feature.icon className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}