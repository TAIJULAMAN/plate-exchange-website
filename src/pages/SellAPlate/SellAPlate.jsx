import React from 'react'
import NewlyListedPlates from '../Home/NewlyListedPlates/NewlyListedPlates'
import PricingPlans from '../Home/PricingPlans/PricingPlans'
import HelpfulGuides from '../Home/HelpfulGuides/HelpfulGuides'
import FAQSection from '../Home/FAQSection/FAQSection'
import Review from '../Home/Review/Review'
import SellAPlateHero from './SellAPlateHero'
export default function SellAPlate() {
  return (
    <div>
      <SellAPlateHero />
      <Review />
      <NewlyListedPlates />
      <PricingPlans />
      <HelpfulGuides />
      <FAQSection />
    </div>
  )
}
