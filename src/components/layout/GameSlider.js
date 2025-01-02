'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const images = [
  "/coc.jpg", 
  "/BGMI.jpg",
  "/coc.jpg",  
  "/freefire.webp",
  "/freefire.webp",
  "/freefire.webp",
];

export default function CenteredSlider() {
  const [activeIndex, setActiveIndex] = useState(1); 
  const [swiperInstance, setSwiperInstance] = useState(null); 

  return (
    <div className="bg-[#0f143a] flex items-center justify-center pt-6 relative">
      <div className="w-full max-w-7xl mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          // autoplay={{
          //   delay: 3000, 
          //   disableOnInteraction: false, 
          // }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)} 
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className={`w-full h-60 flex justify-center items-center transition-all duration-500 ${
                  activeIndex === index ? 'scale-110 z-10' : 'scale-90'
                }`}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="rounded-xl shadow-xl object-cover w-full h-[90%]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-rose-700 transition-all"
          onClick={() => {
            if (swiperInstance) swiperInstance.slidePrev();
          }}
        >
          <GrFormPrevious className="text-xl" />
        </button>
        <button
          className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-rose-700 transition-all"
          onClick={() => {
            if (swiperInstance) swiperInstance.slideNext();
          }}
        >
          <MdNavigateNext className="text-xl" />
        </button>
      </div>
    </div>
  );
}
