import React from "react";

import Hero from "../components/hero/Hero";
import Maindata from "../components/maindata/Maindata";
import Graph from "../components/maindata/Graph";
import Offered from "../components/offered/Offered";
import Token from "../components/token/Token";
import Partner from "../components/partner/Partner";
import Blog from "../components/blog/Blog";
import Divider1 from "../components/divider/Divider1";
import GreyArea from "../components/divider/GreyArea";
import Newsletter from "../components/newsletter/Newsletter";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] dark:bg-[#0D1F31] dark:text-white">
        <div className="container m-auto">
          <Hero />
        </div>
      </div>

      <div className="w-full h-full bg-[#F7931E] dark:bg-[#243447]">
        <div className="container m-auto">
          <Maindata />
          <Graph />
        </div>
      </div>

      <div className="w-full bg-white text-black text-center drop-shadow-[0_-4px_4px_rgba(0,0,0,0.25)] dark:bg-[#0D1F31] dark:text-white">
        <div className="container m-auto">
          <Offered />
        </div>
      </div>

      <div className="w-full bg-white text-black text-center dark:bg-[#0D1F31] dark:text-white">
        <div className="container m-auto">
          <Token />
        </div>
      </div>

      <div className="w-full bg-[#0D527C] dark:bg-[#02314D]">
        <div className="container m-auto">
          <Partner />
        </div>
      </div>

      <div className="w-full dark:bg-[#0d1f31] dark:text-white">
        <div className="container m-auto">
          <Blog />
        </div>
      </div>

      <div className="w-full">
        <Divider1 />
        <GreyArea />
      </div>

      <div className="w-full bg-white text-black text-center dark:bg-[#243447] dark:text-white">
        <div className="container m-auto">
          <Newsletter />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
