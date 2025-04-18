import React from 'react';
import { ShoppingBag, Award, CreditCard, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <ShoppingBag size={24} className="text-accent-500" />,
    title: 'Shop Locally',
    description: 'Connect with your favorite local stores through our easy-to-use mobile application.',
  },
  {
    icon: <Award size={24} className="text-accent-500" />,
    title: 'Earn Rewards',
    description: 'Collect points with every purchase from participating local businesses.',
  },
  {
    icon: <CreditCard size={24} className="text-accent-500" />,
    title: 'Redeem Points',
    description: 'Use your accumulated points for discounts, special offers, or free products.',
  },
  {
    icon: <TrendingUp size={24} className="text-accent-500" />,
    title: 'Track Progress',
    description: 'Monitor your rewards and see how much you\'ve saved over time.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rewarding Every Purchase
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            NearBux makes shopping at local stores more rewarding with our innovative points system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;