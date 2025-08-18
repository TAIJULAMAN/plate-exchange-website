import React from 'react';
import { Check, Plus, Info } from 'lucide-react'
import { FaCheck } from 'react-icons/fa';

export default function PricingPlans() {
    return (
        <div className="bg-white px-5 md:px-0 py-5 md:py-16">
            <div className='container mx-auto'>
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our Pricing Plans
                    </h1>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        No Commission, Huge Exposure, Deal Directly With Buyers.
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="flex justify-center">
                    <div className="w-full max-w-md border-2 border-[#00823A] rounded-md">
                        {/* Plan Header */}
                        <div className="text-center mb-8 bg-green-50">
                            <h2 className="text-green-600 font-semibold text-base  py-10">
                                Premium Monthly
                            </h2>

                            <div className="mb-5 flex items-center justify-center">
                                <span className="text-5xl font-semibold text-green-600">£10</span>
                                <span className="text-green-600 ml-2">/Per Month</span>
                            </div>

                            <div className="text-center pb-10">
                                <p className="text-gray-700 font-medium">Monthly plan cancel any time</p>
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6 px-6 py-8">
                            {/* Landlord Services */}
                            <div>

                                <div className="flex items-center gap-3">
                                    <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-700">Viewing & Enquiry Organiser</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />

                                    <span className="text-gray-700">Contract drafting & digital signing</span>

                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-700">Deposit Registration</span>

                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-700">Initial Rent Collection</span>

                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-700">Viewing & Enquiry Organiser</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />

                                    <span className="text-gray-700">Contract drafting & digital signing</span>

                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-700">Deposit Registration</span>

                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-700">Initial Rent Collection</span>

                                </div>
                            </div>
                            {/* Green Button at Bottom */}
                            <div className="mt-12">
                                <button className="w-full bg-[#00823A] text-white font-semibold py-3 px-5 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Start Your Advert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
