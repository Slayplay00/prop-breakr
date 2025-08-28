

import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for login logic
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-transparent flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="container max-w-md">
        <div className="bg-brand-gray/40 backdrop-blur-lg blended-border rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-brand-text-light mb-8">Login to access your account.</p>

          {submitted ? (
            <div className="bg-brand-light-gray p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white">Login Successful!</h3>
              <p className="text-brand-text-light mt-2">Redirecting to your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text-light mb-2">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full bg-brand-light-gray border-gray-700 rounded-md p-3 text-white focus:ring-brand-primary focus:border-brand-primary transition" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-brand-text-light mb-2">Password</label>
                <input type="password" name="password" id="password" required className="w-full bg-brand-light-gray border-gray-700 rounded-md p-3 text-white focus:ring-brand-primary focus:border-brand-primary transition" />
              </div>
               <div className="text-right">
                <a href="#" className="text-sm text-brand-secondary hover:underline">Forgot Password?</a>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary-hover transition-all duration-300 shadow-lg shadow-brand-primary/30">
                  Login
                </button>
              </div>
            </form>
          )}

          <p className="text-brand-text-light mt-8">
            Don't have an account? <a href="#/signup" className="font-semibold text-brand-primary hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;