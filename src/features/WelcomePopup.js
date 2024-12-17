"use client"
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { FaXmark } from "react-icons/fa6";
import Link from 'next/link';

const WelcomePopup = () => {
     

    const [show, setShow] = useState(true)
    useEffect(() => {
        
    }, [])
  return (
    <>

      {show && <div className="blury fixed z-30 backdrop-blur-xl top-0 left-0  w-full h-full "></div>}
     {show && <div className=' welcome-popup fixed flex justify-center items-center gap-6 flex-col z-40 w-96 rounded-lg p-8 bg-[#070B28] border-[1px] border-[#ffffff30]'>

        <button type='button ' className='welcome-cross absolute right-10 top-0 bg-rose-600  text-white h-11 w-11 flex items-center justify-center rounded-full' onClick={()=>setShow(false)}> <FaXmark className='text-xl'/> </button>
        <Image
        className='w-full object-cover object-center rounded-lg'
        src={'/tournament.jpg'}
        height={400}
        width={400}
        alt='tournament'
        />
        
        <Link href={''} className='welcome-btn bg-[#1C294E] hover:bg-rose-600 transition-all duration-300 uppercase px-8 py-3 text-white rounded-full mb-[-20px]'> Register Now </Link>
       
      </div>}
    </>
  )
}

export default WelcomePopup
