import React, { useState } from "react";
import { Search, Star, PoundSterling, Users, RefreshCw } from "lucide-react";
import { IoIosStar } from "react-icons/io";
import LikeIconAndText from "../../../shared/Hero/LikeIconandtext";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchTerm);
  };


  const features = [
    {
      imgSrc: "https://i.ibb.co.com/WvbNG4wC/image.png",
      text: "We charge only £10",
    },
    {
      imgSrc: "https://i.ibb.co.com/C5rdz3s8/image.png",
      text: "No middleman (save up to 30%)",
    },
    {
      imgSrc: "https://i.ibb.co.com/C32DzLYz/image.png",
      text: "Buyer and seller deal directly with each other",
    },
  ];



  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-manrope">
      {/* Main Content */}
      {/* Header Section */}
      <div className="text-center mb-16 text-4xl md:text-6xl font-normal">
        <h1 className="  text-gray-800 mb-2 leading-tight">
          Connecting buyers and sellers of
        </h1>
        <h2 className=" text-gray-800 mb-8">
          <span className="text-custom-yellow px-2 py-1 rounded relative">
            Number Plates{" "}
            <img
              className="absolute -bottom-3 right-0"
              src="https://i.ibb.co.com/4Z8jPdts/image.png"
              alt="yellow-line"
            />
          </span>{" "}
          directly.
        </h2>
      </div>

      {/* Search Section */}
      <div className="bg-[#ecedef] rounded-lg shadow-sm py-12 px-4 mb-6 max-w-[600px] mx-auto">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="SEARCH PLATE"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 border border-x-0 border-l-1 border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-center font-medium text-gray-700"
          />
          <button
            type="submit"
            className="bg-[#00823A] hover:bg-green-700 text-white px-6 py-3 rounded-r-md transition-colors duration-200 flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>

        {/* Trustpilot Reviews */}
        <div className="mt-6 flex items-center justify-center">
          <IoIosStar className="size-10 text-[#00823a] fill-current" />
          <span className="text-lg font-medium ml-1 mr-2">Trustpilot</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div className="bg-[#00823A] mx-1 p-0.5 rounded-xs">
                <IoIosStar key={i} className=" text-[#ffffff] fill-current" />
              </div>
            ))}
          </div>
          <span className="ml-2 text-lg text-[#1B1B1B]">(12,426 reviews)</span>
        </div>
      </div>

      {/* Features Section */}
 <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto mt-12">
      {features.map((feature, index) => (
        <LikeIconAndText key={index} imgSrc={feature.imgSrc} text={feature.text} />
      ))}
    </div>

      {/* Bottom spacing */}
      <div className="h-16"></div>
    </div>
  );
}
