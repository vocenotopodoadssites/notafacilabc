
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import ForAccountants from './pages/ForAccountants';
import Billing from './pages/Billing';
import MeiFocus from './pages/MeiFocus';
import TaxConsulting from './pages/TaxConsulting';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'contadores' | 'billing' | 'mei' | 'tax'>('home');

  // Scroll to top when changing view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'blog':
        return <Blog />;
      case 'contadores':
        return <ForAccountants />;
      case 'billing':
        return <Billing />;
      case 'mei':
        return <MeiFocus setView={setCurrentView} />;
      case 'tax':
        return <TaxConsulting />;
      default:
        return (
          <>
            <Hero setView={setCurrentView} />
            <Stats />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <ContactCTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header setView={setCurrentView} currentView={currentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;
