"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { BiSupport } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { usePathname } from 'next/navigation';



const Navbar = () => {

  const pathname = usePathname()
  return (
    <>
    <div className='max-w-7xl m-auto  items-center py-4 hidden'>
        <div className="w-1/2">
        <ul className='flex items-center '>
            <li><Link href="tel:8627819683" className='flex items-center gap-2 pr-4 border-r-[1px]'><BiSupport className='text-xl'/><p>Support</p></Link></li>
            <li><Link href={'/'} className='flex items-center gap-2 px-4 border-r-[1px]'><FaEnvelope className='text-lg'/><p>morpheus@gmail.com</p></Link></li>
            <li><Link href={'tel:8627819683'} className='flex items-center gap-2 px-4'><MdLanguage className='text-xl'/><p>Support</p></Link></li>
        </ul>
        
        </div>
        <div className="w-1/2">
        <ul className='flex items-center justify-end'>
        <li><Link href={'/'} className='flex items-center gap-2 pr-4 border-r-[1px]'><IoMdNotifications className='text-xl'/></Link></li>
        <li><Link href={'/'} className='flex items-center gap-2 px-4 '><FaUser className='text-xl'/><p>Sign In</p></Link></li>
        </ul></div>

       
    </div>
    <div className=' bg-slate-700 '>

    <div className='fixed bg-[#0000009c] py-3 top-0 left-0 w-full z-30' >

    
    <div className='   max-w-7xl mx-auto  flex items-center gap-10 '>
      <div className='w-1/6'>
      <Image 
      src={"/morpheus-logo.png"}
      height={200}
      width={200}
      alt='morpheus-logo'
      />
      </div>
      <div className='w-4/6 flex justify-end'>
      <nav>
        <ul className='flex gap-12 items-center'>
          <li>
            <Link className={`${pathname === "/" ? "text-rose-600 font-semibold" : "text-white"} font-medium `} href={'/'}>HOME</Link>
          </li>
          <li>
            <Link className={`${pathname === "/events" ? "text-rose-600 font-semibold" : "text-white"} uppercase`} href={'/events'}>Events</Link>
          </li>
          <li>
            <Link className={`${pathname === "/tournament" ? "text-rose-600 font-semibold" : "text-white"} font-medium`} href={'/tournament'}>TOURNAMENTS</Link>
          </li>
          
          <li>
            <Link className={`${pathname === "/contact" ? "text-rose-600 font-semibold" : "text-white"} font-medium `} href={'/contact'}>CONTACT</Link>
          </li>
        </ul>
      </nav>
      </div>
      <div className='w-1/6 flex justify-end'>
      <Link  className="bg-rose-600 px-8 py-3 rounded-full text-white flex items-center gap-2 uppercase" href={"/"}>Join Us <IoGameController className='text-xl' /></Link></div>

    </div>
    </div>
    </div>
      
    </>
  )
}

export default Navbar
