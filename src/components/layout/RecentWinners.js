import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RecentWinners = ({pb,pt}) => {
  return (
    <>
      <div className={`max-w-7xl mx-auto pt-${pt} pb-${pb} px-5`}>
        <div className='flex flex-col gap-5 items-center justify-center pb-4'>
        <h4 className="text-xl lg:text-2xl text-rose-600 font-semibold uppercase " data-aos="fade-up" data-aos-duration="1000" >
        Try to Check out our
          </h4>
          <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl text-center uppercase" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Meet our recent winners
          </h2>
          <p className="text-xl lg:text-2xl font-light pb-6 text-center w-full sm:w-2/3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          the legends who rose to victory and claimed the spotlight!
          </p>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
          <div className='border-[#273b71] border-[1px]  rounded-lg p-8 hover:border-rose-600 transition-all duration-500 hover:translate-y-[-8px]' data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200" >
            <div className='flex justify-between items-center'>
              <h4 className='text-xl lg:text-2xl font-semibold text-white uppercase'>Nikhil Thakur</h4>
              <span className=' py-[7px] px-5 border-[#1a1e39] border-[1px] rounded-full bg-[#0d1535] text-sm '>b856sb840</span>

            </div>
            <div className='pb-5'>
              <p className='text-lg'>23.11.2024</p>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl text-[#DFA24B] '>BGMI</h3>
              <Image 
              src={"/icon2.png"}
              width={35}
              height={35}
              alt='icon'/>

            </div>

          </div>
          <div className='border-[#273b71] border-[1px]  rounded-lg p-8 hover:border-rose-600 transition-all duration-500 hover:translate-y-[-8px]'
          data-aos="flip-up" data-aos-duration="1000" data-aos-delay="500">
            <div className='flex justify-between items-center'>
              <h4 className='text-xl lg:text-2xl font-semibold text-white uppercase'>Nikhil Thakur</h4>
              <span className=' py-[7px] px-5 border-[#1a1e39] border-[1px] rounded-full bg-[#0d1535] text-sm '>b856sb840</span>

            </div>
            <div className='pb-5'>
              <p className='text-lg'>23.11.2024</p>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl text-[#DFA24B] '>BGMI</h3>
              <Image 
              src={"/icon2.png"}
              width={35}
              height={35}
              alt='icon'/>

            </div>

          </div>
          <div className='border-[#273b71] border-[1px]  rounded-lg p-8 hover:border-rose-600 transition-all duration-500 hover:translate-y-[-8px]'
          data-aos="flip-up" data-aos-duration="1000" data-aos-delay="800">
            <div className='flex justify-between items-center'>
              <h4 className='text-xl lg:text-2xl font-semibold text-white uppercase'>Nikhil Thakur</h4>
              <span className=' py-[7px] px-5 border-[#1a1e39] border-[1px] rounded-full bg-[#0d1535] text-sm '>b856sb840</span>

            </div>
            <div className='pb-5'>
              <p className='text-lg'>23.11.2024</p>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl text-[#DFA24B] '>BGMI</h3>
              <Image 
              src={"/icon2.png"}
              width={35}
              height={35}
              alt='icon'/>

            </div>

          </div>

        </div>
        <div className='flex items-center justify-center pt-14'>
          <Link className='uppercase text-white  bg-[#1C294E] px-14 py-[13px] rounded-full font-semibold hover:bg-rose-600 transition-all duration-500 hover:translate-y-[-8px]' href={""} data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="300">View All</Link>

        </div>

      </div>
    </>
  )
}

export default RecentWinners
