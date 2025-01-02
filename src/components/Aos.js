"use client"
import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Aoss = () => {

    useEffect(()=>{
        Aos.init({
            duration: 1000,
            delay: 100
        })
    },[])
    
  return (
    <>
      
    </>
  )
}

export default Aoss
