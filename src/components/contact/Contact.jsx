import React from "react";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="small-title text-center">
        <div className="small-title-container">
          <div className="left-dash text-[#FEA803] px-10 pt-1 inline">-</div>
          <h5 className="text-2xl text-[#FEA803] inline">Contact Us</h5>
          <div className="right-dash text-[#FEA803] px-10 inline">-</div>
        </div>
      </div>
      <div className="large-title pb-14">
        <h2>
          Contact <span className="text-[#FEA803]">&</span> Support
        </h2>
      </div>
      {/*  */}
      <form className="w-full lg:max-w-4xl lg:mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full mx-auto md:w-10/12 lg:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-full mx-auto md:w-10/12 lg:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name">
              Company
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Company"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  mx-auto md:w-10/12 lg:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name">
              Mail
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Mail"
            />
          </div>
          <div className="w-full mx-auto md:w-10/12 lg:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name">
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full mx-auto md:w-10/12 lg:w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name">
              Message
            </label>
            <textarea
              className="form-control block resize-none w-full py-3 px-4 mb-10 text-base font-normal text-gray-700 bg-white border rounded transition ease-in-out m-0 focus:outline-none focus:bg-white focus:border-gray-500"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="How can we help?"></textarea>
          </div>
        </div>
        <div className="btn-container flex flex-wrap">
          <div className="w-full mx-auto md:w-10/12 lg:w-full text-right">
            <button
              className="py-3 px-10 rounded-md bg-[#000] text-white"
              type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
