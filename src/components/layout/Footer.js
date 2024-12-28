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
      <div className='footer px-5'>
        <div className='max-w-7xl m-auto py-20'> 
        <div className="subscribe  p-14">
          <div className="flex items-center flex-col justify-center gap-3 pb-10 ">
            <h4 className="text-xl lg:text-2xl text-rose-600 font-semibold uppercase ">
              subscribe to Morpheus
            </h4>
            <h2 className="text-white font-bold text-4xl lg:text-[40px] uppercase text-center">
              To Get Exclusive Benefits
            </h2>
          </div>
          <div className="flex items-center justify-center gap-5 ">
            <div className="w-1/5 flex justify-end items-center">
             <Image
             className=''
             src={'/mail-box.png'}
             width={100}
             height={100}
             alt="mail-box"
             />
            </div>
            <div className="w-4/5">
            <form className="w-full flex gap-6" action="">
              <input className="w-[65%] bg-transparent border-b-2 outline-none border-white" type="email" placeholder="Your Email Address " />
              <button  type="submit" className="uppercase bg-rose-600 flex items-center py-3 text-white w-[35%] rounded-full justify-center relative">Subscribe <span className="bg-[#db5263] w-12 h-12 rounded-full   flex items-center justify-center self-end absolute right-0 top-0"><FaPaperPlane className=" text-lg  "/></span></button>
              </form></div>
           

          </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 justify-start pt-16'>
          <div> 
            <Image
            src={"/Nikhil-icon.png"}
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
          <div className='pl-0 md:pl-6'>
            <h4 className='font-semibold text-[28px] uppercase text-white pb-5'>About</h4>
            <ul className='flex flex-col gap-3'>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={"/"}> <FaAngleDoubleRight /> Home </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={"/events"}> <FaAngleDoubleRight /> Events </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={"/tournament"}> <FaAngleDoubleRight /> Tournaments </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Profile </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={"/contact"}> <FaAngleDoubleRight /> Contact Us </Link></li>
            </ul>
          </div>
          <div className=''>
            <h4 className='font-semibold text-[28px] uppercase text-white pb-5'>useful links</h4>
            <ul className='flex flex-col gap-3'>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Manage Account </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Buy Token </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Live Tournaments </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={"/refund"}> <FaAngleDoubleRight /> Refund Policy </Link></li>
              <li><Link className=' capitalize text-lg flex items-center  gap-2 hover:text-rose-600 transition-all duration-500 hover:translate-x-3' href={""}> <FaAngleDoubleRight /> Contact Us </Link></li>
            </ul>
          </div>
          <div>
          <h4 className='font-semibold text-[28px] uppercase text-white pb-5'>Contact</h4>

          <ul className='flex flex-col gap-3'>
            <li ><Link href={"tel:8627819683"} className='flex items-center gap-4 hover:text-rose-600 transition-all duration-500 hover:translate-x-3'><FaPhoneAlt className=''/> 8627819683</Link> </li>
            <li ><Link href={"mailto:info@morpheousgaming.com"} className='flex items-center gap-4 hover:text-rose-600 transition-all duration-500 hover:translate-x-3'><FaEnvelope className=''/> info@morpheousgaming.com</Link> </li>
            <li ><Link href={"https://wa.me/8627819683"} className='flex items-center gap-3 hover:text-rose-600 transition-all duration-500 hover:translate-x-3'><FaWhatsapp className=' text-xl'/> 8627819683</Link> </li>
          </ul>

          </div>

        </div>

        </div>
        <div className='border-t-[1px] border-[#ffffff30] py-3 '>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center">

          <div className="w-full md:w-[65%] text-center md:text-start ">Copyright © 2024. All Rights Reserved |<span className=''> Developed by <Link className='text-rose-600' href={"https://mridulsinghsaklani.com"} target='_blank'>mridulsinghsaklani.com</Link></span></div>
          <div className="w-full md:w-[35%]">
          <ul className='flex items-center gap-2 justify-center md:justify-end'>
            <li><Link className='hover:text-rose-600 transition-all' href={"/conditions"}>Term of Use</Link></li> |
            <li><Link className=' hover:text-rose-600 transition-all' href={'/privacy'}>Privacy Policy</Link></li> 
            
          </ul>
          </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer
