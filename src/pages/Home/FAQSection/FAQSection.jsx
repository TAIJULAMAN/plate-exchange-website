import React from "react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection({ headingShow = true }) {
  const [openItems, setOpenItems] = useState([0]);

  const faqs = [
    {
      question: "Who are Plate Trader and what do you do?",
      answer:
        "Each plan varies in features, benefits, and pricing. The Free plan offers basic features at no cost, while higher-tier plans provide more advanced features, increased usage limits, and dedicated support.",
    },
    {
      question: "How is Plate Trader different to other number plate websites?",
      answer:
        "Plate Trader stands out by offering commission-free trading, direct buyer-seller communication, and comprehensive support services. We focus on transparency and user experience rather than taking cuts from your sales.",
    },
    {
      question:
        "If Plate Trader don't take any commission, how do you make money?",
      answer:
        "We operate on a subscription-based model where sellers pay monthly fees for premium features and advertising packages. This allows us to provide value-added services without taking commission from your sales.",
    },
    {
      question:
        "Do you have a telephone number I can call you on? Can you call me?",
      answer:
        "Yes, we provide telephone support for our premium subscribers. You can find our contact details in your account dashboard, and we're happy to arrange callback appointments at your convenience.",
    },
    {
      question:
        "Why do some adverts have badges on them, and what do they mean? Can sellers choose which badges display on adverts?",
      answer:
        "Badges indicate special features like 'Verified Seller', 'Premium Listing', or 'Quick Sale'. These are automatically assigned based on your subscription level and account status. Premium subscribers get priority badge placement.",
    },
    {
      question:
        "Why do some adverts have + VAT on them? Do I need to add VAT on my advert?",
      answer:
        "VAT applies to business sellers who are VAT registered. Private sellers typically don't need to add VAT. If you're unsure about your VAT obligations, we recommend consulting with a tax advisor or accountant.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-[#5587A7] px-5 md:px-10 py-5 md:py-16 rounded-lg mb-10 container mx-auto">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          {headingShow && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Frequently Asked Questions
              </h1>
            </>
          )}
          <div className="w-full h-px bg-white/30 mt-8"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20">
              {/* Question */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between py-6 text-left hover:bg-white/5 transition-colors duration-200 px-2"
              >
                <span className="text-white text-lg md:text-xl font-medium pr-4">
                  {`${index + 1}. ${faq.question}`}
                </span>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-6 h-6 text-white" />
                  ) : (
                    <Plus className="w-6 h-6 text-white" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openItems.includes(index) && (
                <div className="pb-6 px-2">
                  <div className="text-white/90 text-base md:text-lg leading-relaxed pl-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
