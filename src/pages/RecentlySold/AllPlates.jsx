import React from "react";

export default function AllPlates() {
const plates = [
  { plate: "S88 HSE", price: "£571", status: "make offer" },
  { plate: "SEYR 56", price: "£820", status: "" },
  { plate: "RTD 123", price: "£999", status: "" },
  { plate: "STR 777", price: "£650", status: "make offer" },
  { plate: "SDR 456", price: "£720", status: "make offer" },
  { plate: "ERY 999", price: "£845", status: "make offer" },
  { plate: "ERY 888", price: "£571", status: "make offer" },
  { plate: "ETY 111", price: "£610", status: "make offer" },
  { plate: "F58 FTI", price: "£571", status: "make offer" },
  { plate: "DFU 72P", price: "£571", status: "make offer" },
  { plate: "JAY 123", price: "£600", status: "make offer" },
  { plate: "LUX 500", price: "£715", status: "" },
  { plate: "VIP 007", price: "£1200", status: "make offer" },
  { plate: "CAR 888", price: "£999", status: "make offer" },
  { plate: "RAC 321", price: "£730", status: "make offer" },
  { plate: "DRI 456", price: "£540", status: "make offer" },
  { plate: "WIN 202", price: "£800", status: "make offer" },
  { plate: "GOA 999", price: "£571", status: "make offer" },
  { plate: "SUN 404", price: "£620", status: "make offer" },
  { plate: "MOON 77", price: "£750", status: "make offer" },
  { plate: "STAR 11", price: "£571", status: "" },
  { plate: "SKY 300", price: "£690", status: "make offer" },
  { plate: "JET 222", price: "£810", status: "make offer" },
  { plate: "CAR 999", price: "£920", status: "make offer" },
  { plate: "BMW 520", price: "£1100", status: "make offer" },
  { plate: "BEN 777", price: "£990", status: "make offer" },
  { plate: "MERC 63", price: "£1500", status: "make offer" },
  { plate: "AUD 444", price: "£1300", status: "make offer" },
  { plate: "TES 369", price: "£1400", status: "" },
  { plate: "LAM 999", price: "£2000", status: "make offer" }
];


  return (
    <div className="container mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center my-12">
        <h1 className="    text-3xl md:text-6xl font-medium text-gray-900 mb-6">
          All Plates
        </h1>
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
           Discover the latest number plates added to the marketplace — fresh, unique, and available now.
          </p>
        </div>
      </div>

      {/* Recently Sold Plates Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {plates.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            {/* License Plate */}
            <div className="bg-[#fad549] w-full px-3 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] mb-3 inline-block">
              <span className="text-black font-bold text-4xl tracking-wider font-mycustom">
                {item.plate}
              </span>
            </div>

            
{/* Price Information */}
<div className="text-xl">
  {item.status === "sold" && (
    <>
      <span className="text-red-600 font-semibold">Sold</span>
      {item.price && (
        <>
          <span className="mx-1">for</span>
          <span>{item.price}</span>
        </>
      )}
    </>
  )}

  {item.status === "make offer" && (
    <span className="text-green-600 font-semibold">Make Offer</span>
  )}

  {item.status === "" && (
    <>
      <span className="text-gray-700">Available</span>
      {item.price && (
        <>
          <span className="mx-1">at</span>
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

            <div className="bg-[#00823A] max-w-xl cursor-pointer px-8 py-4 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] text-center font-sans">
              <span className="text-white font-bold text-2xl tracking-wider">
                Load all
              </span>
            </div>
          </div>


    </div>
  );
}
