"use client"
import React from 'react'
import CountUp from 'react-countup'
import Image from 'next/image'

const Counter = () => {
  return (
    <>
      <div className='counter py-20 relative'>
        <div className='counter-overlay absolute top-0 left-0 h-full w-full'></div>
        <div className="max-w-7xl m-auto grid grid-cols-3 relative  z-10">
            <div className=' flex flex-col items-center justify-center gap-8'>
                <Image
                src={"/countericon1.png"}
                width={150}
                height={150}
                alt='icon'
                quality={100}
                />
                <div className=''>
                <p className='text-white text-5xl font-bold pb-3'>
                <CountUp
                start={0}
                end={10}/>k</p>
                <p className='text-2xl'>Players</p>
                </div>

            </div>
            <div className=' flex flex-col items-center justify-center gap-8'>
                <Image
                src={"/countericon2.png"}
                width={150}
                height={150}
                alt='icon'
                quality={100}
                />
                <div>
                <p className='text-white text-5xl font-bold pb-3'>
                <CountUp
                start={0}
                end={99}/>+</p>
                <p className='text-2xl'>Games</p>
                </div>

            </div>
            <div className=' flex flex-col items-center justify-center gap-8'>
                <Image
                src={"/countericon3.png"}
                width={150}
                height={150}
                alt='icon'
                quality={100}
                />
                <div>
                <p className='text-white text-5xl font-bold pb-3'>
                <CountUp
                start={0}
                end={150}/>+</p>
                <p className='text-2xl'>Winners</p>
                </div>

            </div>


        </div>

      </div>
    </>
  )
}

export default Counter
