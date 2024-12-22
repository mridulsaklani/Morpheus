"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaHome } from "react-icons/fa";
import Image from 'next/image';

const AboutBanner = () => {
    const router = usePathname()
  return (
    <>
    <div className='max-w-7xl mx-auto py-24 pt-36 flex items-center'> 

       <div className="w-1/2">
        
               <h1 className='text-6xl font-bold text-white leading-tight mb-4 uppercase'>About Morpheous</h1>
               <div className='text-white font-medium flex items-center gap-2'> <button className='flex items-center gap-2 hover:text-rose-600 transition-all' type='button' onClick={()=>router.push("/")}> <FaHome className='text-lg'/> Home</button> / <span>Tournament</span></div>
               </div>
       <div className="w-1/2 flex justify-end items-center">
         <Image
         src={'/about.png'}
         width={570}
         height={570}
         alt='about us'
         />
       </div>
    </div>
      
    </>
  )
}

export default AboutBanner
