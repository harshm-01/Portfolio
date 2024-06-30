import React from "react";
import varanasi from "../assets/images/scenary/varanasi.svg";
import Myabout from "../assets/images/pictures/about.svg";

export default function About() {
  return (
    <div className="w-full bg-dark-bg pb-8 pt-8" id="about">
      <div className="w-full h-24 flex items-center justify-center">
        <div className="w-48 h-12 flex flex-col items-center">
          <div className="text-white text-2xl h-full font-custom1 flex flex-col justify-center">
            <p>ABOUT ME</p>
            <div className="flex items-center gap-1 justify-end">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="h-0.5 w-20 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-80 tablet:h-full mb-6 flex tablet:flex-col">
        <div className="w-1/5 h-full flex items-center justify-end tablet:pb-0 overflow-hidden pb-14 tablet:w-full tablet:justify-center">
          <div className="w-56 notepad:w-28">
            <img src={Myabout} alt="" />
          </div>
        </div>
        <div className="w-4/5 h-full pt-12 pb-2 laptop:pt-6 laptop:pb-9 tablet:w-full tablet:py-2 tablet:flex tablet:items-center tablet:justify-center">
          <div className="w-3/4 h-5/6 tablet:w-11/12 laptop:h-full notepad:mx-0 bg-light-bg mx-8 rounded-xl px-10 font-custom2 py-4 text-white text-lg shadow-dark-shadow mobile:px-6">
            <p className="py-3 text-justify">
              🚀 Hi there! I'm all about writing cool code and making awesome
              stuff happen—a software enthusiast specializing in mobile and web
              development, currently in my final year at IIT Roorkee, where I
              excel at crafting impactful solutions.
            </p>
            <p className="py-3 text-justify">
              📱 Skilled in Android development and proficient with the MERN
              stack. Passionate about transforming ideas into reality through
              elegant code.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-20 flex items-center justify-center">
        <div className="w-96 h-12 flex flex-col items-center">
          <div className="text-white text-2xl h-full font-custom1 flex flex-col justify-center">
            <p>PERSONAL INFOS</p>
            <div className="flex items-center gap-1 justify-end">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="h-0.5 w-32 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 flex items-center justify-center gap-32 text-white notepad:flex-col notepad:gap-4 notepad:py-4 notepad:h-full tablet:gap-6">
        <div className="w-[26rem] h-5/6 bg-light-bg rounded-2xl px-8 py-8 flex flex-col items-start justify-around text-lg shadow-dark-shadow mobile:w-72 mobile:px-4 mobile:py-3 mobile:h-full mobile:text-base">
          <span className="flex font-custom2">
            Full Name:&nbsp;<p className="font-custom7">Harsh Maurya</p>
          </span>
          <span className="flex font-custom2">
            Preferred Name:&nbsp;<p className="font-custom7">Harsh</p>
          </span>
          <span className="flex font-custom2">
            Age:&nbsp;<p className="font-custom7">22 Years</p>
          </span>
          <span className="flex font-custom2">
            Phone:&nbsp;<p className="font-custom7">+91 63948 80755</p>
          </span>
          <span className="flex font-custom2">
            Email:&nbsp;
            <p className="font-custom7 tablet:text-xs flex items-center">harshm99hm@gmail.com</p>
          </span>
        </div>
        <div className="w-[26rem] h-5/6 bg-light-bg rounded-2xl px-8 py-8 flex flex-col items-start justify-around text-lg shadow-dark-shadow mobile:w-72 mobile:px-4 mobile:py-3 mobile:h-full mobile:text-base">
          <span className="flex font-custom2">
            Work Status:&nbsp;<p className="font-custom7">Open to Work</p>
          </span>
          <span className="flex font-custom2">
            Freelance:&nbsp;<p className="font-custom7">Available</p>
          </span>
          <span className="flex font-custom2">
            Language:&nbsp;<p className="font-custom7">English / Hindi</p>
          </span>
          <span className="flex font-custom2">
            Gender:&nbsp;<p className="font-custom7">Male (He/Him)</p>
          </span>
          <span className="flex font-custom2">
            Nationality:&nbsp;<p className="font-custom7">Indian</p>
          </span>
        </div>
      </div>
      <div className="w-full h-48 flex items-center justify-center notepad:px-4">
        <div className="w-1/4 h-3/5 bg-light-bg rounded-lg py-2 px-4 notepad:w-full flex items-center shadow-dark-shadow tablet:w-1/2">
          <div className="w-20 mr-4">
            <img src={varanasi} alt="" />
          </div>
          <div className="leading-tight text-base text-white">
            <p className="font-custom1">Hometown</p>
            <p>Kamachha, Varanasi,</p>
            <p>Uttar Pradesh (East),</p>
            <p>India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
