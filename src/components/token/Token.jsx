import React, { useEffect } from "react";
import token from "../../assets/img/token/sunshareToken.svg";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import AOS from "aos";
import "aos/dist/aos.css";

const Token = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="w-full h-full flex flex-col justify-between py-48">
      <div className="token-container grid md:grid-cols-2 max-w-[1920px] px-5 lg:px-30 xl:px-40 2xl:px-52">
        {/* start token 3d */}
        <div
          className="w-full"
          data-aos="fade-right"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <img className="m-auto" src={token} alt="" />
        </div>
        {/* end token 3d */}

        {/* start token details */}
        <div
          className="token-details flex flex-col justify-center md:items-start w-full h-full"
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <div className="text-left ml-0 md:ml-20">
            <h4>Sunshare Token</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h6>Learn more about Sunshare Token.</h6>
            <button className="w-10 h-10 border rounded-full bg-[#012E46] drop-shadow-xl transition-all hover:bg-[#0D527C]">
              <ChevronDownIcon className="w-full h-full text-white" />
            </button>
          </div>
        </div>
        {/* end token details */}
      </div>
    </div>
  );
};

export default Token;
