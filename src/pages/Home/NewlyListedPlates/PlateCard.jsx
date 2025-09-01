import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlateCard({ plateNumber, currentPrice, plateId }) {
  const navigate = useNavigate();
  return (
    <div className="p-6 bg-white rounded-lg shadow-[2px_2px_8px_rgba(0,0,0,0.20)] hover:shadow-[6px_6px_14px_rgba(0,0,0,0.2)] transition-shadow duration-200">
      <div className="flex md:flex-row flex-col items-center justify-center gap-6">
        {/* License Plate */}
        <div className="bg-[#fad549] px-6 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)]">
          <span className="text-black font-bold text-4xl tracking-wider font-mycustom">
            {plateNumber}
          </span>
        </div>


        {/* Pricing and Action */}
        <div className="flex items-center gap-8">
          <div className="text-right">
            {/* <span className="text-gray-400 line-through text-sm">
              {originalPrice}
            </span> */}
            <span className="text-[#00823A] font-medium text-xl ml-2">
              {currentPrice}
            </span>
          </div>
          <button
            onClick={() => navigate(`/plate-details/${plateId}`)}
            className="bg-[#00823A] hover:bg-green-700 text-white px-6 py-2 rounded-md text-md cursor-pointer transition-colors">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
