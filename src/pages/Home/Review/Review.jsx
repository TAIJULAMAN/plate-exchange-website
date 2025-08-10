import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Review() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Fantastic service! Found the perfect plate for my new car and saved hundreds compared to other dealers. The direct contact with the seller made everything so much easier.",
      date: "2 days ago"
    },
    {
      name: "Michael Chen",
      rating: 5,
      review: "PlateExchange is brilliant - no middleman fees and direct communication with sellers. Sold my plate within a week at full asking price. Highly recommended!",
      date: "1 week ago"
    },
    {
      name: "Emma Thompson",
      rating: 5,
      review: "Amazing platform! The £10 flat fee is so much better than the 30% commission other sites charge. Quick, easy, and transparent process throughout.",
      date: "2 weeks ago"
    },
    {
      name: "David Wilson",
      rating: 5,
      review: "Best number plate marketplace I've used. Direct dealing with sellers, no hidden fees, and excellent customer support. Will definitely use again.",
      date: "3 weeks ago"
    },
    {
      name: "Lisa Parker",
      rating: 5,
      review: "Sold my cherished plate in just 3 days! The platform is so easy to use and the direct communication with buyers made the whole process seamless.",
      date: "1 month ago"
    },
    {
      name: "James Mitchell",
      rating: 5,
      review: "Outstanding service from start to finish. Found exactly what I was looking for at a great price. The no-middleman approach really works!",
      date: "1 month ago"
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-green-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  // const getCurrentSlideTestimonials = () => {
  //   const startIndex = currentSlide * itemsPerSlide;
  //   return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  // };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-green-500 fill-current mr-2" />
            <span className="text-2xl font-bold text-green-600">Trustpilot</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Rated <span className="font-semibold">'Excellent'</span>
          </h2>
          
          <div className="flex items-center justify-center mb-4">
            <div className="flex mr-4">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.8 out of 5</span>
          </div>
          
          <p className="text-gray-600 text-lg">
            Based on <span className="font-semibold">12,426 reviews</span>
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((testimonial, index) => (
                        <div
                          key={`${slideIndex}-${index}`}
                          className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                        >
                          {/* Quote Icon */}
                          <div className="mb-4">
                            <Quote className="w-8 h-8 text-green-500" />
                          </div>

                          {/* Rating Stars */}
                          <div className="flex mb-4">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Review Text */}
                          <p className="text-gray-700 text-sm leading-relaxed mb-4 min-h-[100px]">
                            "{testimonial.review}"
                          </p>

                          {/* Customer Info */}
                          <div className="border-t border-gray-200 pt-4">
                            <p className="font-semibold text-gray-800 text-sm">
                              {testimonial.name}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {testimonial.date}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide 
                    ? 'bg-green-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-green-500 fill-current mr-2" />
            <span className="text-green-700 font-medium">
              Trusted by thousands of number plate buyers and sellers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};