import React from 'react'
import { GiSwordClash } from "react-icons/gi";
import { MdGeneratingTokens } from "react-icons/md";
import { LuScale } from "react-icons/lu";
const WhatWeOffer = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto py-20 pb-48'>
      <div className='flex flex-col gap-5 items-center justify-center mb-20'>
        <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
        our special
          </h4>
          <h2 className="text-white font-bold text-6xl uppercase">
          What We Offer
          </h2>
          <p className="text-2xl  font-light pb-6 text-center w-3/4">
          Our mission is to empower gamers by providing opportunities to compete, connect, and grow.
We aim to create a dynamic ecosystem where players can rise to prominence, earn recognition,
and take their gaming journey to new heights.
          </p>

        </div>
        <div className='grid grid-cols-2 gap-7'>
            <div className='offer-box flex items-center border-[1px] gap-10 rounded-lg border-[#273b71] py-9 px-11'>
                <div className=' red-ico h-16 w-16 rounded-full relative text-white flex items-center justify-center'><GiSwordClash className='text-5xl'/></div>
                <div className='w-[70%]'>
                    <h3 className='text-3xl text-white font-bold mb-3'>Epic Tournament</h3>
                    <p className='text-light text-xl'>Regularly organized survival game tournaments for games like
                    PUBG & Free Fire, with attractive prizes</p>
                </div>

            </div>
            <div className='offer-box flex items-center border-[1px] gap-10 rounded-lg border-[#273b71] py-9 px-11'>
                <div className=' purple-ico h-16 w-16 rounded-full relative text-white flex items-center justify-center'><MdGeneratingTokens className='text-5xl'/></div>
                <div className='w-[70%]'>
                    <h3 className='text-3xl text-white font-bold mb-3'>Token-Based Entry </h3>
                    <p className='text-light text-xl'>A simple and fair token system for accessing
                    tournaments, making participation smooth and rewarding.</p>
                </div>

            </div>

            <div className='offer-box flex items-center border-[1px] gap-10 rounded-lg border-[#273b71] py-9 px-11'>
                <div className=' yellow-ico h-16 w-16 rounded-full relative text-white flex items-center justify-center'><LuScale className='text-5xl'/></div>
                <div className='w-[70%]'>
                    <h3 className='text-3xl text-white font-bold mb-3'>Provably Fair </h3>
                    <p className='text-light text-xl'>A simple and fair token system for accessing
                    tournaments, making participation smooth and rewarding.</p>
                </div>

            </div>

            <div className='offer-box flex items-center border-[1px] gap-10 rounded-lg border-[#273b71] py-9 px-11'>
                <div className=' yellow-ico h-16 w-16 rounded-full relative text-white flex items-center justify-center'><LuScale className='text-5xl'/></div>
                <div className='w-[70%]'>
                    <h3 className='text-3xl text-white font-bold mb-3'>Provably Fair </h3>
                    <p className='text-light text-xl'>A simple and fair token system for accessing
                    tournaments, making participation smooth and rewarding.</p>
                </div>

            </div>

        </div>

      </div>
    </>
  )
}

export default WhatWeOffer
