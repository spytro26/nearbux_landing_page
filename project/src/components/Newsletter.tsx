import React, { useState } from 'react';
import { Mail, Bell } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-primary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10">
        <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-accent-500 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent-300 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 bg-opacity-20 rounded-full mb-6">
            <Bell className="w-8 h-8 text-accent-300" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be the First to Know
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Sign up to receive updates about our launch and be among the first to experience NearBux.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="flex items-center bg-white bg-opacity-10 rounded-full p-1 border border-white border-opacity-20">
              <div className="pl-4">
                <Mail className="w-5 h-5 text-gray-300" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow bg-transparent border-none text-white placeholder-gray-400 px-3 py-3 focus:outline-none focus:ring-0"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-500 text-white rounded-full font-medium hover:bg-accent-600 transition-all"
              >
                Notify Me
              </button>
            </div>
            
            {isSubmitted && (
              <div className="absolute -bottom-10 left-0 right-0 text-center text-green-300 text-sm mt-2">
                Thanks! We'll notify you when we launch.
              </div>
            )}
          </form>

          <p className="text-sm text-gray-400 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;