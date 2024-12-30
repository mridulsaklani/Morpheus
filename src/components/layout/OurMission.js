import React from 'react'
import { IoGameController } from "react-icons/io5";

const OurMission = () => {
  return (
    <>
      <div className='mission py-20 '>
        <div className="max-w-7xl mx-auto">
        <div className='flex flex-col gap-5 items-center justify-center mb-20'>
        <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
        take a look
          </h4>
          <h2 className="text-white font-bold text-6xl uppercase">
          Our Mission
          </h2>
          <p className="text-2xl  font-light pb-6 text-center w-3/4">
          Our mission is to empower gamers by providing opportunities to compete, connect, and grow.
We aim to create a dynamic ecosystem where players can rise to prominence, earn recognition,
and take their gaming journey to new heights.
          </p>

        </div>
        <div className="grid grid-cols-3 gap-6 items-center">
            <div className='mission-box flex flex-col items-center justify-center gap-5 tracking-wider hover:translate-y-[-16px] transition-all duration-500'> 
                <span className='pink-icon h-16 w-16 rounded-full text-white flex items-center justify-center '><IoGameController className='text-3xl'/></span>
                <h3 className='text-white text-2xl font-bold uppercase pt-6'>Unite Player</h3>
                <p className='text-xl font-light text-center'>
                Unite players as a family and foster talent through exciting tournaments.  
                </p>
                

            </div>
            <div className=' mission-box flex flex-col items-center justify-center gap-5 tracking-wider hover:translate-y-[-16px] transition-all duration-500'> 
                <span className='yellow-icon h-16 w-16 rounded-full text-white flex items-center justify-center '><IoGameController className='text-3xl'/></span>
                <h3 className='text-white text-2xl font-bold uppercase pt-6'>Fair Platform</h3>
                <p className='text-xl font-light text-center'>
                Provide a fair platform with opportunities to excel on bigger stages. 
                </p>
                

            </div>
            <div className='mission-box flex flex-col items-center justify-center gap-5 tracking-wider hover:translate-y-[-16px] transition-all duration-500'> 
                <span className='purple-icon h-16 w-16 rounded-full text-white flex items-center justify-center '><IoGameController className='text-3xl'/></span>
                <h3 className='text-white text-2xl font-bold uppercase pt-6'>India’s Finest</h3>
                <p className='text-xl font-light text-center'>
                Build India’s finest and most supportive esports community.
                </p>
                

            </div>

        </div>

        </div>

      </div>
    </>
  )
}

export default OurMission
