import React from 'react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20    pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800 z-0"></div>
      
      {/* Animated background patterns */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-accent-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-accent-300 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative mb-60 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block px-4 py-1 rounded-full bg-accent-500 bg-opacity-20 text-accent-300 text-sm font-medium mb-4">
              Launching May 26, 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight  mb-10">
              Transforming Local Shops <span className="text-accent-400">Digitally</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">
              Shop locally, earn rewards, redeem points. Empowering both customers and local businesses across India.
            </p>
            
           
            
            <div className="mt-2 mb-7">
              <p className="text-gray-300 mb-4">Launching in:</p>
              <CountdownTimer targetDate="2025-05-26T00:00:00" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Phone mockup with app screenshot */}
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-100">
                  <div className="w-full aspect-[9/19.5] bg-gray-100 rounded-t-2xl overflow-hidden">
                    {/* This would be replaced with an actual app mockup image */}
                    <div className="w-full h-full bg-primary-100 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="mx-auto w-16 h-16 mb-3 bg-primary-700 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl">NB</span>
                        </div>
                        <p className="text-primary-800 font-medium">App Preview Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent-300 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,75C1200,75,1320,53,1380,42.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;