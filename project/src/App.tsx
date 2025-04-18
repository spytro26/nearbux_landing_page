import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BusinessBenefits from './components/BusinessBenefits';
import HowItWorks from './components/HowItWorks';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = 'NearBux - Transforming Local Shops Digitally';
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <BusinessBenefits />
        <HowItWorks />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;