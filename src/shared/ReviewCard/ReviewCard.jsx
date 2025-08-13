// shared/ReviewCard/ReviewCard.jsx
import React from "react";
import { IoIosStar } from "react-icons/io";

export default function ReviewCard({ name, review, image, rating = 5 }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 py-10 text-center max-w-sm mx-auto transition-shadow duration-300 flex flex-col justify-between h-full">
      {/* Rating Stars */}
      <div className="flex justify-center mb-3">
        {[...Array(rating)].map((_, i) => (
          <div key={i} className="bg-[#00823A] mx-1 p-0.5 rounded-xs">
            <IoIosStar className="text-white fill-current" />
          </div>
        ))}
      </div>

      {/* Review Title */}
      <h3 className="text-lg font-semibold text-[#5587A7] mb-3">
        Highly recommended
      </h3>

      {/* Review Text with fixed height and overflow */}
      <p className="text-gray-600 text-xl leading-relaxed mb-4 max-h-24 overflow-hidden">
        {review}
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center justify-center gap-3 mt-auto">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold text-gray-900">{name}</span>
      </div>
    </div>
  );
}
