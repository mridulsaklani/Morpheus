'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const images = [
  "/coc.jpg", 
  "/BGMI.jpg",
  "/coc.jpg",  
  "/freefire.webp",
  "/freefire.webp",
  "/freefire.webp",
];

export default function CenteredSlider() {
  const [activeIndex, setActiveIndex] = useState(1); // Track active slide index

  return (
    <div className="bg-[#0f143a]  flex items-center justify-center">
      <div className="w-full max-w-7xl  mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000, // Change slide every 3 seconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className={`w-full h-60  flex justify-center items-center transition-all duration-500 ${
                  activeIndex === index ? 'scale-110 z-10' : 'scale-90'
                }`}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="rounded-xl shadow-xl object-cover w-full h-full"
                  
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
