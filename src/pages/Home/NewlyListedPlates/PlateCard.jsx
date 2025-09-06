import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlateCard({ plateNumber, currentPrice, plateId }) {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-white rounded-lg shadow-[2px_2px_8px_rgba(0,0,0,0.20)] hover:shadow-[6px_6px_14px_rgba(0,0,0,0.2)] transition-shadow duration-200 w-full">
      <div className="flex md:flex-row items-center justify-between gap-4 w-full">
        {/* License Plate */}
        <div className="bg-[#fad549] px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] flex-shrink-0 min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px]">
          <span className="text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-wider font-mycustom whitespace-nowrap overflow-hidden text-ellipsis block text-center">
            {plateNumber}
          </span>
        </div>

        {/* Pricing and Action */}
        <div className="flex sm:flex-row items-center gap-3 flex-shrink-0">
          <div className="text-center">
            <span className="text-[#00823A] font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
              £{currentPrice}
            </span>
          </div>
          <button
            onClick={() => navigate(`/plate-details/${plateId}`)}
            className="bg-[#00823A] hover:bg-green-700 text-white px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 rounded-md text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer transition-colors whitespace-nowrap">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
