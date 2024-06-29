import React, { useEffect, useRef } from "react";
import Myhome from "../assets/images/pictures/home.svg";
import { Link } from "react-scroll";
import Typed from "typed.js";

export default function Home() {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Web Developer",
        "Competitive Programmer",
        "Flutter Developer",
        "MERN Stack Enthusiast",
        "Website Designer",
      ],
      startDelay: 60,
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 600,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="w-screen relative z-100 pb-8 bg-body-bg">
      <div className="w-full flex h-full pt-16 tablet:flex-col" id="home">
        <div className="w-1/3 flex flex-col items-center py-24 tablet:w-full tablet:py-12">
          <div className="w-96 h-96 flex items-center justify-center notepad:h-64 notepad:w-64">
            <img src={Myhome} alt="" />
          </div>
          <div className="w-96 flex items-center justify-around notepad:pt-5 mobile:w-full">
            <a href="/documents/resume.pdf" download="Resume_Harsh-Maurya">
              <button className="bg-btn-color-1 hover:bg-btn-color-1-hover text-white text-base font-custom2 px-7 py-1.5 rounded-md shadow-light-shadow">
                Resume
              </button>
            </a>
            <Link to="contact" smooth={true} duration={800}>
              <button className="bg-btn-color-2 hover:bg-btn-color-2-hover text-white  text-base font-custom2 px-7 py-1.5 rounded-md shadow-light-shadow">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
        <div className="w-2/3 pt-28 pb-16 laptop:pt-16 tablet:w-full tablet:flex tablet:justify-center notepad:pt-0 tablet:pt-4 tablet:pb-0">
          <div className="w-11/12 bg-light-bg h-full notepad:h-full py-4 rounded-2xl shadow-dark-shadow text-6xl font-custom3 notepad:leading-snug notepad:text-5xl mobile:text-4xl mobile:leading-normal leading-normal tablet:px-7 px-12 flex flex-col justify-center">
            <p className="text-white">Hi! I'm</p>
            <p className="text-text-red">Harsh Maurya</p>
            <p className="text-white">and I'm a</p>
            <p>
              <span className="text-text-blue" ref={element}></span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
