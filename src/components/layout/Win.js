import React from 'react'
import Link from 'next/link'
import { IoGameController } from "react-icons/io5";

const Win = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto py-24 flex items-center'>
        <div className='w-[65%] flex  gap-4 flex-col'>
        <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
        every day lots of wins
          </h4>
          <h2 className="text-white font-bold text-6xl uppercase">
          be one of them
          </h2>
          <p className="text-xl  font-light pb-6 ">
          Get started in less than 5 min - no credit card required.Gain early access to Dooplo and experience crypto like never before.
          </p>
          <Link
            href={"/"}
            className="bg-rose-600 text-white text-lg px-8 py-3 rounded-full flex items-center gap-2 w-fit uppercase"
          >
            Play NOW! <IoGameController />
          </Link>
        </div>
        <div className="w-[35%]"></div>


      </div>
    </>
  )
}

export default Win
