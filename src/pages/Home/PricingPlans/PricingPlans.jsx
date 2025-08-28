import React from "react";
import Loader from "../../../shared/Loaders/Loader";
import ErrorPage from "../../../shared/Error/ErrorPage";
import { FaCheck } from "react-icons/fa";
import { useGetAllSubscriptionQuery } from "../../../Redux/api/subscriptionApi";

export default function PricingPlans() {
  const { data: specificSubscription, isLoading, error } = useGetAllSubscriptionQuery({});

  if (isLoading) return <Loader />;
  if (error) return <ErrorPage message={error?.message} />;

  // ✅ Correctly extract subscriptions from response
  const subscriptions = specificSubscription?.data?.all_subscription || [];

  return (
    <div className="bg-white px-5 md:px-0 py-5 md:py-16">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Pricing Plans
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            No Commission, Huge Exposure, Deal Directly With Buyers.
          </p>
        </div>

        {/* Pricing Cards */}
        {subscriptions.map((subscription) => (
          <div key={subscription._id} className="flex justify-center mb-10">
            <div className="w-full max-w-md border-2 border-[#00823A] rounded-md">
              <div className="text-center mb-8 bg-green-50 p-5">
                <h2 className="text-green-600 font-semibold text-base py-10">
                  {subscription.subscriptionName}
                </h2>
                <div className="mb-5 flex items-center justify-center">
                  <span className="text-5xl font-semibold text-green-600">
                    {subscription.price}
                  </span>
                  <span className="text-green-600 ml-2">/4 Months</span>
                </div>
                <div className="text-center pb-10">
                  <p className="text-gray-700 font-medium">
                    {subscription.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6 px-6 py-8">
                {subscription.featuresList?.map((feature) => (
                  <div key={feature._id} className="flex items-center gap-3">
                    <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature.value}</span>
                  </div>
                ))}

                <div className="mt-12">
                  <button className="w-full bg-[#00823A] text-white font-semibold py-3 px-5 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Start Your Advert
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
