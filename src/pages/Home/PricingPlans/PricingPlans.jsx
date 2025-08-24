import React from 'react';
import { useState } from "react";
import { useGetAllSubscriptionQuery } from "../../../redux/api/subscriptionAPI";
import Loader from '../../../shared/Loaders/Loader';
import { FaCheck } from 'react-icons/fa';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


export default function PricingPlans() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // items per page

    // Pass page & limit to backend
    const { isLoading, error, data } = useGetAllSubscriptionQuery({
        page: currentPage,
        limit: itemsPerPage
    });

    if (isLoading) return <Loader />;
    if (error) return <ErrorPage message={error?.message} />;

    const subscriptions = data?.data?.all_subscription || [];
    const meta = data?.data?.meta || {};
    const totalPages = meta.totalPage || 1;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrevious = () => {
        if (currentPage > 1) handlePageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
    };

    return (
        <div className="bg-white px-5 md:px-0 py-5 md:py-16">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Pricing Plans</h1>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        No Commission, Huge Exposure, Deal Directly With Buyers.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {subscriptions.map((subscription, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="w-full max-w-md border-2 border-[#00823A] rounded-md">
                                {/* Plan Header */}
                                <div className="text-center mb-8 bg-green-50">
                                    <h2 className="text-green-600 font-semibold text-base py-10">
                                        {subscription?.subscriptionName}
                                    </h2>
                                    <div className="mb-5 flex items-center justify-center">
                                        <span className="text-5xl font-semibold text-green-600">{subscription?.price}</span>
                                        <span className="text-green-600 ml-2">/Per Month</span>
                                    </div>
                                    <div className="text-center pb-10">
                                        <p className="text-gray-700 font-medium">{subscription?.description}</p>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-6 px-6 py-8">
                                    {subscription?.featuresList?.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <FaCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                                            <span className="text-gray-700">{feature?.value}</span>
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

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 mt-8">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${currentPage === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-[#00823A] border border-[#00823A] hover:bg-[#00823A] hover:text-white'
                                }`}
                        >
                            <FaChevronLeft className="w-4 h-4 mr-1" /> Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${currentPage === pageNumber
                                        ? 'bg-[#00823A] text-white'
                                        : 'bg-white text-[#00823A] border border-[#00823A] hover:bg-[#00823A] hover:text-white'
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        ))}

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${currentPage === totalPages
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-[#00823A] border border-[#00823A] hover:bg-[#00823A] hover:text-white'
                                }`}
                        >
                            Next <FaChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
