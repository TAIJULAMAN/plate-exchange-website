import React from "react";
import Hero from "../Home/Hero/Hero";
import Banner from "./Banner/Banner";
import FAQSection from "./FAQSection/FAQSection";
import PricingPlans from "./PricingPlans/PricingPlans";
import NewlyListedPlates from "./NewlyListedPlates/NewlyListedPlates";
import Review from "./Review/Review";
import HowItWorks from "./HowItWorks/HowItWorks";
import HelpfulGuides from "./HelpfulGuides/HelpfulGuides";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Hero />
      </div>
        <Banner />
        <HowItWorks />
        <Review />
        <NewlyListedPlates />
      <div className="container mx-auto">
        <PricingPlans />
        <HelpfulGuides />
        <FAQSection />
        </div>
    </>
  );
}

export default App;
