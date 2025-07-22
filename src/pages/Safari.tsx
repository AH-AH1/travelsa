import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import HoverCard from '../components/shared/HoverCard';
import { Compass, Sun, Camera, Tent } from 'lucide-react';

const experiences = [
  {
    icon: Compass,
    title: "Big Five Encounters",
    description: "Get up close with Africa's most magnificent wildlife"
  },
  {
    icon: Sun,
    title: "Sunrise Safaris",
    description: "Early morning game drives for the best wildlife viewing"
  },
  {
    icon: Camera,
    title: "Photo Opportunities",
    description: "Perfect moments to capture unforgettable memories"
  },
  {
    icon: Tent,
    title: "Luxury Camping",
    description: "Experience the wild in comfort and style"
  }
];

export default function Safari() {
  return (
    <div>
      <PageHeader
        title="Safari Adventures"
        description="Discover the untamed beauty of South African wildlife"
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <HoverCard key={index}>
                <experience.icon className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}