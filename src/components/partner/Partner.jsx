import React, { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PartnerItems } from "./PartnerItems";

let count = 0;

const Partner = () => {
  const [value, setValue] = useState(0);

  const slideRef = useRef();
  const handleOnNextClick = () => {
    try {
      count = (count + 1) % PartnerItems.length;
      setValue(count);
      slideRef.current.classList.add("fade-anim");
    } catch (error) {
      console.log("Error On Partner", error);
    }
  };

  const handleOnPrevClick = () => {
    count = (value + PartnerItems.length - 1) % PartnerItems.length;
    setValue(count);
    slideRef.current.classList.add("fade-anim");
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  const effectRef = useRef(false);

  useEffect(() => {
    if (effectRef.current === false) {
      const startSlider = () => {
        const slideInterval = setInterval(() => {
          if (slideRef.current) {
            handleOnNextClick();
          } else {
            clearInterval(slideInterval);
          }
        }, 5000);
      };
      if (slideRef.current) {
        startSlider();
      }
      slideRef.current.addEventListener("animationend", removeAnimation);
      return () => {
        effectRef.current = true;
      };
    }
  }, []);

  return (
    <div className="text-white px-5 lg:px-32 xl:px-40 2xl:px-52">
      {/* start title */}
      <div className="sectionIntro text-center py-16">
        <div className="small-title text-center">
          <div className="small-title-container">
            <div className="left-dash text-[#FEA803] px-10 pt-1 inline">-</div>
            <h5 className="text-2xl text-[#FEA803] inline">PARTNERS</h5>
            <div className="right-dash text-[#FEA803] px-10 inline">-</div>
          </div>
        </div>
        <h2 className="font-bold">Meet our partners</h2>
      </div>
      {/* end title */}

      {/* start partners */}
      <div
        ref={slideRef}
        className="content-container grid md:divide-x md:divide-[#6E6E6E] md:grid-cols-2">
        <div className="partner-img w-full">
          <img
            className="m-auto h-[210px]"
            src={require("../../assets/img/partners/" +
              PartnerItems[value].imgURL +
              ".svg")}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center md:items-start w-full h-full">
          <div className="partner-content text-left ml-0 md:ml-20">
            <h4 className="text-[30px] font-semibold mb-5">
              {PartnerItems[value].name}
            </h4>
            <p>{PartnerItems[value].description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end pb-20 py-10">
        <button
          className="w-10 h-10 border rounded-full bg-white mx-2 drop-shadow-xl transition-all hover:bg-[#e6e6e6]"
          onClick={handleOnPrevClick}>
          <ChevronLeftIcon className="w-full h-full text-[#0D527C]" />
        </button>

        <button
          className="w-10 h-10 border rounded-full bg-white ml-3 drop-shadow-xl transition-all hover:bg-[#e6e6e6]"
          onClick={handleOnNextClick}>
          <ChevronRightIcon className="w-full h-full text-[#0D527C]" />
        </button>
      </div>
      {/* end partners */}
    </div>
  );
};

export default Partner;
