
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-lg text-brand-text-light mt-4 max-w-2xl mx-auto">Have a question or a special request? We're here to help.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-brand-gray/40 backdrop-blur-lg blended-border rounded-xl p-8 md:p-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
             <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
             <p className="text-brand-text-light mb-6">
                Fill out the form or reach out to us via email. We typically respond within 24 business hours.
             </p>
             <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <a href="mailto:support@propbreakr.com" className="text-brand-text hover:text-white">support@propbreakr.com</a>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-brand-text">Mon - Fri, 9 AM - 5 PM EST</span>
                </div>
             </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-brand-light-gray p-8 rounded-lg text-center h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-brand-text-light mt-2">Your message has been sent. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-text-light mb-2">Full Name</label>
                  <input type="text" name="name" id="name" required className="w-full bg-brand-light-gray border-gray-700 rounded-md p-3 text-white focus:ring-brand-primary focus:border-brand-primary transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-text-light mb-2">Email Address</label>
                  <input type="email" name="email" id="email" required className="w-full bg-brand-light-gray border-gray-700 rounded-md p-3 text-white focus:ring-brand-primary focus:border-brand-primary transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-text-light mb-2">Message</label>
                  <textarea name="message" id="message" rows={5} required className="w-full bg-brand-light-gray border-gray-700 rounded-md p-3 text-white focus:ring-brand-primary focus:border-brand-primary transition"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary-hover transition-all duration-300 shadow-lg shadow-brand-primary/30">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;