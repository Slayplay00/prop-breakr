
import React from 'react';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { ClockIcon } from './icons/ClockIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { CheckBadgeIcon } from './icons/CheckBadgeIcon';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-brand-gray/40 backdrop-blur-lg p-6 rounded-lg blended-border transition-all duration-300 hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/10 transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 bg-brand-light-gray rounded-md mb-5 text-brand-primary">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-brand-text-light">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">The PropBreakr Advantage</h2>
          <p className="text-lg text-brand-text-light mt-4 max-w-2xl mx-auto">We're not just a service; we're your partners in trading success.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem
            icon={<UserGroupIcon className="w-7 h-7" />}
            title="Expert Trading Team"
            description="Our team consists of seasoned professional traders who understand the intricacies of prop firm rules."
          />
          <FeatureItem
            icon={<CheckBadgeIcon className="w-7 h-7" />}
            title="98% Success Rate"
            description="We have a proven track record of success, ensuring you have the highest possible chance of getting funded."
          />
          <FeatureItem
            icon={<ClockIcon className="w-7 h-7" />}
            title="Fast Turnaround"
            description="Depending on the challenge, we can get your account funded in as little as a few trading days."
          />
          <FeatureItem
            icon={<ShieldCheckIcon className="w-7 h-7" />}
            title="Secure & Confidential"
            description="Your account credentials and personal information are protected with end-to-end encryption."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;