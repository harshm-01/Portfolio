import React, { useState } from "react";
import logoNav from "../assets/images/logo/logoNav.svg";
import { Link } from "react-scroll";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <nav className="fixed top-0 left-0 w-screen h-14 z-300 notepad:h-20 shadow-light-shadow">
      <div className="flex h-14 w-full notepad:flex-col notepad:items-center notepad:justify-center notepad:h-20 bg-light-bg notepad:pt-1">
        <div className="h-full flex items-center w-24 justify-center">
          <div className="w-7 h-7 flex items-center cursor-pointer">
            <img src={logoNav} alt="HM" />
          </div>
        </div>
        <div className="h-full grow flex items-center">
          <ul className="flex items-center grow h-full gap-14 relative  notepad:gap-20 mobile:gap-12">
            <li
              className={`mr-8 text-base font-custom2 h-full flex items-center hover:underline ml-14 w-16 justify-center notepad:ml-0 notepad:mr-0 ${
                activeSection === "home"
                  ? "text-white"
                  : "text-nav-text-inactive"
              }`}
            >
              <Link
                to="home"
                smooth={true}
                duration={800}
                className="cursor-pointer"
                spy={true}
                onSetActive={() => setActiveSection("home")}
              >
                Home
              </Link>
            </li>
            <li
              className={`mx-8 text-base font-custom2 h-full flex items-center hover:underline w-16 justify-center notepad:ml-0 notepad:mr-0 ${
                activeSection === "about"
                  ? "text-white"
                  : "text-nav-text-inactive"
              }`}
            >
              <Link
                to="about"
                smooth={true}
                duration={800}
                spy={true}
                className="cursor-pointer"
                onSetActive={() => setActiveSection("about")}
              >
                About
              </Link>
            </li>
            <li
              className={`mx-8 text-base font-custom2 h-full flex items-center hover:underline w-16 justify-center notepad:ml-0 notepad:mr-0 ${
                activeSection === "contact"
                  ? "text-white"
                  : "text-nav-text-inactive"
              }`}
            >
              <Link
                to="contact"
                smooth={true}
                duration={800}
                spy={true}
                className="cursor-pointer"
                onSetActive={() => setActiveSection("contact")}
              >
                Contact
              </Link>
            </li>
            <div className="w-16 h-1 absolute bottom-0 left-[26.5rem] bg-white z-500 transition-all notepad:left-0 hidden"></div>
            {/* <!-- 3.5rem 15rem 26.5rem --> */}
          </ul>
        </div>
        <div className="w-1/4 h-full flex justify-start items-center px-16 tablet:hidden">
          <button className="text-sm font-custom1 bg-portfolio hover:bg-portfolio-hover px-3 h-8 py-0 rounded-md text-white">
            Portfolio.
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-nav-line absolute bottom-0 z-400"></div>
    </nav>
  );
}
