import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cloudLeft1 from "../assets/img/hero/cloud_left_1.png";
import cloudLeft2 from "../assets/img/hero/cloud_left_2.png";
import cloudRight1 from "../assets/img/hero/cloud_right_1.png";
import cloudRight2 from "../assets/img/hero/cloud_right_2.png";
// import sun1 from '../assets/img/hero/sun_1.png'
// import sun2 from '../assets/img/hero/sun_2.png'
// import sun3 from '../assets/img/hero/sun_3.png'
// import sun4 from '../assets/img/hero/sun_4.png'
import sun from "../assets/img/hero/sun_gif.gif";
import panel from "../assets/img/hero/panel.png";
import land from "../assets/img/hero/land.png";
import useMouseMoveHook from "../hooks/useMouseMoveHook";

const NotFound = () => {
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    document.addEventListener("mousemove", useMouseMoveHook, true);
  }, []);

  return (
    <div className="container m-auto">
      <div className="w-full h-full hero-image bg-no-repeat bg-cover bg-bottom flex flex-col justify-between md:h-[85vh]">
        <div className="w-full grid md:grid-cols-2 max-w-[1920px] m-auto drop-shadow-xl">
          <div
            class="max-w-md m-auto"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div class="text-5xl font-dark font-bold">404</div>
            <p class="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.
            </p>
            <p class="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border-2 border-black rounded-lg focus:outline-none focus:shadow-outline-blue bg-[#FEA803] active:bg-[#F7931E] hover:bg-[#F7931E]">
              <a href="/">Back to Homepage</a>
            </button>
          </div>
          <div class="max-w-lg">
            {/* Start Parallax Logo */}
            <div
              className="md:items-start w-full h-[80vh]"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-full flex justify-center">
                <img
                  src={cloudLeft1}
                  className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
                  alt="cloud"
                  data-value="-2"
                />
                <img
                  src={sun}
                  className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
                  alt="sun"
                  data-value="4"
                />
                <img
                  src={cloudRight1}
                  className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
                  alt="cloud"
                  data-value="7"
                />
                <img
                  src={panel}
                  className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
                  alt="solar panel"
                  data-value="8"
                />
                <img
                  src={land}
                  className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
                  alt="land"
                  data-value="10"
                />
                <img
                  src={cloudLeft2}
                  className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
                  alt="cloud"
                  data-value="12"
                />
                <img
                  src={cloudRight2}
                  className="absolute w-full h-full top-0 left-0 object-contain parallax-img"
                  alt="cloud"
                  data-value="9"
                />
              </div>
            </div>
            {/* End Parallax Logo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
