import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Us"
        description="Your trusted partner in South African travel experiences"
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for showcasing the beauty of South Africa, 
                TravelSA has been creating unforgettable travel experiences for visitors 
                from around the world.
              </p>
              <p className="text-gray-600">
                Our team of experienced travel professionals combines local knowledge 
                with luxury service to deliver exceptional journeys tailored to each 
                guest's preferences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                We strive to provide authentic, sustainable, and luxurious travel 
                experiences that showcase the best of South Africa while supporting 
                local communities and preserving our natural heritage.
              </p>
              <p className="text-gray-600">
                Through personalized service and attention to detail, we aim to exceed 
                our clients' expectations and create memories that last a lifetime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}