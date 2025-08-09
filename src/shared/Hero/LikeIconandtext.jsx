import React from "react";

const LikeIconAndText = ({ imgSrc, text }) => {
  return (
    <div className="flex flex-col items-center text-gray-800">
      {/* Fixed-height container for consistent icon alignment */}
      <div className="flex items-center justify-center w-16 h-16 mb-3 bg-white">
        <img
          src={imgSrc}
          alt="icon"
          className="size-12 object-contain"
        />
      </div>

      {/* Dynamic Text */}
      <p className="text-3xl font-bold text-center">{text}</p>
    </div>
  );
};

export default LikeIconAndText;
