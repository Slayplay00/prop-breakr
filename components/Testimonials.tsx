
import React from 'react';
import type { Testimonial } from '../types';
import { testimonials } from '../data/testimonials';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-brand-gray/40 backdrop-blur-lg p-8 rounded-lg blended-border h-full flex flex-col justify-between">
    <p className="text-brand-text italic mb-6">"{testimonial.quote}"</p>
    <div className="flex items-center">
      <img className="w-12 h-12 rounded-full mr-4" src={testimonial.avatarUrl} alt={testimonial.name} />
      <div>
        <p className="font-bold text-white">{testimonial.name}</p>
        <p className="text-sm text-brand-text-light">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Don't Just Take Our Word For It</h2>
          <p className="text-lg text-brand-text-light mt-4 max-w-2xl mx-auto">See what our successful clients have to say about their experience.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
