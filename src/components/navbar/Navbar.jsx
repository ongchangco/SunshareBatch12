import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

import logo from "../../assets/img/logo/logo.png";

import { MenuItems } from "./MenuItems";

import AOS from "aos";
import "aos/dist/aos.css";
import Dropdown from "./Dropdown";
import NavDrawer from "./NavDrawer";

const Navbar = ({ setToDark, isDark }) => {
  useEffect(() => {
    AOS.init();
    //setToDark();
  });

  // if the navlink is active or not, give this style
  const activeLink =
    "flex justify-center items-center px-6 py-2 m-1 mr-2 bg-[#FEA803] text-white rounded-full transition-all  ";
  const normalLink =
    "flex justify-center items-center px-6 py-2 m-1 mr-2 text-black bg-transparent hover:transition-all ease-in-out delay-100 duration-500 hover:bg-[#E8e6e6] hover:text-black rounded-full dark:text-white dark:md:hover:bg-[#0d1f31]";

  // handle menu button click
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  // // //event listener for click
  // // useEffect(() => {
  // //   document.addEventListener("click", handleClickOutside, true);
  // // }, []);

  // // //click reference
  // // const menuRef = useRef();

  // // //handle click outside
  // // const handleClickOutside = (e) => {
  // //   if (menuRef.current) {
  // //     console.log(menuRef);
  // //     if (!menuRef.current.contains(e.target)) {
  // //       console.log();
  // //       setNav(false);
  // //     }
  // //   }
  // };

  return (
    <div
      className="w-screen h-[100px] z-10 dark:bg-[#243447] bg-slate-50 fixed drop-shadow-lg"
      data-aos="fade-down">
      {/* start normal navbar */}
      <div className="container mx-auto px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <NavLink to={"/"}>
            {/* replace this line of code (↓) with this (↑) if deployed with own domain then go to MenuItems.js to change the url for the props*/}
            {/* <NavLink to={"/landing-page"}> */}
            <img src={logo} alt="logo" className="w-full" />
          </NavLink>
        </div>

        <div>
          <ul className="hidden md:flex">
            {MenuItems.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={item.url}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }>
                  {item.title}
                </NavLink>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:flex">
          <div className="mx-2 m-auto text-gray-600">
            <div className="max-w-lg w-full lg:max-w-xs">
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
          </div>
          {/* Darkmode button */}
          <div className="my-auto">
            <button
              className="mx-2"
              onClick={() => {
                setToDark();
              }}>
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30">
                  <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"></path>
                </svg>
              )}
            </button>
          </div>
          <button
			onClick={() => window.open('http://192.168.55.83:3000', '_blank').focus()}
            className="px-6 py-2
                           bg-[#FEA803]
                           text-white
                           border-2 border-black
                           transition-all
                           hover:bg-[#F7931E]
                           rounded-lg
                           ">
            Launch App
          </button>
        </div>

        {/*Burger Button and Dark Button*/}
        <div className="flex md:hidden items-center justify-center">
          <button
            className="mx-2 h-[100%]"
            onClick={() => {
              setToDark();
            }}>
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffffff"
                className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="100%"
                viewBox="0 0 30 30">
                <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"></path>
              </svg>
            )}
          </button>

          <div
            className="md:hiisNavOpen dden bg-[#FEA803] border-2 border-black rounded-md"
            onClick={handleClick}>
            {!nav ? (
              <Bars3Icon className="w-8" />
            ) : (
              <XCircleIcon className="w-8" />
            )}
          </div>
        </div>
      </div>

      {/* end normal navbar */}

      {/* start drop down menu */}
      <NavDrawer isNavOpen={nav} />
      {/* end drop down menu */}
    </div>
  );
};

export default Navbar;
