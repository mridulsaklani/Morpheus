import React from 'react'
import Timer from './Timer'

const CountDown = () => {
  return (
    <>
    <div className='bg-[#0b122e]  py-24  '>

   
      <div className=" max-w-7xl mx-auto">
      <div className='max-w-7xl m-auto pb-24 flex items-center flex-col gap-4 justify-center'>
      
      <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
      Try to check out our
      </h4>
      <h2 className="text-white font-bold text-6xl uppercase">
      Join a tournament now
      </h2>
      <p className="text-2xl text-center w-2/3 font-light">
      Join the action! Register now to compete in live tournaments and showcase your skills!
      </p>


  </div>
  <div className="grid grid-cols-2 gap-5 items-center">
    <Timer header={'PixelArena'} para={'BGMI'} status={'upcoming'} link={'/'}/>
    <Timer header={'GameForge CLASH'} para={'FREE FIRE'} status={'upcoming'} link={'/'}/>
  </div>
      </div>
      </div>
    </>
  )
}

export default CountDown
