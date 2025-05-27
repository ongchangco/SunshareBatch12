import React from "react";
import Contact from "../components/contact/Contact";
import SupportSect from "../components/opening/SupportSect";
import Faq from "../components/faq/Faq";
import GreyArea from "../components/divider/GreyArea";
import Newsletter from "../components/newsletter/Newsletter";
const Support = () => {
  return (
    <React.Fragment>
      <div
        className="w-full  dark:text-white"
        style={{
          backgroundImage:
            "url( 'https://media.istockphoto.com/id/1310384629/photo/solar-panel-cell-on-dramatic-sunset-sky-background-clean-alternative-power-energy-concept.jpg?b=1&s=170667a&w=0&k=20&c=6PFVI-Ek0jrcEYkiAXyuD-RUTvGnadNgLny8ChXAve4=' )",
          backgroundSize: "cover",
          opacity: "0.5",
        }}>
        <div className="container m-auto">
          <SupportSect />
        </div>
      </div>

      <div className="w-full bg-[#E8E6E6] dark:bg-[#0d1f31] dark:text-white">
        <div className="container m-auto px-[3vw]">
          <Contact />
        </div>
      </div>

      <div className="w-full dark:bg-[#0d1f31] dark:text-white">
        <div className="container m-auto px-[3vw]">
          <Faq />
        </div>
      </div>

      <div className="w-full text-center dark:bg-[#0d1f31] dark:text-white">
        <div className="container m-auto">
          <Newsletter />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Support;
