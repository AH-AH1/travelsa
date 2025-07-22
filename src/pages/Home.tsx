import React from 'react';
import Hero from '../components/Hero';
import Specialization from '../components/Specialization';
import LuxuryTravel from '../components/luxury-travel/LuxuryTravel';
import TourPlanner from '../components/tour-planner/TourPlanner';
import FullService from '../components/full-service/FullService';

export default function Home() {
  return (
    <>
      <Hero />
      <Specialization />
      <LuxuryTravel />
      <TourPlanner />
      <FullService />
    </>
  );
}