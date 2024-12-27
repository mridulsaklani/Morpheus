"use client"
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Timer = ({header,para,status,link}) => {

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
    <div className='tournament-box rounded-lg'>
        <div className='p-6 bg-[#0b122e] border-t-[1px] border-b-[1px] border-[#ffffff1a] flex flex-col text-center gap-2 shadow-[0_0_12px_#00000050] relative overflow-hidden'>
            <span className='statusbar absolute bg-[#3C26DB] text-white w-52 top-6 py-2 left-[-48px] uppercase tracking-wider'>{status}</span>
           <h3 className='text-white font-bold  uppercase text-[34px] tracking-[1px]'>{header}</h3>
           <p className='uppercase text-rose-600 text-xl'>{para}</p>

        </div>
        <div className='w-full bg-[#070B28] p-8 '>
           <Image
           className='tourImg w-full h-96 object-cover object-center mb-8 border-b-[6px]  transition-all duration-500 border-rose-600'
           src={'/first-tour.jpg'}
           width={300}
           height={300}
           alt='poster'
           />
           <div className='flex justify-center items-center flex-col gap-4 mb-6'>
            <h3 className='text-2xl font-bold text-white uppercase pb-2'>Start In</h3>
            <div className="flex items-center gap-5 pb-5">
           <h3  className="flex flex-col justify-center items-center gap-2"> <span className="text-5xl font-semibold text-white">{day <=9 ? '0'+ day : day}</span> Days</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"><span className="text-5xl font-semibold text-white">{hours<=9 ? "0" + hours : hours}</span> Hours</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"><span className="text-5xl font-semibold text-white">{minuts<= 9 ? "0" + minuts : minuts}</span> Minutes</h3>
           <h3 className="flex flex-col justify-center items-center gap-2"> <span className="text-5xl font-semibold text-white">{second <= 9 ?"0"+ second : second} </span>Seconds</h3>
          </div>
           </div>
           <Link href={link} className='bg-rose-600 py-3 w-full rounded-full text-white inline-block text-center uppercase text-lg'> Register Now</Link>
        </div>
      
    </div>
  )
}

export default Timer
