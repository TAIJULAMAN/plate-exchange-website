import React from 'react';
import "./App.css";
import Navbar from './shared/Navbar/Navbar';
import Hero from './components/Home/Hero/Hero';
import Review from './components/Home/Review/Review';
import HowItWorks from './components/Home/HowItWorks/HowItWorks';
import Banner from './components/Home/Banner/Banner';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Hero />
      <Banner />
      <HowItWorks />
      <Review />
    </div>
  );
}

export default App;
