import React, { useRef } from "react";

import GreyArea from "../components/divider/GreyArea";
import Newsletter from "../components/newsletter/Newsletter";
import SunShareSection from "../components/aboutus/SunShareSection";
import CoreSection from "../components/aboutus/CoreSection";

const About = () => {
  const section2 = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className=" dark:text-white dark:bg-[#0D1F31] bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
      <div className="w-full">
        <SunShareSection
          onClickToImage={() => {
            scrollToSection(section2);
          }}
        />
      </div>
      <div
        ref={section2}
        className="resize-none w-full bg-[#E5E4E2] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
        <div className="w-full	">
          <CoreSection />
        </div>
      </div>

      <div className="w-full">
        <GreyArea />
      </div>

      <div className="w-full text-center">
        <div className="container m-auto">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default About;
