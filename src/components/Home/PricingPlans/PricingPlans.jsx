import React from 'react';
import { Check, Plus, Info } from 'lucide-react'

export default function PricingPlans() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Pricing Plans
                </h1>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Pick a plan that fits your selling needs — both our monthly packages are designed to give you maximum visibility,
                    direct buyer engagement, and full control over your advert. Cancel anytime, no hidden fees.
                </p>
            </div>

            {/* Pricing Card */}
            <div className="flex justify-center">
                <div className="w-full max-w-md border-2 border-green-500 bg-green-50/30 p-8 rounded-lg shadow-lg">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-green-600 font-semibold text-lg mb-4">
                            Premium Monthly
                        </h2>

                        <div className="mb-6">
                            <span className="text-5xl font-bold text-green-600">£10</span>
                            <span className="text-gray-600 ml-2">Inc. VAT</span>
                        </div>

                        <div className="text-center mb-4">
                            <p className="text-gray-700 font-medium">For Landlords that want:</p>
                            <p className="text-green-600 font-semibold">Advertising + Tenancy Creation</p>
                            <a
                                href="#"
                                className="text-green-600 p-0 h-auto font-normal underline text-sm"
                            >
                                More Info
                            </a>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-6">
                        {/* Landlord Services */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className="font-semibold text-gray-800">Landlord Services:</h3>
                                <Info className="w-4 h-4 text-gray-400" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">Viewing & Enquiry Organiser</span>
                            </div>
                        </div>

                        {/* Professional Tenancy Creation */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-3">Professional Tenancy Creation:</h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">Contract drafting & digital signing</span>
                                        <Info className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">Deposit Registration</span>
                                        <Info className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">Initial Rent Collection</span>
                                        <Info className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Optional Extras */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-3">Optional Extras:</h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Plus className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">Industry Leading Referencing</span>
                                        <Info className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Plus className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700">Monthly Rent Collection</span>
                                        <Info className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
