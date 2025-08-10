import React from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="container mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center my-12">
        <h1 className="    text-3xl md:text-6xl font-medium text-gray-900 mb-6">
          Plates Sold Via Plate Xpress
        </h1>
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Were the UK's leading private number plate marketplace, and have
            been helping buyers and sellers to deal directly, with no middlemen
            or commission for well over a decade now. Below you'll find just
            some of the plates that have sold via our site. You may notice that
            the selling price is not shown for all plates. This is simply due to
            buyers/sellers either giving us permission to publish this, or
            preferring to keep this information private.
          </p>
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
            className="bg-[#00823A] max-w-xl cursor-pointer px-8 py-4 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] text-center font-sans">
              <span className="text-white font-bold text-2xl tracking-wider">
                Load all
              </span>
            </div>
          </div>


    </div>
  );
}
