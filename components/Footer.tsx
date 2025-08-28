
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-white/5 mt-auto">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              <a href="#/">Prop<span className="text-brand-primary">Breakr</span></a>
            </h3>
            <p className="text-brand-text-light max-w-xs">Your trusted partner in securing and managing funded trading accounts.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#/pricing" className="text-brand-text-light hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#/features" className="text-brand-text-light hover:text-white transition-colors">Features</a></li>
              <li><a href="#/about" className="text-brand-text-light hover:text-white transition-colors">About Us</a></li>
              <li><a href="#/faq" className="text-brand-text-light hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-brand-text-light hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-brand-text-light hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-brand-text-light hover:text-white transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-light-gray pt-8 text-center text-brand-text-light">
          <p>&copy; {new Date().getFullYear()} PropBreakr. All rights reserved.</p>
           <p className="text-xs mt-2 opacity-70">PropBreakr is not a broker and does not accept deposits. The services offered are for educational and evaluation purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;