
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container">
        <div className="bg-brand-gray/40 backdrop-blur-lg blended-border rounded-xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Get Your Funded Account?
          </h2>
          <p className="text-lg text-brand-text-light mt-4 max-w-2xl mx-auto">
            Stop leaving your trading career to chance. Let our experts handle the evaluation, so you can start trading with the capital you deserve.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#/pricing"
              className="bg-brand-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-brand-primary-hover transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-brand-primary/30 w-full sm:w-auto"
            >
              Get Funded Now
            </a>
             <a
              href="#/contact"
              className="text-brand-text-light hover:text-white transition-colors duration-300 w-full sm:w-auto"
            >
              Have Questions? Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;