

import React from 'react';
import Features from '../components/Features';
import { TrendingUpIcon } from '../components/icons/TrendingUpIcon';
import { UserGroupIcon } from '../components/icons/UserGroupIcon';
import { HandshakeIcon } from '../components/icons/HandshakeIcon';


const ManagementFeature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mx-auto flex items-center justify-center w-12 h-12 bg-brand-light-gray rounded-md mb-4 text-brand-primary">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-brand-text-light">{description}</p>
  </div>
);

const FeaturesPage: React.FC = () => {
  return (
    <>
      <Features />

      <section className="pb-20 bg-transparent">
        <div className="container">
          <div className="bg-brand-gray/40 backdrop-blur-lg blended-border rounded-xl p-8 md:p-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Expert Account Management</h2>
              <p className="text-brand-primary font-semibold mt-2 text-xl">We only win when you win.</p>
              <p className="text-lg text-brand-text-light mt-4 max-w-3xl mx-auto">
                Once you're funded, the journey doesn't have to stop. Let our team of professional traders manage your account, turning your funded status into a consistent, hands-free income stream.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <ManagementFeature
                icon={<UserGroupIcon className="w-7 h-7" />}
                title="Professional Trading"
                description="Our seasoned traders apply their proven strategies to your account, navigating the markets on your behalf."
              />
              <ManagementFeature
                icon={<TrendingUpIcon className="w-7 h-7" />}
                title="Hands-Free Growth"
                description="Enjoy the benefits of a professionally managed account without the stress of day-to-day trading. True passive growth."
              />
              <ManagementFeature
                icon={<HandshakeIcon className="w-7 h-7" />}
                title="Aligned Interests"
                description="We operate on a profit-split model. We only make money when you do, ensuring our goals are perfectly aligned."
              />
            </div>
            
            <div className="text-center">
                <div className="bg-brand-primary/10 border-2 border-dashed border-brand-primary rounded-lg p-6 max-w-xl mx-auto mb-8">
                  <h4 className="font-bold text-xl text-brand-primary">Get Your First Payout FREE!</h4>
                  <p className="text-white mt-1">To prove our commitment, your first profit split is entirely on us. You keep 100% of the profits from your first payout cycle.</p>
                </div>

                <a
                  href="#/pricing"
                  className="bg-brand-secondary text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105"
                >
                    Learn More & Get Started
                </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;