import React from "react";

const Results = () => (
  <div className="text-left appearance-none block w-full bg-[#D9D9D9] border rounded-b-lg py-5 px-4 mb-3 leading-tight">
    <p>Test</p>
  </div>
);

const Faqbutton = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);
  return (
    <div className="w-full mx-auto md:w-10/12 lg:w-1/2 px-3 mb-6 md:mb-0">
      <button
        onClick={onClick}
        className="text-left appearance-none block w-full bg-[#000] text-[#FEA803] border rounded-lg py-5 px-4 mb-1 leading-tight">
        <p className="inline">What is Sunshare?</p>
        <svg
          className="ml-2 w-4 h-4 inline"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {showResults && <Results />}
    </div>
  );
};

export default Faqbutton;
