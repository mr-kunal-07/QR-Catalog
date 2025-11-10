'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = () => {
  const { banners } = useSelector((state) => state.banner);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    fade: false,
    cssEase: 'ease-in-out',
    dotsClass: 'slick-dots custom-dots',
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 mt-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white/80 transition-all duration-300">
        <span className="sr-only">Go to slide {i + 1}</span>
      </button>
    ),
  };

  if (!banners || banners.length === 0) return <Loader />;

  return (
    <div className="relative w-full mx-auto mt-2 px-3 overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, idx) => (
          <div key={banner.id || idx} className="outline-none relative">
            <Link
              href={banner.redirectLink || '/'}
              className="block relative h-[230px] md:h-[300px] rounded-xl overflow-hidden"
            >
              <Image
                src={banner.bannerImage}
                alt={banner.alt || banner.title || `Promotional banner ${idx + 1}`}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={idx === 0}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </Link>

          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .custom-dots li button:before {
          content: none;
        }
        
        .custom-dots li.slick-active button {
          background-color: var(--oohpoint-primary-2, #3b82f6);
          width: 2rem;
        }
        
        .slick-slide > div {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default CarouselComponent;