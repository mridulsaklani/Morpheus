import React from 'react'
import Image from 'next/image'
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='footer '>
        <div className='max-w-7xl m-auto py-20'> 
        <div className="subscribe  p-14">
          <div className="flex items-center flex-col justify-center gap-3 pb-10 ">
            <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
              subscribe to Morpheus
            </h4>
            <h2 className="text-white font-bold text-[40px] uppercase">
              To Get Exclusive Benefits
            </h2>
          </div>
          <div className="flex items-center justify-center gap-5 ">
            <div className="w-1/5 flex justify-end items-center">
             <Image
             src={'/mail-box.png'}
             width={100}
             height={100}
             alt="mail-box"
             />
            </div>
            <div className="w-4/5">
            <form className="w-full flex gap-6" action="">
              <input className="w-[65%] bg-transparent border-b-2 border-white" type="email" placeholder="Your Email Address " />
              <button  type="submit" className="uppercase bg-rose-600 flex items-center py-3 text-white w-[35%] rounded-full justify-center relative">Subscribe <span className="bg-[#db5263] w-12 h-12 rounded-full   flex items-center justify-center self-end absolute right-0 top-0"><FaPaperPlane className=" text-lg  "/></span></button>
              </form></div>
           

          </div>
        </div>
        <div className='grid grid-cols-4 gap-4 justify-start pt-16'>
          <div> 
            <Image
            src={"/morpheus-logo.png"}
            width={250}
            height={250}
            quality={100}
            alt=''/>
            <p className='border-b-[1px] border-[#ffffff30] pb-4'>
            Morpheous Gaming offers thrilling tournaments, real-time stats, fair play, secure payments, and a vibrant community for gamers to compete and win.</p>
            <div className='flex items-center justify-start gap-3 pt-5'>
              <Link href={"https://www.facebook.com/share/15HwwHLjMV/"} target='_blank' className='socialSec hover:bg-rose-600 transition-all duration-500 h-9 w-9 bg-white rounded-full flex items-center justify-center hover:translate-y-[-5px] '>
              <FaFacebookF className='socialIcon transition-all duration-500 text-lg text-[#070B28]' />
              </Link >
              <Link href={"https://www.instagram.com/morpheous.esports/?igsh=M2oxeHhmdXh3ZHVx"} target='_blank' className='socialSec hover:bg-rose-600  transition-all duration-500 h-9 w-9 bg-white rounded-full flex items-center justify-center hover:translate-y-[-5px] '>
              <FaInstagram className='socialIcon transition-all duration-500 text-lg text-[#070B28] ' />
              </Link >
              <Link href={"https://youtube.com/@morpheous.esports?si=7WjITn4dHITQZQ67"} target='_blank' className='socialSec hover:bg-rose-600 transition-all duration-500 h-9 w-9 bg-white rounded-full flex items-center justify-center hover:translate-y-[-5px]'>
              <FaYoutube className='socialIcon transition-all duration-500 text-lg text-[#070B28]' />
              </Link >

            </div>
          </div>
          <div className='pl-6'>
            <h4 className='font-semibold text-[28px] uppercase text-white pb-5'>About</h4>
            <ul className='flex flex-col gap-3'>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Home </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Games </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Tournaments </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Contact Us </Link></li>
            </ul>
          </div>
          <div className=''>
            <h4 className='font-semibold text-[28px] uppercase text-white pb-5'>useful links</h4>
            <ul className='flex flex-col gap-3'>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Manage Account </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Buy Token </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Live Tournaments </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Contact Us </Link></li>
            </ul>
          </div>
          <div>
          <h4 className='font-semibold text-[28px] uppercase text-white pb-5'>Contact</h4>

          <ul className='flex flex-col gap-3'>
            <li ><Link href={"tel:8627819683"} className='flex items-center gap-4 hover:text-rose-600 transition-all duration-500 hover:translate-x-3'><FaPhoneAlt className=''/> 8627819683</Link> </li>
            <li ><Link href={"mailto:test@gmail.com"} className='flex items-center gap-4 hover:text-rose-600 transition-all duration-500 hover:translate-x-3'><FaEnvelope className=''/> morphious@gmail.com</Link> </li>
            <li ><Link href={"https://wa.me/8627819683"} className='flex items-center gap-3 hover:text-rose-600 transition-all duration-500 hover:translate-x-3'><FaWhatsapp className=' text-xl'/> 8627819683</Link> </li>
          </ul>

          </div>

        </div>

        </div>
        <div className='border-t-[1px] border-[#ffffff30] py-3 '>
          <div className="max-w-7xl mx-auto flex items-center">

          <div className="w-1/2">Copyright © 2024.All Rights Reserved By <span className='text-rose-600'>Morpheous</span></div>
          <div className="w-1/2">
          <ul className='flex items-center gap-2 justify-end'>
            <li><Link className='hover:text-rose-600 transition-all' href={""}>Term of Use</Link></li> |
            <li><Link className=' hover:text-rose-600 transition-all' href={""}>Privacy Policy</Link></li> |
            <li><Link className=' hover:text-rose-600 transition-all' href={""}>Help Center</Link></li>
          </ul>
          </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer
