import React from 'react'
import Link from 'next/link'
import { IoGameController } from "react-icons/io5";
import Image from 'next/image';

const Win = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto py-4  md:py-24 pb-52 flex flex-col gap-16 md:flex-row items-center px-5'>
        <div className='w-full lg:w-[65%] flex items-center md:items-start  gap-4 flex-col'>
        <h4 className="text-xl text-center md:text-start lg:text-2xl text-rose-600 font-semibold uppercase ">
        every day lots of wins
          </h4>
          <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl uppercase text-center md:text-start ">
          be one of them
          </h2>
          <p className="text-xl lg:text-2xl text-center md:text-start font-light pb-6 w-full">
          Join the league of gamers who dominate the battlegrounds, forge alliances, and claim ultimate glory!
          </p>
          <Link
            href={"/"}
            className="bg-rose-600 text-white text-lg px-8 py-3 rounded-full flex items-center gap-2 w-fit uppercase"
          >
            Play NOW! <IoGameController />
          </Link>
        </div>
        <div className="w-full lg:w-[35%] flex justify-end items-center">
          <Image className=''
          src={'/Win.png'}
          width={350}
          height={350}
          alt='Win Image'/>
        </div>


      </div>
    </>
  )
}

export default Win
