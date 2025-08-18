import React, { useState } from "react";
import BlogCard from "../../shared/BlogCard/BlogCard";

export default function GuideAndBlog() {
  const [activeTab, setActiveTab] = useState("guides");

const guides = [
  {
    id: "123",
    image: "/man.png",
    title: "How to Buy a Private Number Plate",
    description: "Learn the essential steps to purchasing your first private number plate, from choosing the right plate to completing the legal process.",
    link: "/blog/how-to-buy"
  },
  {
    id: "124",
    image: "/man.png",
    title: "Number Plate Formats Explained",
    description: "Understand the UK number plate formats, including current style, suffix, prefix, and dateless registrations.",
    link: "/blog/formats-explained"
  },
  {
    id: "125",
    image: "/man.png",
    title: "Number Plate History & Styles",
    description: "A short history of UK plates and how styles have changed over time.",
    link: "/blog/history"
  }
];

const blogs = [
  {
    id: "201",
    image: "/man.png",
    title: "Selling Your Number Plate: A Complete Guide",
    description: "Maximise your plate's value with our selling tips — from valuation to marketing, and the final transfer process.",
    link: "/blog/selling-guide"
  },
  {
    id: "202",
    image: "/man.png",
    title: "Top 10 Most Expensive Number Plates Sold",
    description: "A look at the rarest and most expensive number plates ever sold, and what makes them so valuable.",
    link: "/blog/top-plates"
  }
];


  const getActiveData = () => {
    if (activeTab === "guides") return guides;
    if (activeTab === "blogs") return blogs;
    return [];
  };

  return (
    <div className="container mx-auto p-8">
      {/* Header */}
      <div className="text-center my-12">
        <h1 className="text-3xl md:text-6xl font-medium text-gray-900 mb-6">
          Number plate guide
        </h1>
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Everything you need to know about buying, selling, and valuing number plates — 
            from legal formats to design tips.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setActiveTab("guides")}
          className={`px-6 py-3 rounded-full font-semibold transition ${
            activeTab === "guides"
              ? "bg-[#00823A] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Buy & Sell Guide
        </button>
        <button
          onClick={() => setActiveTab("blogs")}
          className={`px-6 py-3 rounded-full font-semibold transition ${
            activeTab === "blogs"
              ? "bg-[#00823A] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Blogs
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getActiveData().map((article, index) => (
          <BlogCard key={index} article={article}  />
        ))}
      </div>
    </div>
  );
}
