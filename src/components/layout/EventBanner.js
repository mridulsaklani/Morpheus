"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaHome } from "react-icons/fa";

const EventBanner = () => {
   
  const router = useRouter();


  return (
    <>
      <div className='py-40'>
          <div className='max-w-7xl mx-auto'>
            <div className='w-[60%] flex flex-col gap-5'>

               <h1 className='text-5xl font-bold text-white tracking-wide leading-snug'>Unleash the Gamer Within: Compete, Conquer, Celebrate!</h1>
               <div className='text-white font-medium flex items-center gap-2'> <button className='flex items-center gap-2 hover:text-rose-600 transition-all' type='button' onClick={()=>router.push("/")}> <FaHome className='text-lg'/> Home</button> / <span>Tournament</span></div>
            </div>
          </div>
      </div>
    </>
  )
}

export default EventBanner
