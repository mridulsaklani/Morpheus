"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const GameSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    centerMode: true, // Ensures slides are centered
    infinite: true, // Loops through slides
    centerPadding: "0", // No padding on sides
    slidesToShow: 3, // Display 3 slides
    speed: 500,
    afterChange: (current) => setActiveIndex(current), // Update active index
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
    <div className="bg-[#0f143a]">
    <div className="max-w-7xl mx-auto py-10">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="px-4">
          <div
            className={`h-64 flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ${
              activeIndex === 0
                ? "scale-110 opacity-100 z-10"
                : "scale-90 opacity-50"
            }`}
          >
            <Link href={""}>
              <Image
                src={"/BGMI.jpg"}
                height={280}
                width={280}
                alt="BGMI"
                className="rounded-lg"
              />
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="px-4">
          <div
            className={`h-64 flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ${
              activeIndex === 1
                ? "scale-110 opacity-100 z-10"
                : "scale-90 opacity-50"
            }`}
          >
            <Link href={""}>
              <Image
                src={"/freefire.webp"}
                height={280}
                width={280}
                alt="Free Fire"
                className="rounded-lg"
              />
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="px-4">
          <div
            className={`h-64 flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 ${
              activeIndex === 2
                ? "scale-110 opacity-100 z-10"
                : "scale-90 opacity-50"
            }`}
          >
            <Link href={""}>
              <Image
                src={"/fortnite.jpg"}
                height={280}
                width={280}
                alt="Fortnite"
                className="rounded-lg"
              />
            </Link>
          </div>
        </div>
      </Slider>
    </div>
    </div>
    </>
  );
};

export default GameSlider;
