import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { GiTargetPrize } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const BannerBottom = () => {
  return (
    <>
    <section className='feature-bg w-full'>
      {/* <div className=' feature max-w-7xl m-auto grid grid-cols-3 gap-8'>

        <div className='flex flex-col gap-10 justify-center items-center bg-[#252f5a] p-12 rounded-xl'> 

          <div className="bb-icon relative h-32 w-32 flex items-center  justify-center">
           <Image
           src={"/icon1.png"}
           width={50}
           height={50}
           alt='ion'
           />
          </div>
          <div className='flex justify-center items-center gap-4 flex-col'>
            <h3 className='uppercase text-2xl font-semibold text-white'>Exclusive Offer</h3>
            <Link href={"/" } className='uppercase font-semibold text-center flex items-center gap-3'>Learn More <FaArrowRightLong /></Link>
          </div>
        </div>
        <div className='flex flex-col gap-10 justify-center items-center bg-[#252f5a] p-12 rounded-xl'> 

          <div className="bb-icon relative h-32 w-32 flex items-center  justify-center yellow-bor">
          <GiTargetPrize className='text-[#f67a1f] text-5xl' />
          </div>
          <div className='flex justify-center items-center gap-4 flex-col'>
            <h3 className='uppercase text-2xl font-semibold text-white'>Our Amazing Prizes</h3>
            <Link href={"/" } className='uppercase font-semibold text-center flex items-center gap-3'>Learn More <FaArrowRightLong /></Link>
          </div>
        </div>
        <div className='flex flex-col gap-10 justify-center items-center bg-[#252f5a] p-12 rounded-xl'> 

          <div className="bb-icon relative h-32 w-32 flex items-center  justify-center purple-bor">
          <BiSupport className='text-5xl text-[#bc2cdd]'/>
          </div>
          <div className='flex justify-center items-center gap-4 flex-col'>
            <h3 className='uppercase text-2xl font-semibold text-white'>24/7 Support</h3>
            <Link href={"/" } className='uppercase font-semibold text-center flex items-center gap-3'>Learn More <FaArrowRightLong /></Link>
          </div>
        </div>
        
      </div> */}
      <div className='max-w-7xl m-auto py-24 flex items-center flex-col gap-4 justify-center'>
      <h4 className="text-2xl text-rose-600 font-semibold uppercase">
      Try to check out our
          </h4>
          <h2 className='text-white font-bold text-6xl uppercase'>Upcoming tournaments</h2>
          <p className='text-2xl text-center w-2/3'>Stay ahead of the competition! Explore upcoming tournaments, register now, showcase your skills, and claim ultimate victory!</p>


      </div>
      </section>
    </>
  )
}

export default BannerBottom
