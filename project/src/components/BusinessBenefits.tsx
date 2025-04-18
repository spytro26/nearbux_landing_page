import React from 'react';
import { BarChart, Users, Receipt, TrendingUp } from 'lucide-react';

const BusinessBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 z-10 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <BarChart size={18} className="text-primary-600" />
                      <span className="ml-2 text-sm font-medium text-primary-700">Sales Analytics</span>
                    </div>
                    <div className="h-20 flex items-end space-x-1">
                      <div className="h-40% w-3 bg-primary-400 rounded-t"></div>
                      <div className="h-60% w-3 bg-primary-500 rounded-t"></div>
                      <div className="h-80% w-3 bg-primary-600 rounded-t"></div>
                      <div className="h-full w-3 bg-primary-700 rounded-t"></div>
                      <div className="h-70% w-3 bg-primary-600 rounded-t"></div>
                      <div className="h-50% w-3 bg-primary-500 rounded-t"></div>
                      <div className="h-30% w-3 bg-primary-400 rounded-t"></div>
                    </div>
                  </div>

                  <div className="bg-accent-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Users size={18} className="text-accent-600" />
                      <span className="ml-2 text-sm font-medium text-accent-700">Customer Growth</span>
                    </div>
                    <div className="relative h-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M0,50 Q30,20 50,40 T100,30"
                          fill="none"
                          stroke="#ff6b6b"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Receipt size={18} className="text-gray-600" />
                      <span className="ml-2 text-sm font-medium text-gray-700">Digital Billing</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full w-full">
                        <div className="h-2 bg-gray-500 rounded-full w-3/4"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full w-full">
                        <div className="h-2 bg-gray-500 rounded-full w-5/6"></div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full w-full">
                        <div className="h-2 bg-gray-500 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp size={18} className="text-primary-600" />
                      <span className="ml-2 text-sm font-medium text-primary-700">Business Growth</span>
                    </div>
                    <div className="flex items-center justify-center h-20">
                      <span className="text-3xl font-bold text-primary-700">+36%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 pl-0 md:pl-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empower Your Business with Digital Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join NearBux to streamline your operations, increase customer loyalty, and grow your local business.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="bg-accent-100 p-3 rounded-lg mb-4 md:mb-0 md:mr-4">
                    <Receipt className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Billing System</h3>
                    <p className="text-gray-600">Create and manage digital receipts, invoices, and track inventory with ease.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="bg-accent-100 p-3 rounded-lg mb-4 md:mb-0 md:mr-4">
                    <BarChart className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Analytics</h3>
                    <p className="text-gray-600">Gain valuable insights into customer behavior, sales patterns, and growth opportunities.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="bg-accent-100 p-3 rounded-lg mb-4 md:mb-0 md:mr-4">
                    <Users className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Loyalty</h3>
                    <p className="text-gray-600">Boost customer retention with rewards that encourage repeat business and referrals.</p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;