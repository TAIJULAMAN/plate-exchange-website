import React from 'react';
import { ArrowRight } from 'lucide-react'
import BlogCard from '../../../shared/BlogCard/BlogCard';

export default function HelpfulGuides() {
    const articles = [
        {
            id: 1,
            image: "/man.png",
            title: "TV Dragon Sells Number Plate With PlateXpress",
            description: "Duncan Bannatyne, Chairman Of The Bannatyne Group, Serial Entrepreneur And Investor, Best Known For His Appearances On TV Show Dragons Den, Has Sold His Number Plate, 6 AVS, Via The Fast-Growing Number Plate Classifieds Website Plate-Trader.Com He Initially Posted A Tweet On Twitter To Ask If Anyone Was Interested In Buying The Plate, And From There We Got In Touch With His PA.",
            link: "#"
        },
        {
            id: 2,
            image: "/man.png",
            title: "TV Dragon Sells Number Plate With PlateXpress",
            description: "Duncan Bannatyne, Chairman Of The Bannatyne Group, Serial Entrepreneur And Investor, Best Known For His Appearances On TV Show Dragons Den, Has Sold His Number Plate, 6 AVS, Via The Fast-Growing Number Plate Classifieds Website Plate-Trader.Com He Initially Posted A Tweet On Twitter To Ask If Anyone Was Interested In Buying The Plate, And From There We Got In Touch With His PA.",
            link: "#"
        },
        {
            id: 3,
            image: "/man.png",
            title: "TV Dragon Sells Number Plate With PlateXpress",
            description: "Duncan Bannatyne, Chairman Of The Bannatyne Group, Serial Entrepreneur And Investor, Best Known For His Appearances On TV Show Dragons Den, Has Sold His Number Plate, 6 AVS, Via The Fast-Growing Number Plate Classifieds Website Plate-Trader.Com He Initially Posted A Tweet On Twitter To Ask If Anyone Was Interested In Buying The Plate, And From There We Got In Touch With His PA.",
            link: "#"
        }
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Helpful Guides On Buying, Selling &<br />
                    Valuing Number Plates With<br />
                    PlateExange
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover the latest number plates added to the marketplace — fresh, unique, and available now.
                </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {articles.map((article) => (
                    <BlogCard article={article} key={article?.id} />
                ))}
            </div>
        </div>
    )
}
