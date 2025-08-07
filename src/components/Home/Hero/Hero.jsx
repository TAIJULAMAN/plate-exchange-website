import React, { useState } from 'react';
import { Search, Star, PoundSterling, Users, RefreshCw } from 'lucide-react';

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search functionality here
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            {/* Main Content */}
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2 leading-tight">
                    Connecting buyers and sellers of
                </h1>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
                    <span className="bg-yellow-400 px-2 py-1 rounded">Number Plates</span> directly.
                </h2>
            </div>

            {/* Search Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6 max-w-md mx-auto">
                <form onSubmit={handleSearch} className="flex">
                    <input
                        type="text"
                        placeholder="SEARCH PLATE"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-center font-medium text-gray-700"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-md transition-colors duration-200 flex items-center justify-center"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                </form>

                {/* Trustpilot Reviews */}
                <div className="mt-6 flex items-center justify-center">
                    <Star className="w-4 h-4 text-green-500 fill-current" />
                    <span className="text-sm font-semibold text-green-600 ml-1 mr-2">Trustpilot</span>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-green-500 fill-current" />
                        ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">(12,426 reviews)</span>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {/* Feature 1 */}
                <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                        <PoundSterling className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">
                        We charge only £10
                    </h3>
                </div>

                {/* Feature 2 */}
                <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                        <Users className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">
                        No middleman (save up to 30%)
                    </h3>
                </div>

                {/* Feature 3 */}
                <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                        <RefreshCw className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">
                        Buyer and seller deal directly with each other
                    </h3>
                </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-16"></div>
        </div>
    );
};

export default Hero;