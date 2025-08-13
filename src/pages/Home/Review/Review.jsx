import React from 'react';
import ReviewCard from '../../../shared/ReviewCard/ReviewCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Review() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Fantastic service! Found the perfect plate for my new car and saved hundreds compared to other dealers. The direct contact with the seller made everything so much easier.",
      date: "2 days ago",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png"
    },
    {
      name: "Michael Chen",
      rating: 5,
      review: "PlateExchange is brilliant - no middleman fees and direct communication with sellers. Sold my plate within a week at full asking price. Highly recommended!",
      date: "1 week ago",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png"
    },
    {
      name: "Emma Thompson",
      rating: 5,
      review: "Amazing platform! The £10 flat fee is so much better than the 30% commission other sites charge. Quick, easy, and transparent process throughout.",
      date: "2 weeks ago",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png"
    },
    {
      name: "David Wilson",
      rating: 5,
      review: "Best number plate marketplace I've used. Direct dealing with sellers, no hidden fees, and excellent customer support. Will definitely use again.",
      date: "3 weeks ago",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png"
    },
    {
      name: "Lisa Parker",
      rating: 5,
      review: "Sold my cherished plate in just 3 days! The platform is so easy to use and the direct communication with buyers made the whole process seamless.",
      date: "1 month ago",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png"
    },
    {
      name: "James Mitchell",
      rating: 5,
      review: "Outstanding service from start to finish. Found exactly what I was looking for at a great price. The no-middleman approach really works!",
      date: "1 month ago",
      image: "https://i.ibb.co.com/ccX46rZ2/image.png"
    }
  ];

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading + Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8 relative">
          <div className="swiper-button-prev !static !transform-none md:bg-gray-200 md:border md:border-gray-400 rounded-full p-2 cursor-pointer md:!size-20 !size-5 !text-black md:!mt-2 md:!mr-40"></div>
          <h2 className="text-xl md:text-6xl font-medium flex items-center gap-2">
            Rated 'Excellent' on 
            <img
              src="https://i.ibb.co.com/NnC9MC0B/image.png"
              alt="Trustpilot logo"
              className="inline-block h-8 md:h-10"
            />
            Trustpilot
          </h2>
          <div className="swiper-button-next !static !transform-none md:bg-gray-200 md:border md:border-gray-400 rounded-full p-2 cursor-pointer md:!size-20 !size-5 !text-black md:!mt-2 md:!ml-40"></div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <ReviewCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
