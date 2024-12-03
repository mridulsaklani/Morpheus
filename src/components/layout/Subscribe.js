import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Subscribe = () => {
  return (
    <>
      <div className="py-10">
        <div className="subscribe max-w-7xl m-auto p-14">
          <div className="flex items-center flex-col justify-center gap-3 pb-10 ">
            <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
              subscribe to Morpheus
            </h4>
            <h2 className="text-white font-bold text-[40px] uppercase">
              To Get Exclusive Benefits
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <div className="w-1/5"></div>
            <div className="w-4/5">
            <form className="w-full flex gap-6" action="">
              <input className="w-[60%] bg-transparent border-b-2 border-white" type="email" placeholder="Your Email Address " />
              <button  type="submit" className="uppercase bg-rose-600 flex items-center py-3 text-white w-[40%] rounded-full justify-center relative">Subscribe <span className="bg-[#db5263] w-12 h-12 rounded-full   flex items-center justify-center self-end absolute right-0 top-0"><FaPaperPlane className=" text-lg  "/></span></button>
              </form></div>
           

          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
