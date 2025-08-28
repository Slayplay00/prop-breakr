
import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isSubtextVisible, setIsSubtextVisible] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const textToType = ". Passed.";
  const typingSpeed = 120; // ms per character
  const subtextFadeInDelay = 300; // ms after typing is done

  // Effect for typing animation
  useEffect(() => {
    if (typedText.length < textToType.length) {
      const timer = setTimeout(() => {
        setTypedText(textToType.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      // Typing is complete, wait a bit before hiding cursor
      const timer = setTimeout(() => setIsTypingComplete(true), 500);
      return () => clearTimeout(timer);
    }
  }, [typedText]);

  // Effect for fading in subtext
  useEffect(() => {
    if (isTypingComplete) {
      const timer = setTimeout(() => {
        setIsSubtextVisible(true);
      }, subtextFadeInDelay);
      return () => clearTimeout(timer);
    }
  }, [isTypingComplete]);
  
  // Effect for testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/80 to-brand-dark"></div>
      <div className="container text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 h-[96px] md:h-[144px]">
          Your Prop Firm Challenge
          <span className="text-brand-primary">
            {typedText}
          </span>
          {!isTypingComplete && (
            <span className="cursor-blink inline-block w-1 h-10 md:h-14 bg-brand-primary ml-2 translate-y-2 align-middle"></span>
          )}
        </h1>
        
        <p className={`text-lg md:text-xl text-brand-text-light max-w-3xl mx-auto mb-8 transition-opacity duration-1000 ease-in ${isSubtextVisible ? 'opacity-100' : 'opacity-0'}`}>
          We expertly navigate and pass your prop firm evaluations, so you can focus on what you do best: trading with serious capital.
        </p>

        <div className={`flex justify-center space-x-4 transition-opacity duration-1000 ease-in delay-300 ${isSubtextVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#/pricing"
            className="bg-brand-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-brand-primary-hover transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-brand-primary/30"
          >
            Get Funded Now
          </a>
        </div>
        
        <div className={`mt-16 max-w-3xl mx-auto transition-opacity duration-1000 ease-in delay-700 ${isSubtextVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative h-28 md:h-24">
             {testimonials.map((testimonial, index) => (
               <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
                  index === currentTestimonialIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-lg italic text-brand-text">"{testimonial.quote}"</p>
                <p className="mt-3 font-semibold text-white">- {testimonial.name}, <span className="font-normal text-brand-text-light">{testimonial.title}</span></p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
