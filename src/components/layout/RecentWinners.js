import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RecentWinners = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto py-20 pb-52'>
        <div className='flex flex-col gap-5 items-center justify-center'>
        <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
        Try to Check out our
          </h4>
          <h2 className="text-white font-bold text-6xl uppercase">
          Recent Winners
          </h2>
          <p className="text-2xl  font-light pb-6 text-center w-2/3">
          We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
          </p>

        </div>
        <div className='grid grid-cols-3 gap-6 '>
          <div className='border-[#273b71] border-[1px]  rounded-lg p-8 hover:border-rose-600 transition-all duration-500 hover:translate-y-[-8px]'>
            <div className='flex justify-between items-center'>
              <h4 className='text-2xl font-semibold text-white uppercase'>Nikhil Thakur</h4>
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
          <div className='border-[#273b71] border-[1px]  rounded-lg p-8 hover:border-rose-600 transition-all duration-500 hover:translate-y-[-8px]'>
            <div className='flex justify-between items-center'>
              <h4 className='text-2xl font-semibold text-white uppercase'>Nikhil Thakur</h4>
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
          <div className='border-[#273b71] border-[1px]  rounded-lg p-8 hover:border-rose-600 transition-all duration-500 hover:translate-y-[-8px]'>
            <div className='flex justify-between items-center'>
              <h4 className='text-2xl font-semibold text-white uppercase'>Nikhil Thakur</h4>
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
          <Link className='uppercase text-white  bg-[#1C294E] px-14 py-[13px] rounded-full font-semibold hover:bg-rose-600 transition-all duration-500 hover:translate-y-[-8px]' href={""}>View All</Link>

        </div>

      </div>
    </>
  )
}

export default RecentWinners
