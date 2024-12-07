"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaHome } from "react-icons/fa";
const ContactBanner = () => {
    const router = useRouter()
  return (
    <>
      <div className="  relative pt-56 pb-32">
      {/* <div className="banner-overlay absolute top-0 left-0 w-full h-full"></div> */}
      <div className="flex max-w-7xl mx-auto relative z-20">
        <div className='w-1/2'>
        <h1 className='text-5xl font-bold text-white leading-tight mb-4'>Get in Touch with Us</h1>
        <div className='text-white font-medium flex items-center gap-2'> <button className='flex items-center gap-2 hover:text-rose-600 transition-all' type='button' onClick={()=>router.push("/")}> <FaHome className='text-lg'/> Home</button> / <span>Contact</span></div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ContactBanner
