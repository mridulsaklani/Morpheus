import React from "react";
import Image from "next/image";
import Link from "next/link";

const LiveTournaments = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 w-full">
        <div className="w-full flex flex-col items-center justify-center gap-5 pb-10">
          <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
          Join the Live Tournament!
          </h4>
          <h2 className="text-white font-bold text-6xl uppercase">
          Join a tournament now
          </h2>
          <p className="text-2xl text-center w-2/3 font-light">
          Join the action! Register now to compete in live tournaments and showcase your skills!
          </p>
        </div>
        <div className=' grid grid-cols-3 gap-6 items-center justify-center pb-20'>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex gap-6 justify-center items-center flex-col hover:translate-y-[-12px] transition-all cursor-pointer hover:border-rose-600 duration-500'>
          <Image
          className='w-full  rounded-lg'
           src={"/BGMI.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <div className="flex items-center justify-between w-full">
            <p className="text-[22px] font-medium text-white ">Prize Pool </p>
            <span className="text-[22px] font-medium text-red-600">4000₹</span>
          </div>
          <Link href={""} className=' rounded-full px-6 py-3 w-full text-center text-white font-semibold  bg-rose-600 transition-all'>JOIN NOW!</Link>

        </div>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex gap-6 justify-center items-center flex-col hover:translate-y-[-12px] transition-all cursor-pointer hover:border-rose-600 duration-500'>
          <Image
          className='w-full  rounded-lg'
           src={"/BGMI.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <div className="flex items-center justify-between w-full">
            <p className="text-[22px] font-medium text-white ">Prize Pool </p>
            <span className="text-[22px] font-medium text-red-600">4000₹</span>
          </div>
          <Link href={""} className=' rounded-full px-6 py-3 w-full text-center text-white font-semibold  bg-rose-600 transition-all'>JOIN NOW!</Link>

        </div>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex gap-6 justify-center items-center flex-col hover:translate-y-[-12px] transition-all cursor-pointer hover:border-rose-600 duration-500'>
          <Image
          className='w-full  rounded-lg'
           src={"/BGMI.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <div className="flex items-center justify-between w-full">
            <p className="text-[22px] font-medium text-white ">Prize Pool </p>
            <span className="text-[22px] font-medium text-red-600">4000₹</span>
          </div>
          <Link href={""} className=' rounded-full px-6 py-3 w-full text-center text-white font-semibold  bg-rose-600 transition-all'>JOIN NOW!</Link>

        </div>
        

      </div>
      </div>
    </>
  );
};

export default LiveTournaments;
