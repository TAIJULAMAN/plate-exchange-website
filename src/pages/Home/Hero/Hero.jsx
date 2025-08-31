import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import LikeIconAndText from "../../../shared/Hero/LikeIconandtext";
import Input from "../../../shared/Input/Input";
import svg1 from "/1.png";
import svg2 from "/2.svg";
import svg3 from "/3.svg";

import Loader from "../../../shared/Loaders/Loader";
import ErrorPage from "../../../shared/Error/ErrorPage";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ only call API when searchTerm length >= 1
  // const {
  //   data,
  //   isLoading,
  //   error,
  //   isSuccess,
  // } = useGetAllplatesSalesQuery(
  //   { registrationId: searchTerm },
  //   { skip: searchTerm.length < 1 }
  // );

  // if (isLoading) return <Loader />;
  // if (error) return <ErrorPage message={error?.message} />;

  // console.log("Search results:", data?.data?.all_plates);

  const features = [
    { imgSrc: svg1, text: "We charge only £10." },
    { imgSrc: svg2, text: "No middleman (save up to 30%)." },
    { imgSrc: svg3, text: "Buyer and Seller deal directly with each other." },
  ];

  return (
    <main className="container mx-auto px-5 md:px-0 py-16">
      {/* Hero text */}
      <section className="text-center mb-16 text-4xl md:text-6xl font-normal">
        <h1 className="text-gray-800 mb-2 leading-tight">
          Connecting buyers and sellers of
        </h1>
        <h2 className="text-gray-800 mb-8">
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
      </section>

      {/* Search box */}
      <section className="rounded-lg shadow-sm py-10 px-5 mb-6 max-w-[600px] mx-auto">
        <Input
          type="text"
          placeholder="SEARCH PLATE"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>


      <section className="grid md:grid-cols-3 gap-10 max-w-9xl mx-auto mt-10">
        {features.map((feature, index) => (
          <LikeIconAndText key={index} imgSrc={feature.imgSrc} text={feature.text} />
        ))}
      </section>


      {/* {isSuccess && searchTerm.length >= 1 && (
        <div className="mt-10">
          <h3 className="text-xl font-bold">Search Results:</h3>
          {data?.data?.all_plates?.length > 0 ? (
            <ul className="list-disc pl-5">
              {!isLoading && data?.success && isSuccess &&  data.data.all_plates.map((plate) => (
                <li key={plate._id}>{plate.registrationId}</li>
              ))}
            </ul>
          ) : (
            <p>No plates found.</p>
          )}
        </div>
      )} */}
    </main>
  );
}
