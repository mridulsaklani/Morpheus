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
      
      question: "What is Morpheous Gaming?",
      answer: "Morpheous Gaming is a dynamic platform for Indian players to compete in survival game tournaments like PUBG and Free Fire. With a token-based entry system, thrilling prizes, and monthly rewards, it’s your ultimate destination for intense battles and epic victories. We also feature a Top Player Leaderboard every month, showcasing the best performers across tournaments. Earn recognition, dominate the rankings, and prove you are the best"
    },
    {
      question: "Why Choose Morpheous Gaming?",
      answer: `At Morpheous Gaming, we believe in more than just competition we believe in building connections, spreading positivity, and creating a community where every player feels valued. Our mission is to unite gamers, foster camaraderie, and celebrate every victory while supporting one another through challenges. We are not just about tournaments; we are about providing endless opportunities for players to compete and unlock their potential on global stages.

Beyond prizes, Morpheous Gaming is about forming real connections and lasting friendships with like-minded players who share a passion for gaming. As we grow, we aim to elevate our community, helping players shine on larger platforms and be part of something extraordinary. Whether you are a beginner or a pro, we welcome you to join our journey. At Morpheous Gaming, it is not just about playing  it is about playing with heart.`
    },
    {
      question: "How to Join a Tournament on Morpheous Gaming?",
      answer: [
        "Sign Up / Log In: Create an account on the Morpheous Gaming platform or log in if you already have one.",
        "Browse Upcoming Tournaments: Visit the tournament section and browse the list of upcoming tournaments, including details like entry fees, prizes, and dates.",
        "Select a Tournament: Choose the tournament you wish to join. Make sure to read the tournament details, including the rules and regulations.",
        "Purchase Tokens: Use your account to purchase the required tokens. Tokens are used to buy tournament tickets and enter the competition.",
        "Register Your Team: If it's a squad tournament, register your team by providing the required details. You can also join as an individual if the tournament allows it.",
        "Confirm Your Entry: After completing the registration and token payment, your entry will be confirmed. You’ll receive a notification with your tournament details.",
        "Prepare for Battle!: Once your entry is confirmed, get ready to compete! Log in at the tournament’s start time, and join the action.",
      ],
    },
    {
      question: "How can we help you with your tournament experience?",
      answer: "Let us know if you need assistance with registration, rules, or any other aspect of the tournament."
    },
    {
      question: "Do you need support with purchasing tokens or tickets?",
      answer: "If you're facing any issues with token or ticket purchases, we're here to guide you through the process."
    },
    {
      question: "Do you need any support?",
      answer: "If you need assistance, whether it's with tournament registration, technical issues, payment problems, or anything else, we're here to help! Simply let us know your concern, and our support team will get back to you as soon as possible to ensure you have the best experience on Morpheous Gaming. "
    },
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
                {show === i && (
                <div className="pb-8 pr-8 pl-8 pt-4">
                  {Array.isArray(e.answer) ? (
                    <ul className="list-disc pl-6 text-white text-lg">
                      {e.answer.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white text-lg">{e.answer}</p>
                  )}
                </div>
              )}
              </div>
            ))}
        </div>
        <div className="border-[1px]"></div>
      </div>
    </>
  );
};

export default FAQ;
