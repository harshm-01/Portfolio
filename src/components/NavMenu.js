import React, { useEffect, useState } from "react";
import Iabout from "../assets/images/icons/about.svg";
import Ieducation from "../assets/images/icons/education.svg";
import Iexperience from "../assets/images/icons/experience.svg";
import Iprojects from "../assets/images/icons/projects.svg";
import Iskills from "../assets/images/icons/skills.svg";
import { Link } from "react-scroll";

export default function NavMenu() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("main");
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
        if (currentSection === "navMenu") {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 w-screen h-24 z-40 flex items-center justify-between px-96 laptop:px-72 tablet:px-48 notepad:px-16 mobile:px-4">
      <div className="relative h-full w-full justify-center flex items-center">
        <div className="absolute z-30 bg-nav-line h-[0.125rem] w-full shadow-light-shadow"></div>
        <div className="absolute z-40 w-full h-full flex items-center justify-between flex-row notepad:w-full">
          <Link
            to="about"
            smooth={true}
            duration={800}
            spy={true}
            onSetActive={() => setActiveSection("about")}
          >
            <div
              className={`flex justify-center items-center ${
                activeSection === "about"
                  ? "bg-nav-icon-active"
                  : "bg-nav-icon-2"
              } w-10 h-10 rounded-full cursor-pointer shadow-light-shadow hover:bg-nav-text-inactive`}
            >
              <img src={Iabout} alt="" className="w-5 h-5" />
            </div>
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={800}
            spy={true}
            onSetActive={() => setActiveSection("education")}
          >
            <div
              className={`flex justify-center items-center ${
                activeSection === "education"
                  ? "bg-nav-icon-active"
                  : "bg-nav-icon-1"
              } w-10 h-10 rounded-full cursor-pointer shadow-light-shadow hover:bg-nav-text-inactive`}
            >
              <img src={Ieducation} alt="" className="w-5 h-5" />
            </div>
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={800}
            spy={true}
            onSetActive={() => setActiveSection("experience")}
          >
            <div
              className={`flex justify-center items-center ${
                activeSection === "experience"
                  ? "bg-nav-icon-active"
                  : "bg-nav-icon-2"
              } w-10 h-10 rounded-full cursor-pointer shadow-light-shadow hover:bg-nav-text-inactive`}
            >
              <img src={Iexperience} alt="" className="w-5 h-5" />
            </div>
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={800}
            spy={true}
            onSetActive={() => setActiveSection("project")}
          >
            <div
              className={`flex justify-center items-center ${
                activeSection === "project"
                  ? "bg-nav-icon-active"
                  : "bg-nav-icon-1"
              } w-10 h-10 rounded-full cursor-pointer shadow-light-shadow hover:bg-nav-text-inactive`}
            >
              <img src={Iprojects} alt="" className="w-5 h-5" />
            </div>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={800}
            spy={true}
            onSetActive={() => setActiveSection("skills")}
          >
            <div
              className={`flex justify-center items-center ${
                activeSection === "skills"
                  ? "bg-nav-icon-active"
                  : "bg-nav-icon-2"
              } w-10 h-10 rounded-full cursor-pointer shadow-light-shadow hover:bg-nav-text-inactive`}
            >
              <img src={Iskills} alt="" className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
