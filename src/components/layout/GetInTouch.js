"use client"
import React,{useEffect,useState} from 'react'
import Image from 'next/image'

const GetInTouch = () => {

   const [inTouchForm, setinTouchForm] = useState({
    name:"",
    email:"",
    number:"",
    message:""
   });

   const handleChange = (e)=>{
    let {name, value} = e.target
    setinTouchForm({[name]:value})
   }

   const handleSubmit = (e) =>{
    e.preventDefault();


    setinTouchForm({
        name:"",
        email:"",
        number:"",
        message:""
    })
   }


  return (
    <>
    <div className='bg-[#0B122E]'>
      <div className='max-w-7xl mx-auto py-20'>
      <div className='flex flex-col gap-5 items-center justify-center mb-12'>
        <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
        Contact Us
          </h4>
          <h2 className="text-white font-bold text-6xl uppercase">
          Get in Touch
          </h2>
          <p className="text-2xl  font-light pb-6 text-center w-2/3">
          Feel free to reach out for questions, collaborations, feedback, or simply to connect. I’d love to hear from you!
          </p>

        </div>
        <div className='flex items-center gap-8'>
            <div className="w-1/2">
             <Image
             src={"/contact-left.png"}
             width={400}
             height={400}
             alt='nothing'
             />
            </div>
            <div className="w-1/2">
            
            <div className='bg-[#19254d] p-8 contact-box relative'>
                <h2 className='text-[26px] font-semibold text-white pb-4'>Send us a message</h2>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <div className='flex items-center gap-8'>
                        <input className='w-1/2 outline-none border-b-[1px] border-[#a1aed4] p-3 bg-transparent' value={inTouchForm.name} type="text" name='name' onChange={handleChange} placeholder='Enter your name' />
                        <input className='w-1/2 outline-none border-b-[1px] border-[#a1aed4] p-3 bg-transparent' value={inTouchForm.email} type="email" name='email' onChange={handleChange} placeholder='Enter your email' />
                        
                    </div>
                    <input className='w-full outline-none border-b-[1px] border-[#a1aed4] p-3 bg-transparent' value={inTouchForm.number} type="number" name='number' onChange={handleChange} placeholder='Enter your number'/>
                    <textarea className='w-full outline-none border-b-[1px] border-[#a1aed4] p-3 bg-transparent' value={inTouchForm.message} name="message " id="message" onChange={handleChange} rows={5} placeholder='Message'></textarea>
                    <button disabled={inTouchForm.name ==="" || inTouchForm.email ==="" || inTouchForm.number ==="" || inTouchForm.message ===""} className='bg-rose-600 w-full py-3 uppercase rounded-full text-white border-2 border-rose-600 hover:bg-white hover:text-rose-600 transition-all hover:font-medium disabled:bg-red-400' type="submit">Submit</button>
                </form>
            </div>
            
            </div>

        </div>

      </div>
      </div>
    </>
  )
}

export default GetInTouch
