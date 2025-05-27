import React from "react";
import Faqbutton from "./Faqbutton";

const Faq = () => {
  return (
    <div className="pt-20">
      <div className="small-title text-center">
        <div className="small-title-container">
          <div className="left-dash text-[#FEA803] px-10 pt-1 inline">-</div>
          <h5 className="text-2xl text-[#FEA803] inline">FAQS</h5>
          <div className="right-dash text-[#FEA803] px-10 inline">-</div>
        </div>
      </div>
      <div className="large-title pb-14">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="w-full lg:max-w-4xl lg:mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <Faqbutton />
          <Faqbutton />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Faqbutton />
          <Faqbutton />
        </div>
      </div>
    </div>
  );
};

export default Faq;
