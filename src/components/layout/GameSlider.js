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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4500,
        // cssEase: "linear"
      };
  return (
    <>
    <div className='w-full overflow-hidden py-6 bg-[#0F143A]'>
     <Slider {...settings}>
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
         <Image
           className="h-[160px] object-cover object-center"
           src={"/BGMI.jpg"}
           height={280}
           width={280}
           alt='bgmi'
         />

         
        </Link>
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
        <Image
           className="h-[160px] object-cover object-center"
           src={"/freefire.webp"}
           height={280}
           width={280}
           alt='freefire'
         />
        </Link>
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
        <Image
           className="h-[160px] object-cover object-center"
           src={"/coc.jpg"}
           height={280}
           width={280}
           alt='clash of clans'
         />
        </Link>
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
        <Image
           className="h-[160px] object-cover object-center"
           src={"/Call-Of-Duty.jpg"}
           height={280}
           width={280}
           alt='call of duty'
         />
        </Link>
      
        <Link href={""} className='flex items-center justify-center hover:scale-105 transition-all'>
        <Image
           className="h-[160px] object-cover object-center"
           src={"/fortnite.jpg"}
           height={280}
           width={280}
           alt='call of duty'
         />
        </Link>
      
      </Slider>
      </div>
    </>
  )
}

export default GameSlider
