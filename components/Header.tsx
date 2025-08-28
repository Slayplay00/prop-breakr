
import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Pricing', href: '#/pricing' },
    { name: 'Features', href: '#/features' },
    { name: 'About Us', href: '#/about' },
    { name: 'FAQ', href: '#/faq' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <header className="bg-brand-dark/80 backdrop-blur-lg sticky top-0 z-50 border-b border-white/5">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <a href="#/">Prop<span className="text-brand-primary">Breakr</span></a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-brand-text-light hover:text-white transition-colors duration-300">
                {link.name}
              </a>
            ))}
             <a href="#/login" className="text-brand-text-light hover:text-white transition-colors duration-300">
              Login
            </a>
            <a
              href="#/signup"
              className="bg-brand-primary text-white font-semibold px-5 py-2 rounded-md hover:bg-brand-primary-hover transition-colors duration-300 shadow-lg shadow-brand-primary/20"
            >
              Sign Up
            </a>
          </nav>
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={"M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="collapse md:hidden mt-4" id="mobileMenu">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  data-bs-toggle="collapse"
                  data-bs-target="#mobileMenu"
                  className="text-brand-text-light hover:text-white transition-colors duration-300 block text-center py-2"
                >
                  {link.name}
                </a>
              ))}
               <a 
                href="#/login" 
                data-bs-toggle="collapse"
                data-bs-target="#mobileMenu"
                className="text-brand-text-light hover:text-white transition-colors duration-300 block text-center py-2"
              >
                Login
              </a>
              <a
                href="#/signup"
                data-bs-toggle="collapse"
                data-bs-target="#mobileMenu"
                className="bg-brand-primary text-white font-semibold px-5 py-3 rounded-md hover:bg-brand-primary-hover transition-colors duration-300 shadow-lg shadow-brand-primary/20 text-center"
              >
                Sign Up
              </a>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;