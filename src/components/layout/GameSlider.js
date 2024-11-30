"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';

const GameSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <>
    <div className='w-full overflow-hidden py-6 bg-[#0F143A]'>
     <Slider {...settings}>
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
         <Image
           className="h-[120px] object-cover object-center"
           src={"/BGMI.jpg"}
           height={200}
           width={200}
           alt='bgmi'
         />

         
        </Link>
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
        <Image
           className="h-[120px] object-cover object-center"
           src={"/freefire.webp"}
           height={200}
           width={200}
           alt='freefire'
         />
        </Link>
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
        <Image
           className="h-[120px] object-cover object-center"
           src={"/coc.jpg"}
           height={200}
           width={200}
           alt='clash of clans'
         />
        </Link>
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
        <Image
           className="h-[120px] object-cover object-center"
           src={"/Call-Of-Duty.jpg"}
           height={200}
           width={200}
           alt='call of duty'
         />
        </Link>
      
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
        <Image
           className="h-[120px] object-cover object-center"
           src={"/fortnite.jpg"}
           height={200}
           width={200}
           alt='call of duty'
         />
        </Link>
      
      </Slider>
      </div>
    </>
  )
}

export default GameSlider
