import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import svg1 from "/1.png";
import svg2 from "/2.svg";
import svg3 from "/3.svg";
import LikeIconAndText from "../../shared/Hero/LikeIconandtext";
import { useGetSoldPlatesQuery } from "../../Redux/api/PlatesApis/soldPlatesApi";

export default function RecentlySold() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const limit = 20;

  // Fetch data with page & limit params
  const { data, isLoading, isError } = useGetSoldPlatesQuery({ page, limit });
  const totalPage = data?.data?.meta?.totalPage || 1;
  const currentPage = data?.data?.meta?.page || page;

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


      const handlePlateClick = (plateId) => {
    navigate(`/plate-details/${plateId}`);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setPage(newPage);
    }
  };

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Error fetching sold plates.</p>;

  return (
    <div className="container mx-auto px-5 md:px-0 py-10 md:py-16 ">
      {/* Header */}
      <div className="text-center my-12">
        <h1 className="text-3xl md:text-6xl font-medium text-gray-900 mb-6">
          Plates Sold Via Plate Xpress
        </h1>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-10 max-w-9xl mx-auto mt-10">
            {features.map((feature, index) => (
              <LikeIconAndText key={index} imgSrc={feature.imgSrc} text={feature.text} />
            ))}
          </div>
        </div>
      </div>

      {/* Recently Sold Plates Section */}
   <div className="min-h-[20rem]">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
        {data?.data?.all_sold_plates?.map((item, index) => (
          <div
            key={item._id || index}
             onClick={() => handlePlateClick(item._id)}
            className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* License Plate */}
            <div className="bg-[#fad549] w-full px-3 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] mb-3 inline-block">
              <span className="text-black font-bold text-4xl tracking-wider font-mycustom">
                {item.registrationId}
              </span>
            </div>

            {/* Price Information */}
            <div className="text-xl">
              {item.status?.toLowerCase() === "sold" && (
                <>
                  <span>Sold</span>
                  {item.askingPrice && (
                    <>
                      <span className="mx-1">for</span>
                      <span>{item.askingPrice}</span>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
   </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-2">
        {/* Prev button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-[#00823A] text-white"
          }`}
        >
          Prev
        </button>

        {/* Page numbers */}
        {[...Array(totalPage)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-4 py-2 rounded ${
                currentPage === pageNum
                  ? "bg-[#00823A] text-white font-bold"
                  : "bg-white border text-gray-700 hover:bg-gray-100"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
          className={`px-4 py-2 rounded ${
            currentPage === totalPage ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-[#00823A] text-white"
          }`}
        >
          Next
        </button>
      </div>

      {/* Load All */}
      <div
        onClick={() => navigate("/load-all-plates")}
        className="bg-[#00823A] max-w-xl mx-auto mt-6 cursor-pointer px-8 py-4 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] text-center font-sans"
      >
        <span className="text-white font-bold text-2xl tracking-wider">Load all</span>
      </div>
    </div>
  );
}
