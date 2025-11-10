
'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

const BannerCarousel = ({ banners = [] }) => {
    const defaultBanners = [
        {
            id: 1,
            bannerImage: 'https://myraymond.com/cdn/shop/files/RMDX02322-K8-2.jpg?v=1729163989',
            alt: 'Raymond Men Black Structure Contemporary Fit Polyester Blend Suit',
            title: 'Men Black Blend Suit',
            description: 'Raymond Men Black Structure Contemporary Fit Polyester Blend Suit',
            price: 'Rs. 10,534.00',
            redirectLink: '/'
        },
        {
            id: 2,
            bannerImage: 'https://myraymond.com/cdn/shop/files/RIDH00808-R4-2.jpg?v=1725601288',
            alt: 'Men Red Blend Suit',
            title: 'Men Red Blend Suit',
            description: 'Raymond Men Red Structured Regular Fit Polyester Blend Suit',
            price: 'Rs. 20,016.00',
            redirectLink: '/'
        },
        {
            id: 3,
            bannerImage: 'https://myraymond.com/cdn/shop/files/RMDX02366-G8-2.jpg?v=1744822850',
            alt: 'New Arrivals',
            title: 'Men Grey Solid Suit',
            description: 'Raymond Men Grey Solid Contemporary Fit Polyester Blend Suit',
            price: 'Rs. 12,999.00',
            redirectLink: '/'
        }
    ];

    const bannerList = banners.length > 0 ? banners : defaultBanners;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [bookmarked, setBookmarked] = useState({});

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerList.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerList.length) % bannerList.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const toggleBookmark = (id, e) => {
        e.preventDefault();
        e.stopPropagation();
        setBookmarked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    if (bannerList.length === 0) return null;

    return (
        <div className="w-full max-w-6xl mx-auto px-3">
            <div className="relative group">
                {/* Main Carousel Container */}
                <div className="relative overflow-hidden rounded-lg shadow-xl mx-3">
                    {/* Slides */}
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {bannerList.map((banner, idx) => (
                            <div key={banner.id || idx} className="min-w-full">
                                <div className="relative bg-gray-50">
                                    <div className="grid md:grid-cols-2 gap-0">
                                        {/* Image Section */}
                                        <div className="relative h-fit overflow-hidden">
                                            <img
                                                src={banner.bannerImage}
                                                alt={banner.alt || banner.title || `Banner ${idx + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex flex-col justify-center p-4 relative">
                                            <div className="">
                                                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                                    {banner.title}
                                                </h3>

                                                <p className="text-md mb-4 text-gray-600 leading-tight">
                                                    {banner.description}
                                                </p>

                                                <div className="flex justify-between">
                                                    {banner.price && (

                                                        <span className="text-2xl font-bold text-black">
                                                            {banner.price}
                                                        </span>

                                                    )}


                                                    <button
                                                        onClick={(e) => toggleBookmark(banner.id, e)}
                                                        className={`p-3 rounded-lg border-2 transition-all ${bookmarked[banner.id]
                                                            ? 'bg-gray-600 border-gray-600 text-white'
                                                            : 'bg-white border-gray-300 text-gray-700 hover:border-gray-600'
                                                            }`}
                                                        aria-label={bookmarked[banner.id] ? 'Remove bookmark' : 'Add bookmark'}
                                                    >
                                                        <Bookmark
                                                            size={20}
                                                            fill={bookmarked[banner.id] ? 'currentColor' : 'none'}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {bannerList.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft size={24} className="text-gray-800" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
                                aria-label="Next slide"
                            >
                                <ChevronRight size={24} className="text-gray-800" />
                            </button>
                        </>
                    )}
                </div>

                {/* Dots Navigation */}
                {bannerList.length > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                        {bannerList.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`transition-all duration-300 rounded-full ${currentSlide === idx
                                    ? 'w-8 h-3 bg-gray-900'
                                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                                aria-current={currentSlide === idx}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BannerCarousel;