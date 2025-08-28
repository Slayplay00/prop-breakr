

import React from 'react';
import CTA from '../components/CTA';
import { SparklesIcon } from '../components/icons/SparklesIcon';
import { EyeIcon } from '../components/icons/EyeIcon';
import { ScaleIcon } from '../components/icons/ScaleIcon';
import { HandshakeIcon } from '../components/icons/HandshakeIcon';

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-brand-gray/40 backdrop-blur-lg p-6 rounded-lg blended-border">
    <div className="flex items-center justify-center w-12 h-12 bg-brand-light-gray rounded-md mb-5 text-brand-primary">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-brand-text-light">{description}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-transparent">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">We're Democratizing Trading Success</h1>
          <p className="text-lg md:text-xl text-brand-text-light mt-6 max-w-3xl mx-auto">
            PropBreakr was founded by a group of veteran traders who saw countless talented individuals fail to launch their careers not due to a lack of skill, but a lack of capital. We're here to break down that barrier.
          </p>
        </div>
      </section>

      <section className="py-20 bg-transparent">
        <div className="container bg-brand-gray/40 backdrop-blur-lg border-y border-white/5 rounded-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Story</h2>
              <p className="text-brand-text-light mt-4">
                Born from the trading floors and late-night chart analyses, PropBreakr was created to solve a single, frustrating problem: the prop firm challenge. We witnessed too many skilled traders get stuck in the endless loop of evaluations, drained of their own capital before they ever had a chance to prove themselves with a funded account.
              </p>
              <p className="text-brand-text-light mt-4">
                We assembled a team of professionals—not just traders, but risk managers and strategists—who have mastered these evaluations. Our goal was to create a service that was not only effective but also built on a foundation of trust and transparency. Today, we've helped hundreds of traders break through and secure the funding they need to change their lives.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
               <div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-brand-primary">Our Mission</h3>
                  <p className="text-brand-text">To provide every deserving trader with a fair and accessible path to obtaining a funded trading account, removing the financial barriers that hinder their potential.</p>
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-brand-primary">Our Vision</h3>
                  <p className="text-brand-text">To be the most trusted and effective partner for traders globally, creating a world where trading success is determined by skill and discipline, not by the size of one's starting capital.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-transparent">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h2>
            <p className="text-lg text-brand-text-light mt-4 max-w-2xl mx-auto">These principles are the bedrock of our service and our commitment to you.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<ScaleIcon className="w-7 h-7" />}
              title="Integrity First"
              description="We operate with unwavering honesty and ethical standards. Your trust is our most valuable asset."
            />
            <ValueCard 
              icon={<SparklesIcon className="w-7 h-7" />}
              title="Unmatched Expertise"
              description="Our strategies are built on years of professional trading experience and rigorous risk management."
            />
            <ValueCard 
              icon={<EyeIcon className="w-7 h-7" />}
              title="Complete Transparency"
              description="We believe in clear communication. You'll be kept informed throughout the entire process."
            />
            <ValueCard 
              icon={<HandshakeIcon className="w-7 h-7" />}
              title="Client Partnership"
              description="Your success is our success. We treat every client's challenge as if it were our own."
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default AboutPage;