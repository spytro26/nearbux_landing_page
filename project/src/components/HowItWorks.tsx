import React from 'react';
import { SmartphoneNfc, Store, ShoppingBag, Wallet } from 'lucide-react';

const steps = [
  {
    icon: <SmartphoneNfc className="w-8 h-8 text-white" />,
    title: 'Download the App',
    description: 'Get the NearBux app on your smartphone from Google Play or App Store',
    color: 'bg-primary-600'
  },
  {
    icon: <Store className="w-8 h-8 text-white" />,
    title: 'Find Local Shops',
    description: 'Discover participating stores in your neighborhood',
    color: 'bg-primary-700'
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    title: 'Shop & Earn',
    description: 'Make purchases and earn reward points automatically',
    color: 'bg-accent-500'
  },
  {
    icon: <Wallet className="w-8 h-8 text-white" />,
    title: 'Redeem Rewards',
    description: 'Use your points for discounts on future purchases',
    color: 'bg-accent-600'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How NearBux Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple process to transform your shopping experience and support local businesses.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="flex flex-col items-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-6`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;