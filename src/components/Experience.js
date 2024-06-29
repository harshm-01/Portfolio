import React, { useEffect, useState } from "react";
import role from "../assets/images/logo/role.svg";
import techStack from "../assets/images/logo/techStack.svg";
import flutter from "../assets/images/logo/flutter.svg";
import firebase from "../assets/images/logo/firebase.svg";
import dart from "../assets/images/logo/dart.svg";
import bhuAmrit from "../assets/images/logo/bhuAmrit.svg";
import androidStudio from "../assets/images/logo/androidStudio.svg";
import bhuAmrit1 from "../assets/images/carousel/bhuAmrit/1.svg";
import bhuAmrit2 from "../assets/images/carousel/bhuAmrit/2.svg";
import bhuAmrit3 from "../assets/images/carousel/bhuAmrit/3.svg";
import bhuAmrit4 from "../assets/images/carousel/bhuAmrit/4.svg";
import bhuAmrit5 from "../assets/images/carousel/bhuAmrit/5.svg";
import bhuAmrit6 from "../assets/images/carousel/bhuAmrit/6.svg";
import bhuAmrit7 from "../assets/images/carousel/bhuAmrit/7.svg";
import bhuAmrit8 from "../assets/images/carousel/bhuAmrit/8.svg";

export default function Experience() {
  const [show, setShow] = useState([false, true, false]);

  useEffect(() => {
    const slides = document.querySelectorAll(".slider");
    let counter = 0;

    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });

    const slideImage = () => {
      slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      });
    };

    const intervalId = setInterval(() => {
      counter++;
      if (counter === slides.length) {
        counter = 0;
      }
      slideImage();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-dark-bg pt-8 pb-8" id="experience">
      <div className="w-full h-24 flex items-center justify-center">
        <div className="w-96 h-12 flex flex-col items-center">
          <div className="text-white text-2xl h-full font-custom1 flex flex-col justify-center">
            <p>EXPERIENCE</p>
            <div className="flex items-center gap-1 justify-end">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="h-0.5 w-20 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[36rem] px-8 justify-center gap-32 items-center notepad:flex-col tablet:h-full tablet:gap-4 tablet:px-2">
        <div className="w-[36rem] h-[34rem] py-4 flex flex-col items-center justify-around tablet:w-full tablet:h-full notepad:gap-4 tablet:gap-20">
          <div
            className="w-[28rem] h-[5.5rem] relative mx-20 tablet:mx-1 tablet:w-[24.5rem] mobile:w-[20rem]"
            onClick={() => setShow([true, false, false])}
          >
            <div className="absolute top-0 left-0 bg-green-transparent w-[27.5rem] h-20 rounded-lg tablet:w-[24rem] mobile:w-[19.5rem]"></div>
            <div
              className={`absolute bottom-0 right-0 ${
                show[0] ? "bg-blue-transparent" : "bg-red-transparent"
              } hover:bg-nav-inactive-transparent cursor-pointer w-[27.5rem] h-20 rounded-lg z-10 tablet:w-[24rem] mobile:w-[19.5rem]`}
            ></div>
            <div className="flex absolute z-20 top-3 left-4 tablet:w-[22rem] tablet:h-[4rem] tablet:items-center">
              <div className="w-16 h-16 flex items-center justify-center mr-4 tablet:w-12 tablet:h-12">
                <img src={bhuAmrit} alt="" />
              </div>
              <div className="text-white leading-tight text-base  flex flex-col justify-center">
                <p className="font-custom2">Organization</p>
                <p className="font-normal text-sm">Bhu Amrit</p>
              </div>
            </div>
          </div>
          <div
            className="w-[28rem] h-[5.5rem] relative mx-20 tablet:mx-1 tablet:w-[24.5rem] mobile:w-[20rem]"
            onClick={() => setShow([false, true, false])}
          >
            <div className="absolute top-0 left-0 bg-green-transparent w-[27.5rem] h-20 rounded-lg tablet:w-[24rem] mobile:w-[19.5rem]"></div>
            <div
              className={`absolute bottom-0 right-0 ${
                show[1] ? "bg-blue-transparent" : "bg-red-transparent"
              } hover:bg-nav-inactive-transparent cursor-pointer w-[27.5rem] h-20 rounded-lg z-10 tablet:w-[24rem] mobile:w-[19.5rem]`}
            ></div>
            <div className="flex absolute z-20 top-3 left-4 tablet:w-[22rem] tablet:h-[4rem] tablet:items-center">
              <div className="w-16 h-16 flex items-center justify-center mr-4 tablet:w-12 tablet:h-12">
                <img src={role} alt="" />
              </div>
              <div className="text-white leading-tight text-base">
                <p className="font-custom2">Role</p>
                <p className="font-normal text-sm">App Development Intern</p>
                <p className="font-custom8 text-sm">
                  15th May 2023 - 7th July 2023
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-[28rem] h-[5.5rem] relative mx-20 tablet:mx-1 tablet:w-[24.5rem] mobile:w-[20rem]"
            onClick={() => setShow([false, false, true])}
          >
            <div className="absolute top-0 left-0 bg-green-transparent w-[27.5rem] h-20 rounded-lg tablet:w-[24rem] mobile:w-[19.5rem]"></div>
            <div
              className={`absolute bottom-0 right-0 ${
                show[2] ? "bg-blue-transparent" : "bg-red-transparent"
              } hover:bg-nav-inactive-transparent cursor-pointer w-[27.5rem] h-20 rounded-lg z-10 tablet:w-[24rem] mobile:w-[19.5rem]`}
            ></div>
            <div className="flex absolute z-20 top-3 left-4 tablet:w-[22rem] tablet:h-[4rem] tablet:items-center">
              <div className="w-16 h-16 flex items-center justify-center mr-4 tablet:w-12 tablet:h-12">
                <img src={techStack} alt="" />
              </div>
              <div className="text-white leading-tight text-base flex flex-col justify-center">
                <p className="font-custom2">TechStack</p>
                <p className="font-custom8 text-sm">Click to Preview</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[36rem] h-[34rem] tablet:h-full tablet:w-full tablet:px-2 tablet:py-4 tablet:flex tablet:items-center tablet:justify-center">
          <div className="w-72 h-full relative mx-12 tablet:mx-0 tablet:h-[34rem]">
            <div className="absolute top-0 left-0 bg-red-transparent w-[16.5rem] h-[33rem] rounded-3xl"></div>
            <div className="absolute bottom-0 right-0 bg-blue-transparent w-[16.5rem] h-[33rem] rounded-3xl z-10"></div>
            <div className="flex absolute z-20 top-2 left-2 overflow-hidden rounded-2xl">
              <div className="h-[33rem] w-[17rem] rounded-lg">
                <img
                  src={bhuAmrit1}
                  alt=""
                  className="slider h-full w-full absolute transition duration-300"
                />
                <img
                  src={bhuAmrit2}
                  alt=""
                  className="slider h-full w-full absolute transition duration-300"
                />
                <img
                  src={bhuAmrit3}
                  alt=""
                  className="slider h-full w-full absolute transition duration-300"
                />
                <img
                  src={bhuAmrit4}
                  alt=""
                  className="slider h-full w-full absolute transition duration-300"
                />
                <img
                  src={bhuAmrit5}
                  alt=""
                  className="slider h-full w-full absolute transition duration-300"
                />
                <img
                  src={bhuAmrit6}
                  alt=""
                  className="slider h-full w-full absolute transition duration-300"
                />
                <img
                  src={bhuAmrit7}
                  alt=""
                  className="slider h-full w-full absolute transition duration-300"
                />
                <img
                  src={bhuAmrit8}
                  alt=""
                  className="slider h-full w-full absolute transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-12 px-24 tablet:my-2 tablet:px-2 laptop:px-16 tablet:flex tablet:items-center tablet:justify-center">
        <div
          className={`${
            show[0] ? "" : "hidden"
          } w-5/6 bg-light-bg rounded-2xl py-6 px-7 shadow-dark-shadow laptop:w-full tablet:px-3`}
        >
          <div className="w-full h-7 text-text-orange font-custom1 text-2xl flex items-center justify-start px-2">
            About Company
          </div>
          <div className="w-full text-white font-custom3 text-xl tablet:text-lg tablet:font-custom1 flex flex-col items-start justify-start px-2 mt-5 text-justify">
            <p className="leading-6 mb-5">
              Established in 2018 in Roorkee, Bhu Amrit is an FPO (Farmer
              Producer Organization) with 500 farmers. It’s goal is to promote
              chemical-free food production, aiming for good nutrition and a
              sustainable environment for a healthier nation.
            </p>
            <p className="leading-6">
              They were seeking a custom e-commerce app to facilitate direct
              product sales.
            </p>
          </div>
          <div className="w-full mt-10 text-white">
            <a
              href="/Internship_BhuAmrit.pdf"
              download="Internship_BhuAmrit.pdf"
            >
              <button
                className="bg-btn-color-3 hover:bg-btn-color-3-hover px-4 py-2 font-custom2 rounded-md shadow-light-shadow"
              >
                Certificate
              </button>
            </a>
          </div>
        </div>
        <div
          className={`${
            show[1] ? "" : "hidden"
          } w-5/6 bg-light-bg rounded-2xl py-6 px-7 shadow-dark-shadow laptop:w-full tablet:px-3`}
        >
          <div className="w-full h-7 text-text-orange font-custom1 text-2xl flex items-center justify-start px-2">
            My Role
          </div>
          <div className="w-full text-white font-custom3 text-xl tablet:text-lg tablet:font-custom1 flex flex-col items-start justify-start px-2 mt-5 text-justify">
            <p className="leading-6 tablet:leading-5 mb-5">
              In my role, we developed a responsive e-commerce app for BhuAmrit,
              creating distinct interfaces for users and sellers. Utilizing the
              Flutter Framework for frontend UI development, we ensured a
              seamless user experience.
            </p>
            <p className="leading-6 tablet:leading-5 mb-5">
              Backend services were established through Firebase, providing
              secure authentication and real-time product updates. Additionally,
              Firebase cloud functionalities were integrated for in-app
              transactions, including Flutter's UPI payment implementation.
            </p>
            <p className="leading-6 tablet:leading-5 mb-5">
              The app boasts features such as online product purchasing, cart
              management, profile customization, and delivery options. Both the
              user and seller apps are interconnected via Firebase, facilitating
              real-time updates on product availability.
            </p>
            <p className="leading-6 tablet:leading-5">
              Furthermore, the app includes a delivery status feature where
              changes made by sellers are instantly reflected on the user's
              side, enhancing the overall efficiency and convenience of the
              e-commerce platform.
            </p>
          </div>
        </div>
        <div
          className={`${
            show[2] ? "" : "hidden"
          } w-5/6 bg-light-bg rounded-2xl py-6 px-7 shadow-dark-shadow laptop:w-full tablet:px-3`}
        >
          <div className="w-full h-7 text-text-orange font-custom1 text-2xl flex items-center justify-start px-2">
            TechStack Used
          </div>
          <div className="w-full font-custom2 text-xl flex items-center justify-around px-2 tablet:px-0 mt-5 text-justify text-white">
            <div className="flex flex-col items-center justify-center w-32 h-28">
              <div className="w-20 h-20 flex items-end justify-center tablet:w-16 tablet:h-16">
                <img src={flutter} alt="" />
              </div>
              <div className="text-base font-custom3 tablet:text-xs tablet:text-center">
                Flutter
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-32 h-28 ">
              <div className="w-20 h-20 flex items-end justify-center tablet:w-16 tablet:h-16">
                <img src={firebase} alt="" />
              </div>
              <div className="text-base font-custom3 tablet:text-xs tablet:text-center">
                Firebase
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-32 h-28 ">
              <div className="w-20 h-20 flex items-end justify-center tablet:w-16 tablet:h-16">
                <img src={dart} alt="" />
              </div>
              <div className="text-base font-custom3 tablet:text-xs tablet:text-center">
                Dart
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-32 h-28 ">
              <div className="w-20 h-20 flex items-end justify-center tablet:w-16 tablet:h-16">
                <img src={androidStudio} alt="" />
              </div>
              <div className="text-base font-custom3 tablet:text-xs tablet:text-center">
                Android Studio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
