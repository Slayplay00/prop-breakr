

import React, { useState } from 'react';

const SignUpPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for sign up logic
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-transparent flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="container max-w-md">
        <div className="bg-brand-gray/40 backdrop-blur-lg blended-border rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Create Your Account</h2>
          <p className="text-brand-text-light mb-8">Start your journey to getting funded.</p>

          {submitted ? (
            <div className="bg-brand-light-gray p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white">Account Created!</h3>
              <p className="text-brand-text-light mt-2">Welcome! Please check your email to verify your account.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text-light mb-2">Full Name</label>
                <input type="text" name="name" id="name" required className="w-full bg-brand-light-gray border-gray-700 rounded-md p-3 text-white focus:ring-brand-primary focus:border-brand-primary transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text-light mb-2">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full bg-brand-light-gray border-gray-700 rounded-md p-3 text-white focus:ring-brand-primary focus:border-brand-primary transition" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-brand-text-light mb-2">Password</label>
                <input type="password" name="password" id="password" required className="w-full bg-brand-light-gray border-gray-700 rounded-md p-3 text-white focus:ring-brand-primary focus:border-brand-primary transition" />
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary-hover transition-all duration-300 shadow-lg shadow-brand-primary/30">
                  Create Account
                </button>
              </div>
            </form>
          )}

          <p className="text-brand-text-light mt-8">
            Already have an account? <a href="#/login" className="font-semibold text-brand-primary hover:underline">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;