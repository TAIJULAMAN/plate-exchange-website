import React from "react";
import ReviewCard from "../../shared/ReviewCard/ReviewCard";

export default function Reviewsandtestimonials() {
  const reviews = [
    {
      name: "David",
      review:
        "Very simple and sold plate within 10 days, offered good advice along the way. Highly recommended.",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png", // replace with real path
      rating: 5,
    },
    {
      name: "Sarah",
      review:
        "Fantastic service, smooth and quick transaction. Will use again.",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png",
      rating: 5,
    },
    {
      name: "Sarah",
      review:
        "Fantastic service, smooth and quick transaction. Will use again.",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png",
      rating: 5,
    },
    {
      name: "Sarah",
      review:
        "Fantastic service, smooth and quick transaction. Will use again.",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png",
      rating: 5,
    },
    {
      name: "Sarah",
      review:
        "Fantastic service, smooth and quick transaction. Will use again.",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png",
      rating: 5,
    },
    {
      name: "Sarah",
      review:
        "Fantastic service, smooth and quick transaction. Will use again.",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png",
      rating: 5,
    },
    {
      name: "Sarah",
      review:
        "Fantastic service, smooth and quick transaction. Will use again.",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png",
      rating: 5,
    },
    {
      name: "Sarah",
      review:
        "Fantastic service, smooth and quick transaction. Will use again.",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png",
      rating: 5,
    },
    {
      name: "Sarah",
      review:
        "Fantastic service, smooth and quick transaction. Will use again.",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png",
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center my-12">
        <h1 className="text-3xl md:text-6xl font-medium text-gray-900 mb-6">
          Reviews
        </h1>
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Hear what our happy users have to say about their PlateXpress experience.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, index) => (
          <ReviewCard key={index} {...r} />
        ))}
      </div>
    </div>
  );
}
