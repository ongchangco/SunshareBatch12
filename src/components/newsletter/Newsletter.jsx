import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className="lg:py-36 bg-[#D9D9D9] py-12"
      data-aos="fade-down"
      data-aos-delay="250"
      data-aos-duration="1000">
      <form action="">
        <div className="newsletter-input mb-5 ">
          <input
            className="inline md:w-96 border-2 my-3 border-[#D9D9D9] py-4 px-2 sm:px-5 bg-[#ffffff] sm:rounded-l-lg "
            type="email"
            name=""
            id=""
            placeholder="Your Email"
          />
          <button
            className="inline ml-1 py-4 px-2 my-3 sm:px-5 md:px-10 bg-black border-2 border-black text-white sm:rounded-r-lg hover:bg-[#FEA803]"
            type="submit">
            Subscribe to our newsletter
          </button>
        </div>
      </form>
      <p className="w-[50%] mx-auto my-3">
        Leave us your email address and we’ll send you our monthly newsletter
        with new Spidre news. You can unsubscribe at any time.
      </p>
    </div>
  );
};

export default Newsletter;
