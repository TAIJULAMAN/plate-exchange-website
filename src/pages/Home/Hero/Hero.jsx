import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import LikeIconAndText from "../../../shared/Hero/LikeIconandtext";
import Input from "../../../shared/Input/Input";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const features = [
    {
      imgSrc: "https://i.ibb.co.com/WvbNG4wC/image.png",
      text: "We charge only £10.",
    },
    {
      imgSrc: "https://i.ibb.co.com/C5rdz3s8/image.png",
      text: "No middleman (save up to 30%).",
    },
    {
      imgSrc: "https://i.ibb.co.com/C32DzLYz/image.png",
      text: "Buyer and Seller deal directly with each other.",
    },
  ];



  return (
    <main className="container mx-auto px-5 md:px-0 py-16">
      <section className="text-center mb-16 text-4xl md:text-6xl font-normal">
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
      </section>
      <section className=" rounded-lg shadow-sm py-10 px-5 mb-6 max-w-[600px] mx-auto">
        <Input
          type="text"
          placeholder="SEARCH PLATE"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="mt-5 flex flex-col md:flex-row gap-5 items-center justify-center">
          <div className="flex items-center gap-2">
            <IoIosStar className="size-5 text-[#00823a] fill-current" />
            <span className="text-lg font-medium ml-1 mr-2">Trustpilot</span></div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div className="bg-[#00823A] mx-1 p-0.5 rounded-xs">
                <IoIosStar key={i} className=" text-[#ffffff] fill-current" />
              </div>
            ))}
          </div>
          <span className="ml-2 text-lg text-[#1B1B1B]">(12,426 reviews)</span>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-10 max-w-9xl mx-auto mt-10">
        {features.map((feature, index) => (
          <LikeIconAndText key={index} imgSrc={feature.imgSrc} text={feature.text} />
        ))}
      </section>
    </main>
  );
}
