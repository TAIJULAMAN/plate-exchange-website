import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      title: "Number plate search",
      description: "Quickly find the perfect private plate with our streamlined search tool. Whether you're buying for yourself or a loved one, PlateExchange helps you connect directly with sellers — no hassle, no inflated prices.",
      buttonText: "Start your search",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Make an Enquiry",
      description: "Found a plate you like? Send an enquiry directly to the seller. At PlateExchange, there are no middlemen, you're in full control, dealing directly with the person who owns the plate.",
      buttonText: "Enquire now",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Buy Privately",
      description: "Once you agree on a deal, purchase the plate directly from the seller. No hidden charges, no interference — just a clean, private transaction between buyer and seller.",
      buttonText: "Buy a plate",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Flat Fee — Just £10",
      description: "Unlike other platforms charging up to 30% commission, we only charge a flat £10 listing fee — that's it. No commission, no surprises.",
      buttonText: "List your plate",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Choose from Thousands of Plates",
      description: "Discover and trade unique license plates with zero commissions. At PlateExchange, sellers keep 100% of their earnings—no fees, no cuts. A fair, transparent marketplace for collectors and sellers alike.",
      buttonText: "Learn more",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Deal Direct — No Middlemen",
      description: "Say goodbye to brokers. With PlateExchange, buyers and sellers communicate and negotiate directly — for a faster, simpler experience.",
      buttonText: "Get started",
      buttonColor: "bg-green-600 hover:bg-green-700"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
            >
              {/* Step Title */}
              <h3 className="text-xl font-medium text-blue-600 mb-4">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 min-h-[120px]">
                {step.description}
              </p>

              {/* Action Button */}
              <button
                className={`${step.buttonColor} text-white px-6 py-3 rounded-md text-sm font-medium transition-colors duration-200 w-full`}
              >
                {step.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};