"use client"
import React, {useState , useEffect}  from "react";
import { FaQuestion } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const FAQ = () => {
    
   const [show, setshow] = useState(1)

    const setActive = (i)=>{
      setshow(i === show ? null : i)
         }
   
   
  

  const faqs = [
    {
      
      question: "What is Morpheous?",
      answer: "Morpheous is a platform designed to host and manage gaming tournaments effortlessly. Whether you're a player or an organizer, it provides all the tools you need for competitive gaming."
    },
    {
      question: "How do I join a tournament?",
      answer: "To join a tournament, simply sign up or log in to your account, browse the available tournaments, and click on the 'Join' button for the tournament you wish to participate in."
    },
    {
      question: "Can I create my own tournaments?",
      answer: "Yes! Morpheous allows users to create and manage their own tournaments. You can customize rules, schedules, and team sizes as per your requirements."
    },
    {
      question: "Is Morpheous free to use?",
      answer: "Morpheous offers both free and premium features. You can access basic tournament features for free, while premium plans unlock advanced tools and analytics."
    },
    {
      question: "What games are supported on Morpheous?",
      answer: "Morpheous supports a wide range of popular games. Check out our list of supported games on the platform to see if your favorite game is included!"
    }
  ];
  
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 pb-48">
        <div className="flex flex-col gap-5 items-center justify-center mb-12">
          <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
            Got any Question
          </h4>
          <h2 className="text-white font-bold text-6xl uppercase">
            We have answers
          </h2>
          <p className="text-2xl  font-light pb-6 text-center w-2/3">
            Feel free to reach out for questions, collaborations, feedback, or
            simply to connect. I do love to hear from you!
          </p>
        </div>
        <div className="faq">
            {faqs.map((e,i)=>(
              <div key={i} className="w-full mb-4 bg-[#1C294E] rounded-3xl ">
                <div className="p-3 bg-[#1C294E] rounded-full flex  justify-between shadow-[0_10px_10px_#00000040]" onClick={()=>setActive(i)}>
                  <div className="flex items-center gap-4" >
                    <div className="h-9 w-9 bg-[#31B3F6] rounded-full flex items-center justify-center"><FaQuestion className="text-lg text-white"/></div>
                    <h3 className="text-xl text-white font-medium" >{e.question}</h3>
                    </div>
                    <div className="flex h-9 w-9 justify-center items-center">
                    <FaAngleDown className="text-lg text-white"/>
                    </div>
                </div>
                {show === i && <div className=" pb-8 pr-8 pl-8 pt-4">
                 <p className="text-white text-lg">{e.answer}</p>
                </div>}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
