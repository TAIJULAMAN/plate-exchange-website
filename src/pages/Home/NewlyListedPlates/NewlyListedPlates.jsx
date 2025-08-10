import React from "react";
import PlateCard from "./PlateCard";

export default function NewlyListedPlates() {
  const plates = Array(15).fill({
    plateNumber: "P1JOOV",
    originalPrice: "£643",
    currentPrice: "£643",
  });

  return (
    <div className="px-4 py-12 bg-[#f6f6f6]">
<div className="container mx-auto">
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
          <PlateCard
            key={index}
            plateNumber={plate.plateNumber}
            originalPrice={plate.originalPrice}
            currentPrice={plate.currentPrice}
          />
        ))}
      </div>
</div>

    </div>
  );
}
