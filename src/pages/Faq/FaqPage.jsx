import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FAQSection from "../Home/FAQSection/FAQSection";

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState("valuation");
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // FAQ Data
  const faqData = {
    valuation: [
      { question: "How is a plate's value calculated?", answer: "Plate values depend on rarity, demand, and character arrangement." },
      { question: "Do age and condition affect value?", answer: "Yes, older dateless plates and plates in pristine condition often sell for more." }
    ],
    buying: [
      { question: "How do I buy a number plate?", answer: "You can buy through DVLA auctions, private dealers, or online marketplaces." },
      { question: "Is there an extra cost after buying?", answer: "Yes, you may need to pay transfer and retention fees depending on DVLA requirements." }
    ],
    selling: [
      { question: "How do I sell my plate?", answer: "You can sell via dealers, auctions, or list it on specialist plate websites." },
      { question: "What documents do I need?", answer: "You'll need your V750 or V778 certificate for the sale." }
    ],
    general: [
      { question: "Are custom fonts allowed?", answer: "No, UK plates must use the standard legal font as per DVLA regulations." },
      { question: "Can I keep my plate when I sell my car?", answer: "Yes, you can retain it by applying for a retention certificate with the DVLA." }
    ]
  };

  return (
    <div className="container mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center my-12">
        <h1 className="text-3xl md:text-6xl font-medium text-gray-900 mb-6">
          Frequently Asked Questions
        </h1>
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Your essential guide to buying, selling, and valuing number plates.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {[
          { key: "valuation", label: "Valuation Questions" },
          { key: "buying", label: "Buying Questions" },
          { key: "selling", label: "Selling Questions" },
          { key: "general", label: "General Questions" }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setOpenItems([]); // close all FAQs when switching tabs
            }}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === tab.key
                ? "bg-[#00823A] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-1 hidden">
        {faqData[activeTab].map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            {/* Question */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-4 text-left transition-colors duration-200 px-2"
            >
              <span className="text-gray-900 text-lg md:text-xl font-medium pr-4">
                {`${index + 1}. ${faq.question}`}
              </span>
              <div className="flex-shrink-0">
                {openItems.includes(index) ? (
                  <Minus className="w-6 h-6 text-gray-700" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-700" />
                )}
              </div>
            </button>

            {/* Answer */}
            {openItems.includes(index) && (
              <div className="pb-4 px-2">
                <div className="text-gray-600 text-base md:text-lg leading-relaxed pl-4">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <FAQSection headingShow={false}></FAQSection>
    </div>
  );
}
