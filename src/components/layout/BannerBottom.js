"use client"
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { GiTargetPrize } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const BannerBottom = () => {

  const [day, setDay] = useState(0)
  const [hours, setHours] = useState(0);
  const [minuts, setMinuts] = useState(0)
  const [second, setSecond] = useState(0)
   const deadline = "December, 21, 2024"
  const getTime = ()=>{
      const time = Date.parse(deadline) - Date.now()
      setDay(Math.floor(time/(1000*60*60*24)))
      setHours(Math.floor(time/(1000*60*60)%24))
      setMinuts(Math.floor(time/1000/60)%60)
      setSecond(Math.floor(time/1000)%60)
  }

useEffect(()=>{
    const interval = setInterval(() => {
      getTime()
    }, 1000);
},[])
  return (
    <>
    <section className='feature-bg w-full'>
     
      <div className='max-w-7xl m-auto py-24 flex items-center flex-col gap-4 justify-center'>
      
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
      <div className='max-w-7xl m-auto'>

      
      <div className=' grid grid-cols-3 gap-6 items-center justify-center pb-20'>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex gap-6 justify-center items-center flex-col hover:translate-y-[-12px] transition-all cursor-pointer hover:border-rose-600 duration-500'>
          <Image
          className='w-full  rounded-lg'
           src={"/first-tour.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <div className="flex items-center gap-5 pb-5">
           <h3  className="flex flex-col justify-center items-center gap-2"> <span className="text-5xl font-semibold text-red-600">{day <=9 ? '0'+ day : day}</span> Days</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"><span className="text-5xl font-semibold text-red-600">{hours<=9 ? "0" + hours : hours}</span> Hours</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"><span className="text-5xl font-semibold text-red-600">{minuts<= 9 ? "0" + minuts : minuts}</span> Minutes</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"> <span className="text-5xl font-semibold text-red-600">{second <= 9 ?"0"+ second : second} </span>Seconds</h3>
          </div>
          <div className="flex items-center justify-between w-full ">
            <p className="text-[22px] font-medium text-white ">Prize Pool </p>
            <span className="text-[22px] font-medium text-red-600">4000₹</span>
          </div>
          <Link href={""} className=' rounded-full px-6 py-3 w-full text-center text-white font-semibold  bg-rose-600 transition-all'>JOIN NOW!</Link>

        </div>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex gap-6 justify-center items-center flex-col hover:translate-y-[-12px] transition-all cursor-pointer hover:border-rose-600 duration-500'>
          <Image
          className='w-full  rounded-lg'
           src={"/first-tour.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <div className="flex items-center gap-5 pb-5">
           <h3  className="flex flex-col justify-center items-center gap-2"> <span className="text-5xl font-semibold text-red-600">{day <=9 ? '0'+ day : day}</span> Days</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"><span className="text-5xl font-semibold text-red-600">{hours<=9 ? "0" + hours : hours}</span> Hours</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"><span className="text-5xl font-semibold text-red-600">{minuts<= 9 ? "0" + minuts : minuts}</span> Minutes</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"> <span className="text-5xl font-semibold text-red-600">{second <= 9 ?"0"+ second : second} </span>Seconds</h3>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-[22px] font-medium text-white ">Prize Pool </p>
            <span className="text-[22px] font-medium text-red-600">4000₹</span>
          </div>
          <Link href={""} className=' rounded-full px-6 py-3 w-full text-center text-white font-semibold  bg-rose-600 transition-all'>JOIN NOW!</Link>

        </div>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex gap-6 justify-center items-center flex-col hover:translate-y-[-12px] transition-all cursor-pointer hover:border-rose-600 duration-500'>
          <Image
          className='w-full  rounded-lg'
           src={"/first-tour.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <div className="flex items-center gap-5 pb-5">
           <h3  className="flex flex-col justify-center items-center gap-2"> <span className="text-5xl font-semibold text-red-600">{day <=9 ? '0'+ day : day}</span> Days</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"><span className="text-5xl font-semibold text-red-600">{hours<=9 ? "0" + hours : hours}</span> Hours</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"><span className="text-5xl font-semibold text-red-600">{minuts<= 9 ? "0" + minuts : minuts}</span> Minutes</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"> <span className="text-5xl font-semibold text-red-600">{second <= 9 ?"0"+ second : second} </span>Seconds</h3>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-[22px] font-medium text-white ">Prize Pool </p>
            <span className="text-[22px] font-medium text-red-600">4000₹</span>
          </div>
          <Link href={""} className=' rounded-full px-6 py-3 w-full text-center text-white font-semibold  bg-rose-600 transition-all'>JOIN NOW!</Link>

        </div>
        
        </div>
      </div>
      
      </section>
    </>
  )
}

export default BannerBottom
