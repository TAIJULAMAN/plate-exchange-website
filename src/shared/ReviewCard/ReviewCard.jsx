// shared/ReviewCard/ReviewCard.jsx
import React from "react";
import { IoIosStar } from "react-icons/io";

export default function ReviewCard({ name, review, image, rating = 5 }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 py-8 text-center max-w-sm mx-auto transition-all duration-300 flex flex-col justify-between h-full transform hover:-translate-y-1 border border-gray-100">
      {/* Rating Stars */}
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <div key={i} className="bg-[#00823A] mx-0.5 p-1 rounded-sm">
            <IoIosStar className="text-white fill-current w-3 h-3" />
          </div>
        ))}
      </div>

      {/* Review Title */}
      <h3 className="text-lg font-semibold text-[#5587A7] mb-4">
        Highly recommended
      </h3>

      {/* Review Text with better responsive sizing */}
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 flex-grow line-clamp-4">
        {review}
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center justify-center gap-3 mt-auto pt-4 border-t border-gray-100">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
        />
        <span className="font-semibold text-gray-900 text-sm md:text-base">{name}</span>
      </div>
    </div>
  );
}
