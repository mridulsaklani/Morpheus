"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useFormState } from "react-dom";

const Navbar = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  
    
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
     
      
        <div className={` ${isScrolled ? "bg-[#0F143A] shadow-lg " : "bg-[#080a19bb]  "}fixed py-3 top-0 left-0 w-full z-30`}>
          <div className="   max-w-7xl mx-auto  flex items-center gap-10 ">
            <div className="w-1/6">
              <Link href={"/"}>
                <Image
                  src={"/morpheus-logo.png"}
                  height={200}
                  width={200}
                  alt="morpheus-logo"
                />
              </Link>
            </div>
            <div className="w-4/6 flex justify-end">
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
            <div className="w-1/6 flex justify-end">
              <Link
                className="bg-rose-600 px-8 py-3 hover:bg-white   rounded-full text-white flex hover:text-rose-600 transition-all duration-300 items-center gap-2 uppercase"
                href={"/"}
              >
                Join Us <IoGameController className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Navbar;
