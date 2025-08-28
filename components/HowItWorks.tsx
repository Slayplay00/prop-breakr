import React from 'react';
import { RocketLaunchIcon } from './icons/RocketLaunchIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { CheckBadgeIcon } from './icons/CheckBadgeIcon';

const Step: React.FC<{ icon: React.ReactNode; title: string; description: string; stepNumber: number }> = ({ icon, title, description, stepNumber }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative flex items-center justify-center w-16 h-16 bg-brand-light-gray border-2 border-brand-primary rounded-full mb-4 text-brand-primary">
      {icon}
      <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-brand-dark">
        {stepNumber}
      </span>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-brand-text-light">{description}</p>
  </div>
);


const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get Funded in 3 Simple Steps</h2>
          <p className="text-lg text-brand-text-light mt-4 max-w-2xl mx-auto">Our process is designed to be fast, secure, and completely transparent.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="absolute top-8 left-0 w-full h-0.5 bg-brand-light-gray hidden md:block" style={{transform: 'translateY(-50%)', zIndex: -1}}></div>
          <div className="absolute top-8 left-1/4 w-1/2 h-0.5 bg-brand-primary hidden md:block" style={{transform: 'translateY(-50%)', zIndex: -1}}></div>

          <Step
            stepNumber={1}
            icon={<RocketLaunchIcon className="w-8 h-8"/>}
            title="Choose Your Plan"
            description="Select your prop firm and the account size you want to get funded for."
          />
          <Step
            stepNumber={2}
            icon={<ChartBarIcon className="w-8 h-8"/>}
            title="We Pass The Challenge"
            description="Our expert traders take over and meticulously trade to meet all profit targets and objectives."
          />
          <Step
            stepNumber={3}
            icon={<CheckBadgeIcon className="w-8 h-8"/>}
            title="Receive Your Funded Account"
            description="Once passed, the account is yours. Start trading live capital or opt-in for our account management."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;