import { useRef } from "react";

const Dropdown = ({ isNavActive }) => {
  const menuRef = useRef();
  return (
    <ul
      className={
        !isNavActive ? "hidden" : "Absolute bg-slate-50 w-full px-8 md:hidden"
      }
      navB
      ref={menuRef}
      data-aos="fade-down">
      <div className="mx-2 mt-2 flex pt-3">
        <div className="max-w-lg w-full lg:max-w-xs text-gray-600">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <form method="get" action="#" className="relative z-50">
            <button
              type="submit"
              id="searchsubmit"
              className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
            <input
              type="search"
              name="search"
              id="search"
              className="block w-full pl-10 pr-3 py-2 border-2 border-black rounded-md leading-5 bg-white text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search"
            />
          </form>
        </div>

        <button
          id="darkMode"
          className="mx-2"
          onClick={() => {
            console.log("???");
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="mx-2 mt-2 pb-5">
        <button
          className="py-1.5 max-w-lg w-full lg:max-w-xs
                          bg-[#FEA803]
                          text-white
                          border-2 border-black
                          hover:bg-[#F7931E] hover:text-white
                          rounded-lg
                          ">
          Launch App
        </button>
      </div>
    </ul>
  );
};
export default Dropdown;
