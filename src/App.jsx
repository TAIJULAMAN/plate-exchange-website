import React from 'react';
import "./App.css";
import Navbar from './shared/Navbar/Navbar';
import Hero from './components/Home/Hero/Hero';
import Review from './components/Home/Review/Review';
import HowItWorks from './components/Home/HowItWorks/HowItWorks';
import Banner from './components/Home/Banner/Banner';
import NewlyListedPlates from './components/Home/NewlyListedPlates/NewlyListedPlates';
import PricingPlans from './components/Home/PricingPlans/PricingPlans';
import HelpfulGuides from './components/Home/HelpfulGuides/HelpfulGuides';
import FAQSection from './components/Home/FAQSection/FAQSection';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Hero />
      <Banner />
      <HowItWorks />
      <Review />
      <NewlyListedPlates />
      <PricingPlans />
      <HelpfulGuides />
      <FAQSection />
    </div>
  );
}

export default App;
