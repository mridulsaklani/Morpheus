'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const images = [
  "/coc.jpg", 
  "/BGMI.jpg",
  "/coc.jpg",  
  "/freefire.webp",
  "/freefire.webp",
  "/freefire.webp",
];

export default function ImageCarousel() {
  return (
    <>
    <div className='bg-[#0f143a]'>
    <div className="w-full  px-4 py-8 ">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} 
        spaceBetween={30} 
        loop={true} 
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-56 flex justify-center items-center transition-transform duration-500">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl shadow-2xl object-cover w-full h-full scale-90 hover:scale-100 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </>
  );
}
