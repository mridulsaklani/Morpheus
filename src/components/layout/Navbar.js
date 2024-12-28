"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoGameController } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [SideMenu, setSideMenu] = useState(false);

 useEffect(() => {
  document.addEventListener('scroll',()=>{
    const scroll =  Math.floor(window.scrollY);
    console.log(scroll)
    if(scroll !== 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
   })
 }, [])

  return (
    <>
     
        <div className={` ${isScrolled ? "bg-[#0F143A] shadow-lg " : "bg-[#080a19bb]  "}fixed py-3 top-0 px-5 left-0 w-full z-30`}>
          <div className="   max-w-7xl mx-auto  flex items-center gap-10 ">
            <div className="w-2/6 lg:w-1/6 ">
              <Link href={"/"}>
                <Image
                  src={"/Nikhil-icon.png"}
                  height={320}
                  width={320} 
                  alt="morpheous-logo"
                />
              </Link>
            </div>
            <div className="w-4/6 lg:flex justify-end hidden">
              <nav>
                <ul className="flex gap-12 items-center">
                  <li>
                    <Link
                      className={`${
                        pathname === "/"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } font-medium `}
                      href={"/"}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === "/events"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } uppercase`}
                      href={"/events"}
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === "/tournament"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } font-medium`}
                      href={"/tournament"}
                    >
                      TOURNAMENTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === "/about"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } font-medium uppercase`}
                      href={"/about"}
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`${
                        pathname === "/contact"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } font-medium `}
                      href={"/contact"}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-1/6 hidden lg:flex justify-end">
              <Link
                className="bg-rose-600 px-8 py-3 hover:bg-white   rounded-full text-white flex hover:text-rose-600 transition-all duration-300 items-center gap-2 uppercase"
                href={"/"}>
                Join Us <IoGameController className="text-xl" />
              </Link>
            </div>
            <div className="w-4/6 flex items-center justify-end lg:hidden">
              <span className="" onClick={()=>setSideMenu(true)}><GiHamburgerMenu className="text-2xl text-white hover:text-red-500 transition-all duration-300"/></span>

            </div>
            <div className={`${SideMenu ? "right-0" : "right-[-100%]"} sideMenu flex flex-col gap-7 fixed  h-full bg-[#0F143A] z-20 top-0 w-full sm:w-96 py-6 px-4 transition-all duration-300`}>
              <div className="sidemenuHeader flex items-center justify-between w-full pb-3 border-b-[1px] border-[#ffffff80]">

              <Image
               src={"/morpheus-logo.png"}
               height={200}
               width={200}
               alt="morpheus-logo"
               quality={100}
              />

              <span className="h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white" onClick={()=>setSideMenu(false)}><FaXmark className="text-2xl" /></span>
              </div>
              <nav className="p-4">
                <ul className="flex gap-8 flex-col items-start">
                  <li>
                    <Link
                      className={`${
                        pathname === "/"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } font-medium `}
                      href={"/"}
                      onClick={()=>setSideMenu(false)}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === "/events"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } uppercase`}
                      href={"/events"}
                      onClick={()=>setSideMenu(false)}
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === "/tournament"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } font-medium`}
                      href={"/tournament"}
                      onClick={()=>setSideMenu(false)}
                    >
                      TOURNAMENTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === "/about"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } font-medium uppercase`}
                      href={"/about"}
                      onClick={()=>setSideMenu(false)}
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`${
                        pathname === "/contact"
                          ? "text-rose-600 font-semibold"
                          : "text-white"
                      } font-medium `}
                      href={"/contact"}
                      onClick={()=>setSideMenu(false)}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </nav>
              <div >
              <Link
                className="bg-rose-600 w-fit px-8 py-3 hover:bg-white   rounded-full text-white flex hover:text-rose-600 transition-all duration-300 items-center gap-2 uppercase"
                href={"/"}>
                Join Us <IoGameController className="text-xl" />
              </Link>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Navbar;
