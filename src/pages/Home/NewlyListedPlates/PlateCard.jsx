import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlateCard({ plateNumber, currentPrice, plateId }) {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-white rounded-lg shadow-[2px_2px_8px_rgba(0,0,0,0.20)] hover:shadow-[6px_6px_14px_rgba(0,0,0,0.2)] transition-shadow duration-200 w-full">
      <div className="flex md:flex-row flex-col items-center justify-between gap-4 w-full">
        {/* License Plate */}
        <div className="bg-[#fad549] px-4 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] flex-shrink-0">
          <span className="text-black font-bold text-2xl tracking-wider font-mycustom whitespace-nowrap overflow-hidden text-ellipsis block">
            {plateNumber}
          </span>
        </div>

        {/* Pricing and Action */}
        <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
          <div className="text-center">
            <span className="text-[#00823A] font-medium text-lg whitespace-nowrap">
              {currentPrice}
            </span>
          </div>
          <button
            onClick={() => navigate(`/plate-details/${plateId}`)}
            className="bg-[#00823A] hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm cursor-pointer transition-colors whitespace-nowrap">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
