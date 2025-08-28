import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Achievements from '../components/Achievements';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Achievements />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default HomePage;
