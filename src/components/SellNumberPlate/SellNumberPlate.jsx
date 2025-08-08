import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

export default function SellNumberPlate() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            {/* Main Content */}
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2 leading-tight">
                    Sell Your Number Plate Privately &
                </h1>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
                    <span className="bg-yellow-400 px-2 py-1 rounded">Keep 100% Profit</span>.
                </h2>
            </div>

            {/* Description */}
            <div className="text-center mb-8">
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    List your plate on PlateExchange—the transparent, seller-first marketplace. Connect directly with buyers, skip the middlemen, and pay zero commission. More control, more cash in your pocket.
                </p>
            </div>


            {/* Search Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6 max-w-md mx-auto">
                <form onSubmit={handleSearch} className="flex">
                    <input
                        type="text"
                        placeholder="SEARCH A PLATE"
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

                    <button
                        type="submit"
                        className="ml-5 bg-yellow-300 text-black font-bold px-6 py-3 rounded-r-md transition-colors duration-200 flex items-center justify-center"
                    >
                        SELL
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
            {/* Bottom spacing */}
            <div className="h-16"></div>
        </div>
    );
};

