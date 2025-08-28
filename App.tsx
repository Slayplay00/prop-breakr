
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedGridBackground from './components/AnimatedGridBackground';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App: React.FC = () => {
  // Initialize state once using a function to ensure it's only run on mount
  const [route, setRoute] = useState(() => window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    // Listen for hash changes to handle navigation
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const renderPage = () => {
    switch (route) {
      case '#/pricing':
        return <PricingPage />;
      case '#/features':
        return <FeaturesPage />;
      case '#/faq':
        return <FAQPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/about':
        return <AboutPage />;
      case '#/login':
        return <LoginPage />;
      case '#/signup':
        return <SignUpPage />;
      case '#/':
      default:
        return <HomePage />;
    }
  };


  return (
    <div className="bg-brand-dark font-sans text-brand-text">
      <AnimatedGridBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;