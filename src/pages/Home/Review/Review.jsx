import React from 'react';
import ReviewCard from '../../../shared/ReviewCard/ReviewCard';

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
    <section className="px-5 md:px-0 py-5 md:py-16 overflow-hidden my-10">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-xl md:text-6xl font-medium flex items-center justify-center gap-2 flex-wrap">
            Rated 'Excellent' on
            <img
              src="https://i.ibb.co.com/NnC9MC0B/image.png"
              alt="Trustpilot logo"
              className="inline-block h-8 md:h-10"
            />
            Trustpilot
          </h2>
        </div>

        {/* Marquee Container */}
        <section className="relative overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              {/* First set of testimonials */}
              {testimonials.map((t, i) => (
                <div key={`first-${i}`} className="marquee-item">
                  <ReviewCard {...t} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((t, i) => (
                <div key={`second-${i}`} className="marquee-item">
                  <ReviewCard {...t} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
