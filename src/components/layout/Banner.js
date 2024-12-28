"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import Link from "next/link";
import { IoGameController } from "react-icons/io5";

const Banner = () => {
  return (
    <>
    <div className="banner relative px-5">
      <div className="banner-overlay absolute top-0 left-0 w-full h-full"></div>
      <div className="max-w-7xl mx-auto pt-36 pb-36 md:pt-48 md:pb-52 flex flex-col lg:flex-row items-start relative z-20 ">
        <div className="w-full flex flex-col items-center lg:items-start lg:w-[65%]">
          <h4 className="text-xl md:text-2xl  text-rose-600 font-semibold mb-4 pl-2 pr-2 tracking-wide relative bg-white w-fit">
            CHALLENGE YOUR LIMITS
          </h4>
          <h1 className="text-white text-center lg:text-start font-bold text-4xl sm:text-5xl  lg:text-[64px] leading-snug mb-4 tracking-wide">
            <span className="text-4xl sm:text-5xl lg:text-[68px] bg-gradient-to-r from-cyan-500 to-red-500 pl-2 pr-2 "> MORPHEOUS <br/> </span> THE ARENA AWAITS <br /> 
            <ReactTyped
            className="uppercase"
              strings={["ARE YOU READY???", "Can you dominate???","claim you victory!"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h1>
          <p className="text-[20px] pb-8 text-white text-center lg:text-start tracking-wide">
            Join e-sports tournament, showcase skills, win prizes, and
            rise!{" "}
          </p>
          <Link
            href={"/"}
            className="bg-rose-600 text-white text-lg px-8 py-3 rounded-full flex items-center gap-2 w-fit hover:bg-white hover:text-rose-600 transition-all duration-500 hover:translate-y-[-8px]"
          >
            GET STARTED NOW! <IoGameController />
          </Link>
        </div>
        <div className="w-full lg:w-[35%] relative flex justify-center items-start ">
          {/* <Image
            src={"/phone.png"}
            className=" align-middle"
            width={350}
            height={350}
            alt="phone"
          />

          <Image
            className=" gamer absolute left-60 "
            src={"/gamer.png"}
            width={330}
            height={330}
            alt="gamer"
          />

          <Image
            className="riple1  absolute left-2 top-36 "
            src={"/ripple1.png"}
            width={120}
            height={120}
            alt="gamer"
          />
          <Image
            className="riple2  absolute left-2 top-56 "
            src={"/bitcoin1.png"}
            width={120}
            height={120}
            alt="gamer"
          />

          <Image
            className="  absolute left-32 top-[350px] "
            src={"/box.png"}
            width={80}
            height={80}
            alt="gamer"
          />
          <Image
            className="  absolute left-48 top-[390px] "
            src={"/box.png"}
            width={80}
            height={80}
            alt="gamer"
          />
          <Image
            className="ripleAni banner-right-png  absolute right-0 top-[100px] "
            src={"/bitcoin2.png"}
            width={100}
            height={100}
            alt="gamer"
          />
          <Image
            className=" ripleAni2 banner-right-png  absolute right-0 top-[180px] "
            src={"/ripple.png"}
            width={100}
            height={100}
            alt="gamer"
          /> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
