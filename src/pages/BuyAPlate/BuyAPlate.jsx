import React from "react";
import FAQSection from "../Home/FAQSection/FAQSection";
import HelpfulGuides from "../Home/HelpfulGuides/HelpfulGuides";
import NewlyListedPlates from "../Home/NewlyListedPlates/NewlyListedPlates";
import PricingPlans from "../Home/PricingPlans/PricingPlans";
import Review from "../Home/Review/Review";
import CustomBanner from "../../shared/CustomBanner/CustomBanner";
import BuyAPlateHero from "./BuyAPlateHero";
import BuyHowItWorks from "./BuyHowItWorks";
export default function BuyAPlate() {
    return (
        <div className="bg-[#f6f6f6] px-5 sm:px-6 lg:px-0 py-16">
            <BuyAPlateHero />
            <CustomBanner title="Why pay more? Save up to 30% with direct plate deals." />
            <BuyHowItWorks />
            <Review />
            <NewlyListedPlates />
            <PricingPlans />
            <HelpfulGuides />
            <FAQSection />
        </div>
    );
}