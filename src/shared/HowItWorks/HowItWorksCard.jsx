import React from 'react';

const HowItWorksCard = ({ title, description, buttonText }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden max-w-md mx-5 my-5 border border-gray-200 bg-white flex flex-col">
      {/* Card Content */}
      <div className="p-6 flex-grow">
        <h2 className="text-[#5587A7] text-2xl font-bold mb-4 ">{title}</h2>
        <p className="text-[rgb(27,27,27)] mb-6 leading-relaxed ">{description}</p>
      </div>

      {/* Button Section */}
      <div className="bg-[#F7F7F7] p-4 flex justify-center">
        <button className="bg-[#00823A] hover:bg-[#006B2E] text-white font-bold py-3 px-6 rounded transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HowItWorksCard;
