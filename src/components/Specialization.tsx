import React from 'react';
import { Compass, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Specialization() {
  const cards = [
    {
      icon: Compass,
      title: "Curated Experiences",
      description: "From the Kruger National Park to the Cape Winelands, we craft unforgettable journeys through South Africa's most iconic destinations."
    },
    {
      icon: Award,
      title: "Luxury Standards",
      description: "Experience South Africa in ultimate comfort with our carefully selected 5-star accommodations and exclusive experiences."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated team ensures your journey is seamless from start to finish with round-the-clock assistance."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Premier South African Travel Partner
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-8 bg-white rounded-2xl shadow-lg card-hover"
            >
              <div className="p-4 bg-amber-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <item.icon className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}