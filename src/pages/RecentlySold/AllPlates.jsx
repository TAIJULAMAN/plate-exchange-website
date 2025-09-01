import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAllPlatesQuery } from "../../Redux/api/PlatesApis/allListedPlatesApi";


export default function AllPlates() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const limit = 30;
  

  const { search } = useLocation();
  let searchTerm = "";

  if (search.startsWith("?")) {
    searchTerm = search.substring(1); // remove "?"
  }

  console.log(searchTerm);


  const { data, isLoading, isError } = useGetAllPlatesQuery({ page, limit, searchTerm });

  // Extract API response safely
  const plates = data?.data?.all_plates || [];
  const meta = data?.data?.meta || {};
  const totalPage = meta?.totalPage || 1;
  const currentPage = meta?.page || page;

  const handlePlateClick = (plateId) => {
    navigate(`/plate-details/${plateId}`);
  };

  if (isLoading) {
    return <div className="text-center py-20 text-lg">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center py-20 text-red-500">Failed to load plates.</div>;
  }

  return (
    <div className="container mx-auto p-8">
      {/* Header */}
      <div className="text-center my-12">
        <h1 className="text-3xl md:text-6xl font-medium text-gray-900 mb-6">
          All Plates
        </h1>
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Discover the latest number plates added to the marketplace — fresh,
            unique, and available now.
          </p>
        </div>
      </div>

      {/* Plates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {plates.map((item) => (
          <div
            key={item._id}
            onClick={() => handlePlateClick(item._id)}
            className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* License Plate */}
            <div className="bg-[#fad549] w-full px-3 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] mb-3 inline-block">
              <span className="text-black font-bold text-4xl tracking-wider font-mycustom">
                {item.registrationId}
              </span>
            </div>

            {/* Price / Status */}
            <div className="text-xl">
              {item.askingPrice ? (
                <>
                  <span className="text-gray-700">Available</span>
                  <span className="mx-1">at</span>
                  <span>£{item.askingPrice}</span>
                </>
              ) : (
                <span className="text-green-600 font-semibold">Make Offer</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPage > 1 && (
        <div className="flex justify-center items-center mt-10 gap-2">
          {/* Prev button */}
          <button
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#00823A] text-white"
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
                onClick={() => setPage(pageNum)}
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
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage === totalPage}
            className={`px-4 py-2 rounded ${
              currentPage === totalPage
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#00823A] text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
