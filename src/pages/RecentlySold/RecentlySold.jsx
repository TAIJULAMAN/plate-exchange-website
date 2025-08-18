import React from "react";
import { useNavigate } from "react-router-dom";
import svg1 from "/1.png";
import svg2 from "/2.svg";
import svg3 from "/3.svg";
import LikeIconAndText from "../../shared/Hero/LikeIconandtext";

export default function RecentlySold() {
  const navigate = useNavigate();
  const soldPlates = [
    { plate: "S88 HSE", price: "£571", status: "sold" },
    { plate: "SEYR 56", price: "£571", status: "sold" },
    { plate: "RTDZ HS", price: "£571", status: "sold" },
    { plate: "STR TH6", price: "£571", status: "sold" },
    { plate: "SDR H85", price: "£571", status: "sold" },
    { plate: "ERY Y5W", price: "£571", status: "sold" },
    { plate: "ERY REY", price: "£571", status: "sold" },
    { plate: "ETY RYE", price: "£571", status: "sold" },
    { plate: "F58 FTI", price: "£571", status: "sold" },
    { plate: "DFU 72P", price: "£571", status: "sold" },
    { plate: "S88 HSE", price: "£571", status: "sold" },
    { plate: "SEYR 56", price: "£571", status: "sold" },
    { plate: "RTDZ HS", price: "£571", status: "sold" },
    { plate: "STR TH6", price: "£571", status: "sold" },
    { plate: "SDR H85", price: "£571", status: "sold" },
    { plate: "ERY Y5W", price: "£571", status: "sold" },
    { plate: "ERY REY", price: "£571", status: "sold" },
    { plate: "ETY RYE", price: "£571", status: "sold" },
    { plate: "F58 FTI", price: "£571", status: "sold" },
    { plate: "F58 FTI", price: "£571", status: "sold" },
    { plate: "F58 FTI", price: "£571", status: "sold" },
    { plate: "F58 FTI", price: "£571", status: "sold" },
    { plate: "F58 FTI", price: "£571", status: "sold" },
    { plate: "F58 FTI", price: "£571", status: "sold" },
    { plate: "F58 FTI", price: "£571", status: "sold" },
  ];

  const features = [
    {
      imgSrc: svg1,
      text: "We charge only £10.",
    },
    {
      imgSrc: svg2,
      text: "No middleman (save up to 30%).",
    },
    {
      imgSrc: svg3,
      text: "Buyer and Seller deal directly with each other.",
    },
  ];

  return (
    <div className="container mx-auto px-5 md:px-0 py-10 md:py-16">
      {/* Header */}
      <div className="text-center my-12">
        <h1 className="    text-3xl md:text-6xl font-medium text-gray-900 mb-6">
          Plates Sold Via Plate Xpress
        </h1>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-10 max-w-9xl mx-auto mt-10">
            {features.map((feature, index) => (
              <LikeIconAndText
                key={index}
                imgSrc={feature.imgSrc}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recently Sold Plates Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {soldPlates.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            {/* License Plate */}
            <div className="bg-[#fad549] w-full px-3 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] mb-3 inline-block">
              <span className="text-black font-bold text-2xl tracking-wider font-mycustom">
                {item.plate}
              </span>
            </div>

            {/* Price Information */}
            <div className="text-xl">
              {item.status === "sold" && (
                <>
                  <span>Sold</span>
                  {item.price && (
                    <>
                      <span className="mx-1">for</span>
                      <span>{item.price}</span>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Buy Now Button */}
      <div className="flex justify-center mt-8 gap-6">
        <div className="bg-[#00823A] max-w-xl cursor-pointer px-8 py-4 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] text-center font-sans">
          <span className="text-white font-bold text-2xl tracking-wider">
            Load more result...
          </span>
        </div>

        <div
          onClick={() => navigate("/load-all-plates")}
          className="bg-[#00823A] max-w-xl cursor-pointer px-8 py-4 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] text-center font-sans"
        >
          <span className="text-white font-bold text-2xl tracking-wider">
            Load all
          </span>
        </div>
      </div>
    </div>
  );
}
