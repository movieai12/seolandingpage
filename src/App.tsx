import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyAISEO } from './components/WhyAISEO';
import { GoogleRanking } from './components/GoogleRanking';
import { RisingGraph } from './components/RisingGraph';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { SEODemo } from './components/SEODemo';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEOHead />
        <Header />
        <Hero />
        <WhyAISEO />
        <GoogleRanking />
        <RisingGraph />
        <Services />
        <Testimonials />
        <Pricing />
        <SEODemo />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;