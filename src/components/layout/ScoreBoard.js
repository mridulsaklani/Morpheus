"use client";
import React, { useState } from "react";
import Image from "next/image";

const ScoreBoard = () => {
  const [HeaderShow, setHeaderShow] = useState(1)
  return (
    <>
    <div className="py-20 relative">
      <Image
      className="shape1 absolute top-0 left-0 w-full h-full"
      src={"/shape1.png"}
      width={900}
      height={900}
      alt="shape1"/>
      <Image
      className="shape2 absolute top-0 left-0 w-full h-full"
      src={"/shape2.png"}
      width={900}
      height={900}
      alt="shape1"/>
      <Image
      className="shape3 absolute top-0 left-0 w-full h-full"
      src={"/shape3.png"}
      width={900}
      height={900}
      alt="shape1"/>
      <div className="max-w-7xl mx-auto ">
        <div className="w-full flex flex-col items-center justify-center gap-5 pb-10">
          <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
            Conquer the Scoreboard
          </h4>
          <h2 className="text-white font-bold text-6xl uppercase">
            Ruler of the Scoreboard
          </h2>
          <p className="text-2xl text-center w-2/3 font-light">
            Celebrate excellence! Meet the top scorer who dominated the
            tournament with unmatched skill and determination.
          </p>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-10">
          <ul className="flex items-center justify-center gap-6 p-5 border-[1px] border-[#ffffff33] rounded-full w-[580px]">
            <li
              className={`${HeaderShow === 1 ? "bg-rose-600" : "bg-[#252F5A]"} px-12 py-3 rounded-full  text-xl text-white w-48 text-center cursor-pointer`}
            onClick={()=>setHeaderShow(1)}>
              BGMI
            </li>
            <li
              className={`${HeaderShow === 2 ? "bg-rose-600" : "bg-[#252F5A]"}  px-12 py-3 rounded-full  text-xl text-white w-48 text-center cursor-pointer`}
            onClick={()=>setHeaderShow(2)}>
              FREEFIRE
            </li>
            <li
              className={` ${HeaderShow === 3 ? "bg-rose-600" : "bg-[#252F5A]"} px-12 py-3 rounded-full  text-xl text-white w-48 text-center cursor-pointer`}
            onClick={()=>setHeaderShow(3)}>
              COC
            </li>
          </ul>

          {HeaderShow === 1 &&<table className=" table-1 min-w-full table-auto border-collapse border-[1px] border-[#ffffff17] text-sm shadow-xl">
            <thead>
              <tr className="bg-[#0B122E] text-white">
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  USER
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  USER ID
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  RANK
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  GAME
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  PRIZE
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className={`bg-transparent`}>
                  <td className="px-4 py-4 border-b-[1px] border-[#ffffff17] flex items-center space-x-3 font text-lg font-medium">
                    <img
                      src={`/user.png`}
                      alt="User"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>MRIDUL SAKLANI</span>
                  </td>
                  <td className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-lg font-medium">
                    b799b8724b
                  </td>
                  <td className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-lg font-medium text-[#045CF0]">
                    #{index + 1}
                  </td>
                  <td className="px-4 py-4 border-b-[1px] text-[#F0AD4E] border-[#ffffff17] text-lg font-medium">
                    BGMI
                  </td>
                  <td className="px-4 py-4 border-b-[1px] text-[#F0AD4E] border-[#ffffff17] flex items-center space-x-1 text-lg font-semibold">
                    <span>4000Rs</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
          {HeaderShow === 2 && <table className=" table-2 min-w-full table-auto border-collapse border-[1px] border-[#ffffff17] text-sm  shadow-xl ">
            <thead>
              <tr className="bg-[#0B122E] text-white">
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  USER
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  USER ID
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  RANK
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  GAME
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  PRIZE
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className={`bg-transparent`}>
                  <td className="px-4 py-4 border-b-[1px] border-[#ffffff17] flex items-center space-x-3 font text-lg font-medium">
                    <img
                      src={`/user.png`}
                      alt="User"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>MRIDUL SAKLANI</span>
                  </td>
                  <td className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-lg font-medium">
                    b799b8724b
                  </td>
                  <td className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-lg font-medium text-[#045CF0]">
                    #{index + 1}
                  </td>
                  <td className="px-4 py-4 border-b-[1px] text-[#F0AD4E] border-[#ffffff17] text-lg font-medium uppercase">
                    FreeFire
                  </td>
                  <td className="px-4 py-4 border-b-[1px] text-[#F0AD4E] border-[#ffffff17] flex items-center space-x-1 text-lg font-semibold">
                    <span>4000Rs</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
          {HeaderShow === 3 && <table className=" table-3 min-w-full table-auto border-collapse border-[1px] border-[#ffffff17] text-sm shadow-xl ">
            <thead>
              <tr className="bg-[#0B122E] text-white">
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  USER
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  USER ID
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  RANK
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  GAME
                </th>
                <th className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-left text-xl font-medium">
                  PRIZE
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className={`bg-transparent`}>
                  <td className="px-4 py-4 border-b-[1px] border-[#ffffff17] flex items-center space-x-3 font text-lg font-medium">
                    <img
                      src={`/user.png`}
                      alt="User"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>MRIDUL SAKLANI</span>
                  </td>
                  <td className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-lg font-medium">
                    b799b8724b
                  </td>
                  <td className="px-4 py-4 border-b-[1px] border-[#ffffff17] text-lg font-medium text-[#045CF0]">
                    #{index + 1}
                  </td>
                  <td className="px-4 py-4 border-b-[1px] text-[#F0AD4E] border-[#ffffff17] text-lg font-medium">
                    COC
                  </td>
                  <td className="px-4 py-4 border-b-[1px] text-[#F0AD4E] border-[#ffffff17] flex items-center space-x-1 text-lg font-semibold">
                    <span>4000Rs</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
        </div>
      </div>
      </div>
    </>
  );
};

export default ScoreBoard;
