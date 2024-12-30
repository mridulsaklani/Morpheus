"use client";
import React, { useState } from "react";
import Image from "next/image";

const ScoreBoard = () => {
  const [HeaderShow, setHeaderShow] = useState(1);

  return (
    <>
      <div className="py-20 relative px-5">
        <Image
          className="shape1 absolute top-0 left-0 w-full h-full"
          src={"/shape1.png"}
          width={900}
          height={900}
          alt="shape1"
        />
        <Image
          className="shape2 absolute top-0 left-0 w-full h-full"
          src={"/shape2.png"}
          width={900}
          height={900}
          alt="shape2"
        />
        <Image
          className="shape3 absolute top-0 left-0 w-full h-full"
          src={"/shape3.png"}
          width={900}
          height={900}
          alt="shape3"
        />
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex flex-col items-center justify-center gap-5 pb-10">
            <h4 className="text-xl lg:text-2xl text-rose-600 font-semibold uppercase">
              See Who’s Leading the Charge
            </h4>
            <h2 className="w-full lg:w-2/3 text-white font-bold text-4xl sm:text-5xl lg:text-6xl uppercase leading-snug text-center">
              Top Performers of the Morpheous Family
            </h2>
            <p className="text-xl lg:text-2xl text-center w-full sm:w-2/3 font-light">
              This Month’s Heroes, Next Month Could Be Yours—Seize Your Victory!
            </p>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-10">
            <ul className="flex flex-col md:flex-row items-center justify-center gap-6 p-5 border-none md:border-[1px] border-[#ffffff33] rounded-full w-full md:w-[580px]">
              <li
                className={`${
                  HeaderShow === 1 ? "bg-rose-600" : "bg-[#252F5A]"
                } px-12 py-3 rounded-full text-xl text-white w-48 text-center cursor-pointer`}
                onClick={() => setHeaderShow(1)}
              >
                BGMI
              </li>
              <li
                className={`${
                  HeaderShow === 2 ? "bg-rose-600" : "bg-[#252F5A]"
                } px-12 py-3 rounded-full text-xl text-white w-48 text-center cursor-pointer`}
                onClick={() => setHeaderShow(2)}
              >
                FREEFIRE
              </li>
              <li
                className={`${
                  HeaderShow === 3 ? "bg-rose-600" : "bg-[#252F5A]"
                } px-12 py-3 rounded-full text-xl text-white w-48 text-center cursor-pointer`}
                onClick={() => setHeaderShow(3)}
              >
                COC
              </li>
            </ul>

            <div className="w-full overflow-x-auto">
              {HeaderShow === 1 && (
                <table className="table-auto min-w-full border-collapse border border-[#ffffff17] text-sm shadow-xl">
                  <thead>
                    <tr className="bg-[#0B122E] text-white">
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Team
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Game
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Tournament
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Event Date
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Prize
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <tr
                        key={index}
                        className="bg-transparent hover:bg-[#192246] transition-all duration-500"
                      >
                        <td className="px-4 py-4 border-b border-[#ffffff17] flex items-center space-x-3 text-sm sm:text-lg font-medium">
                          <Image
                            src={`/user.png`}
                            width={32}
                            height={32}
                            alt="User"
                            className="w-8 h-8 rounded-full"
                          />
                          <span>MRIDUL SAKLANI</span>
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium">
                          BGMI
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium">
                          BattleGround Blitz
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium text-[#045CF0]">
                          12-12-2024
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium text-[#F0AD4E]">
                          4000Rs
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {HeaderShow === 2 && (
                <table className="table-auto min-w-full border-collapse border border-[#ffffff17] text-sm shadow-xl">
                  <thead>
                    <tr className="bg-[#0B122E] text-white">
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Team
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Game
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Tournament
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Event Date
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Prize
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <tr
                        key={index}
                        className="bg-transparent hover:bg-[#192246] transition-all duration-500"
                      >
                        <td className="px-4 py-4 border-b border-[#ffffff17] flex items-center space-x-3 text-sm sm:text-lg font-medium">
                          <Image
                            src={`/user.png`}
                            width={32}
                            height={32}
                            alt="User"
                            className="w-8 h-8 rounded-full"
                          />
                          <span>MRIDUL SAKLANI</span>
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium uppercase">
                          Free Fire
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium">
                          BattleGround Blitz
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium text-[#045CF0]">
                          12-12-2024
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium text-[#F0AD4E]">
                          4000Rs
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {HeaderShow === 3 && (
                <table className="table-auto min-w-full border-collapse border border-[#ffffff17] text-sm shadow-xl">
                  <thead>
                    <tr className="bg-[#0B122E] text-white">
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Team
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Game
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Tournament
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Event Date
                      </th>
                      <th className="px-4 py-4 border-b border-[#ffffff17] text-left text-sm sm:text-lg font-medium uppercase">
                        Prize
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <tr
                        key={index}
                        className="bg-transparent hover:bg-[#192246] transition-all duration-500"
                      >
                        <td className="px-4 py-4 border-b border-[#ffffff17] flex items-center space-x-3 text-sm sm:text-lg font-medium">
                          <Image
                            src={`/user.png`}
                            width={32}
                            height={32}
                            alt="User"
                            className="w-8 h-8 rounded-full"
                          />
                          <span>MRIDUL SAKLANI</span>
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium">
                          COC
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium">
                          BattleGround Blitz
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium text-[#045CF0]">
                          12-12-2024
                        </td>
                        <td className="px-4 py-4 border-b border-[#ffffff17] text-sm sm:text-lg font-medium text-[#F0AD4E]">
                          4000Rs
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
