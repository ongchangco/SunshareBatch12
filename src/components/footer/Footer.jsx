import React from "react";
import BWLogo from "../../assets/img/footer/bw-sunshare.svg";
import Discord from "../../assets/img/footer/Product Landing/Discord.svg";
import Github from "../../assets/img/footer/Product Landing/Github.svg";
import Twitter from "../../assets/img/footer/Product Landing/Twitter.svg";
import { MenuItems } from "../navbar/MenuItems";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const activeLink = "flex text-white transition-all ";
  const normalLink =
    "flex text-white hover:transition-all ease-in-out delay-100 duration-500 hover:text-neutral-400";

  return (
    <div>
      <div className="pt-20 pb-28 lg:grid lg:grid-cols-2">
        <div className="about-section pr-0 mx-5 md:pr-16">
          <a href="/">
            <img className="mb-2.5" src={BWLogo} alt="" />
          </a>
          <p className="md:mr-52 align-left">
            Sunshare is a renewable energy blockchain marketplace application
            for a clean community. Make the future bright with Sunshare!
          </p>
        </div>
        <div className="clickables leading-10 grid lg:grid-cols-2">
          <div className="learnMore mt-20 mx-5 md:mt-0">
            <h4 className="list-title">Learn More</h4>
            <ul className="md:mx-2">
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
          <div className="support mt-20 mx-5 md:mt-0">
            <h4 className="list-title">Support</h4>
            <ul className="md:mx-2">
              <li>FAQ</li>
              <li>Protocol Disclaimer</li>
              <li>Trademark Policy</li>
              <li className="font-semibold">Contact Us</li>
              <li>projectsunshare@uc-bcf.edu.ph</li>
              <li>uc.projectsunshare@gmail.com</li>
              <li>
                <a href="/badpage">
                  <img src={Twitter} alt="" className="inline pr-5" />
                </a>
                <a href="/badpage">
                  <img src={Github} alt="" className="inline pr-5" />
                </a>
                <a href="/badpage">
                  <img src={Discord} alt="" className="inline pr-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
