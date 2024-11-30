"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 pb-72 flex items-start ">
        <div className="w-1/2">
          <h4 className="text-2xl text-rose-600 font-semibold pb-4">
            CHALLENGE YOUR LIMITS
          </h4>
          <h1 className="text-white font-bold text-6xl leading-tight mb-4">
            MORPHEOUS: THE ARENA FOR <br />
            <ReactTyped
              strings={["CHAMPIONS ", "RISING STARS"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h1>
          <p className="text-[26px] pb-8">
            Join tournament, showcase skills, compete globally, win prizes, and
            rise!{" "}
          </p>
          <Link
            href={"/"}
            className="bg-rose-600 text-white text-lg px-8 py-3 rounded-full"
          >
            GET STARTED NOW!
          </Link>
        </div>
        <div className="w-1/2 relative flex justify-center items-start ">
          <Image
            src={"/phone.png"}
            className=" align-middle"
            width={350}
            height={350}
            alt="phone"
          />

          <Image
            className=" gamer absolute left-60 "
            src={"/gamer.png"}
            width={340}
            height={340}
            alt="gamer"
          />

          <Image
            className="  absolute left-2 top-36 "
            src={"/ripple1.png"}
            width={120}
            height={120}
            alt="gamer"
          />
          <Image
            className="  absolute left-2 top-56 "
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
            className="banner-right-png  absolute right-0 top-[100px] "
            src={"/bitcoin2.png"}
            width={100}
            height={100}
            alt="gamer"
          />
          <Image
            className="banner-right-png  absolute right-0 top-[180px] "
            src={"/ripple.png"}
            width={100}
            height={100}
            alt="gamer"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
