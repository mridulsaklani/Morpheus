"use client"
import React ,{useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

const LiveTournaments = () => {
  const [day, setDay] = useState(0)
  const [hours, setHours] = useState(0);
  const [minuts, setMinuts] = useState(0)
  const [second, setSecond] = useState(0)
   const deadline = "December, 31, 2024"
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
      <div className="max-w-7xl mx-auto py-20 w-full px-5">
        <div className="w-full flex flex-col items-center justify-center gap-5 pb-10">
        <h4 className="text-xl lg:text-2xl text-rose-600 font-semibold uppercase">
      Try to check out our
          </h4>
          <h2 className='text-white font-bold text-4xl sm:text-5xl lg:text-6xl text-center uppercase'>Upcoming tournaments</h2>
          <p className='text-xl lg:text-2xl text-center w-full sm:w-2/3'>Stay ahead of the competition! Explore upcoming tournaments, register now, showcase your skills, and claim ultimate victory!</p>

          
        </div>
        <div className=' max-w-7xl m-auto grid gap-y-12 lg:gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center pb-20'>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex justify-center items-center flex-col hover:translate-y-[-12px] transition-all  hover:border-rose-600 duration-500'>
          <Image
          className='w-full pb-10 rounded-lg'
           src={"/BGMI.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <div className="flex  gap-5 pb-8 w-full justify-between items-center">
           <h3  className="flex text-white justify-center  gap-2 text-xl tracking-[1px] font-medium "> <span className="scale font-semibold text-red-600">{day <=9 ? '0'+ day : day}</span>Days Left</h3>

           <span className="text-lg text-white font-medium">06.01.2025</span>
          
          </div>
          <Link href={""} className='tournament-btn rounded-full px-6 py-3 bg-[#1C294E] text-white font-semibold hover:bg-rose-600 transition-all'>REGISTER NOW!</Link>

        </div>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex justify-center items-center flex-col hover:translate-y-[-12px] transition-all  hover:border-rose-600 duration-500'>
          <Image
          className='w-full pb-10 rounded-lg'
           src={"/BGMI.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
           <div className="flex  gap-5 pb-8 w-full justify-between items-center">
           <h3  className="flex text-white justify-center  gap-2 text-xl tracking-[1px] font-medium "> <span className="scale font-semibold text-red-600">{day <=9 ? '0'+ day : day}</span>Days Left</h3>

           <span className="text-lg text-white font-medium">06.01.2025</span>
          
          </div>
          <Link href={""} className='tournament-btn rounded-full px-6 py-3 bg-[#1C294E] text-white font-semibold hover:bg-rose-600 transition-all'>REGISTER NOW!</Link>

        </div>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex justify-center items-center flex-col hover:translate-y-[-12px] transition-all  hover:border-rose-600  duration-500'>
          <Image
          className='w-full pb-10 rounded-lg'
           src={"/BGMI.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <div className="flex  gap-5 pb-8 w-full justify-between items-center">
           <h3  className="flex text-white  justify-center  gap-2 text-xl tracking-[1px] font-medium "> <span className="scale font-semibold text-red-600">{day <=9 ? '0'+ day : day}</span>Days Left</h3>

           <span className="text-lg font-medium text-white">06.01.2025</span>
          
          </div>
          <Link href={""} className='tournament-btn rounded-full px-6 py-3 bg-[#1C294E] text-white font-semibold hover:bg-rose-600 transition-all'>REGISTER NOW!</Link>

        </div>

      </div>
      </div>
      {/* <section className='feature-bg w-full'>
     
      <div className='max-w-7xl m-auto py-24 flex items-center flex-col gap-4 justify-center'>
      <h4 className="text-2xl text-rose-600 font-semibold uppercase">
      Try to check out our
          </h4>
          <h2 className='text-white font-bold text-6xl uppercase'>Upcoming tournaments</h2>
          <p className='text-2xl text-center w-2/3'>Stay ahead of the competition! Explore upcoming tournaments, register now, showcase your skills, and claim ultimate victory!</p>


      </div>
      <div className=' max-w-7xl m-auto grid grid-cols-3 gap-6 items-center justify-center pb-20'>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex justify-center items-center flex-col hover:translate-y-[-12px] transition-all  hover:border-rose-600 duration-500'>
          <Image
          className='w-full pb-10 rounded-lg'
           src={"/BGMI.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <Link href={""} className='tournament-btn rounded-full px-6 py-3 bg-[#1C294E] text-white font-semibold hover:bg-rose-600 transition-all'>REGISTER NOW!</Link>

        </div>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex justify-center items-center flex-col hover:translate-y-[-12px] transition-all  hover:border-rose-600 duration-500'>
          <Image
          className='w-full pb-10 rounded-lg'
           src={"/BGMI.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <Link href={""} className='tournament-btn rounded-full px-6 py-3 bg-[#1C294E] text-white font-semibold hover:bg-rose-600 transition-all'>REGISTER NOW!</Link>

        </div>
        <div className='border-[1px] border-[#273b71] p-8 rounded-xl relative flex justify-center items-center flex-col hover:translate-y-[-12px] transition-all  hover:border-rose-600  duration-500'>
          <Image
          className='w-full pb-10 rounded-lg'
           src={"/BGMI.jpg"} 
           width={200}
           height={200}
           alt='bgmi'
           quality={100}
          />
          <Link href={""} className='tournament-btn rounded-full px-6 py-3 bg-[#1C294E] text-white font-semibold hover:bg-rose-600 transition-all'>REGISTER NOW!</Link>

        </div>

      </div>
      </section> */}
    </>
  );
};

export default LiveTournaments;
