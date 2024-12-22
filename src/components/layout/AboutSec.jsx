import React from "react";
import Image from "next/image";

const AboutSec = () => {
  return (
    <>
      <div className="bg-[#0b122e] py-20">
        <div className="max-w-7xl mx-auto flex items-center gap-12">
          <div className="w-[40%]">
            <Image
              src={"/about-sec.webp"}
              className="w-full rounded-lg h-96 object-cover object-center"
              height={420}
              width={420}
              alt="about"
            />
          </div>
          <div className="w-[60%] flex flex-col gap-3">
            <h4 className="text-2xl text-rose-600 font-semibold uppercase ">
              Our Journey in a Nutshell
            </h4>
            <h2 className="text-white font-bold text-5xl uppercase pb-3">
              About Us
            </h2>
            <p className="text-xl  font-light   ">
              Welcome to Morpheous Gaming, your ultimate destination for
              competitive survival gaming! At Morpheous Gaming, we are
              passionate about creating a platform where gamers from across
              India can come together to showcase their skills, engage in
              thrilling tournaments, and experience the joy of community-driven
              competition. Whether you're a casual gamer or a pro looking for
              your next big challenge, Morpheous Gaming offers an inclusive and
              exciting environment for players of all levels.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
