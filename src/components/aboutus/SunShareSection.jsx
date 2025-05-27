import React, { useEffect } from "react";
import Features from "./features/Features";
import SunShare from "./SunShare";

const SunShareSection = ({ onClickToImage }) => {
  return (
    <div
      className="flex flex-col justify-between md:items-start w-full h-full lg:pl-[5vw] p-4"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="1000">
      {/*--Title--*/}
      <h1 className="mt-32 sm:mt-[30px] font-Space-Grotesk font-black text-[30px] text-center lg:text-left sm:text-[50px] mr-0 lg:mr-4 xl:mr-8 2xl:mr-10">
        Meet the people behind Sunshare
      </h1>
      <p className="w-full mt-[10px] sm:mt-[30px] lg:pr-[10rem] font-Poppins font-normal lg:text-left sm:text-[20px] drop-shadow-xl text-center">
        A renewable energy marketplace through a blockchain application to
        manage, secure and improve the buy-and-sell solar energy experience
        among users. The main objective of this application is to promote
        renewable energy with the use of emerging blockchain technology.
        Enabling users to generate their own source of sustainable energy and
        trade it off with their neighbors.
      </p>
      {/*--Title End--*/}

      <Features onClickToImage={onClickToImage} />
      <SunShare />

      {/*--Content--*/}
    </div>
  );
};

export default SunShareSection;
