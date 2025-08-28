
import React from 'react';
import type { Plan } from '../types';

const plans: Plan[] = [
  {
    accountSize: '$25,000',
    price: 249,
    features: ['1-Phase or 2-Phase', 'Full Challenge Passing', 'Guaranteed Payout Ready', '24/7 Support'],
    isMostPopular: false,
  },
  {
    accountSize: '$50,000',
    price: 399,
    features: ['1-Phase or 2-Phase', 'Full Challenge Passing', 'Guaranteed Payout Ready', '24/7 Support'],
    isMostPopular: false,
  },
  {
    accountSize: '$100,000',
    price: 599,
    features: ['1-Phase or 2-Phase', 'Full Challenge Passing', 'Guaranteed Payout Ready', 'Priority Support'],
    isMostPopular: true,
  },
  {
    accountSize: '$200,000',
    price: 999,
    features: ['1-Phase or 2-Phase', 'Full Challenge Passing', 'Guaranteed Payout Ready', 'Dedicated Account Manager'],
    isMostPopular: false,
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const PricingCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const cardClasses = `rounded-xl p-8 flex flex-col h-full bg-brand-gray/40 backdrop-blur-lg ${
    plan.isMostPopular ? 'border-2 border-brand-primary' : 'blended-border'
  }`;
  
  return (
    <div className={cardClasses}>
      {plan.isMostPopular && (
        <div className="bg-brand-primary text-white text-xs font-bold px-4 py-1 rounded-full absolute -top-4 right-8">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-white">{plan.accountSize} Account</h3>
      <p className="text-brand-text-light mt-2">One-time service fee</p>
      <div className="my-8">
        <span className="text-5xl font-black text-white">${plan.price}</span>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon />
            <span className="ml-3 text-brand-text">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-auto font-bold py-3 rounded-lg transition-all duration-300 ${
        plan.isMostPopular 
          ? 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/30' 
          : 'bg-brand-light-gray text-white hover:bg-gray-700'
      }`}>
        Start Now
      </button>
    </div>
  );
};


const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Choose Your Path to Funding</h2>
          <p className="text-lg text-brand-text-light mt-4 max-w-2xl mx-auto">Transparent one-time fees. No hidden costs. Get the capital you deserve.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div key={plan.accountSize} className="relative">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
        <div className="text-center mt-16 p-8 md:p-12 bg-brand-gray/40 backdrop-blur-lg blended-border rounded-xl">
            <h3 className="text-3xl font-bold text-white">Expert Account Management</h3>
            <p className="text-brand-primary font-semibold mt-2 text-lg">We only win when you win.</p>
            <p className="text-brand-text-light mt-4 mb-6 max-w-2xl mx-auto">Already have a funded account? Let our professionals manage it for you. We handle the trades and split the profits, so you can focus on your life while your capital grows.</p>
            
            <div className="bg-brand-primary/10 border-2 border-dashed border-brand-primary rounded-lg p-6 max-w-xl mx-auto mb-8">
              <h4 className="font-bold text-xl text-brand-primary">Get Your First Payout FREE!</h4>
              <p className="text-white mt-1">As a welcome bonus, your first profit split is on us. You keep 100% of the earnings from your first payout.</p>
            </div>

            <button className="bg-brand-secondary text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105">
                Explore Account Management
            </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;