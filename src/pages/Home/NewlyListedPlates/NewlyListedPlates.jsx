import React from 'react';
export default function NewlyListedPlates() {
    const plates = Array(15).fill({
        plateNumber: "P1 OOV",
        originalPrice: "£643",
        currentPrice: "£643"
    })

    return (
        <div className="px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Newly Listed Plates
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover the latest number plates added to the marketplace — fresh, unique, and available now.
                </p>
            </div>

            {/* Plates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plates.map((plate, index) => (
                    <div key={index} className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-200 rounded-lg">
                        <div className="flex items-center justify-between">
                            {/* License Plate */}
                            <div className="bg-yellow-400 px-4 py-2 rounded border-2 border-black">
                                <span className="text-black font-bold text-xl tracking-wider">
                                    {plate.plateNumber}
                                </span>
                            </div>

                            {/* Pricing and Action */}
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <span className="text-gray-400 line-through text-sm">
                                        {plate.originalPrice}
                                    </span>
                                    <span className="text-green-600 font-semibold text-lg ml-2">
                                        {plate.currentPrice}
                                    </span>
                                </div>
                                <button
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm"
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
