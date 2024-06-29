import React, { useState } from "react";
import Hcpp from "../assets/images/hoverEffect/c++.svg";
import Hcss from "../assets/images/hoverEffect/css.svg";
import Hdart from "../assets/images/hoverEffect/dart.svg";
import Hdsa from "../assets/images/hoverEffect/dsa.svg";
import Hexpress from "../assets/images/hoverEffect/express.svg";
import Hflutter from "../assets/images/hoverEffect/flutter.svg";
import Hhtml from "../assets/images/hoverEffect/html.svg";
import Hjs from "../assets/images/hoverEffect/js.svg";
import Hmongo from "../assets/images/hoverEffect/mongo.svg";
import Hmysql from "../assets/images/hoverEffect/mysql.svg";
import Hnode from "../assets/images/hoverEffect/node.svg";
import Hreact from "../assets/images/hoverEffect/react.svg";
import codeForces from "../assets/images/logo/codeForces.svg";
import interviewBit from "../assets/images/logo/interviewBit.svg";
import leetCode from "../assets/images/logo/leetCode.svg";

export default function Skills() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const goToSite = (url) => {
    let newWindow = window.open(url, '_blank');
  
    if (newWindow) {
      newWindow.focus();
    }
  }

  return (
    <div className="w-full pt-16 bg-dark-bg pb-2" id="skills">
      <div className="w-full h-16 flex items-center justify-center">
        <div className="w-96 h-12 flex flex-col items-center">
          <div className="text-white text-2xl h-full font-custom1 flex flex-col justify-center">
            <p>SKILLS</p>
            <div className="flex items-center gap-1 justify-end">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="h-0.5 w-8 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap px-20 py-1 tablet:px-4 laptop:justify-center mobile:justify-around mobile:px-1">
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hcpp}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="ninetyFivePercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            95%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            C++
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hjs}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="ninetyFivePercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            95%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            JavaScript
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hdsa}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="ninetyFivePercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            95%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            DSA
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hreact}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="seventyPercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            70%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            React
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hmysql}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="seventyFivePercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            75%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            MySQL
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hflutter}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="seventyPercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            70%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            Flutter
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hhtml}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="ninetyFivePercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            95%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            HTML
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hcss}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="ninetyFivePercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            95%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            CSS
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hnode}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="fortyPercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            40%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            Node.JS
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hmongo}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="fiftyFivePercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            55%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            MongoDB
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hexpress}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="fortyPercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            40%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            Express.JS
          </div>
        </div>
        <div className="w-36 h-[10.5rem] mx-10 my-10 relative tablet:mx-5 mobile:mx-1">
          <div className="w-20 h-20 absolute top-0 left-0">
            <img
              src={Hdart}
              alt=""
              className="w-full h-full opacity-25 hover:opacity-85"
            />
          </div>
          <div className="sixtyFivePercent absolute z-10 w-24 h-24 bottom-8 right-2 rounded-full"></div>
          <div className="bg-white absolute z-10 w-[5.2rem] h-[5.2rem] bottom-[2.4rem] right-[0.9rem] rounded-full flex items-center justify-center text-base font-custom2">
            65%
          </div>
          <div className="absolute flex justify-center right-2 w-24 bottom-0 text-base font-custom3 text-white">
            Dart
          </div>
        </div>
      </div>
      <div className="w-full h-16 flex items-center justify-center mt-10">
        <div className="w-96 h-12 flex flex-col items-center">
          <div className="text-white text-2xl h-full font-custom1 flex flex-col justify-center">
            <p>PROFILES</p>
            <div className="flex items-center gap-1 justify-end">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="h-0.5 w-12 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap px-16 py-6 justify-evenly mb-10 laptop:px-2 tablet:px-4 tablet:py-2 notepad:justify-center">
        <div className="h-80 bg-light-bg mx-8 my-8 px-4 py-6 rounded-2xl shadow-dark-shadow tablet:mx-1 notepad:w-full tablet:py-4 tablet:h-full med1:w-4/6">
          <div className="w-full text-text-orange font-custom5 text-2xl flex items-center justify-center px-1 mb-4">
            CodeForces
          </div>
          <div className="h-5/6 mx-3 flex gap-4 tablet:flex-col tablet:justify-center tablet:h-full tablet:w-full tablet:mx-0 tablet:items-center tablet:py-2">
            <div className="w-48 h-full flex items-center justify-center cursor-pointer">
              <img src={codeForces} alt="" className="w-[11.5rem] h-full"  onClick={() => goToSite("https://codeforces.com/profile/harshm_01")}/>
            </div>
            <div className={`h-full flex flex-col items-center justify-evenly flex-wrap text-white tablet:gap-4 ${toggle1? "" : "hidden"}`}>
              <div className="h-20 w-96 bg-box-green rounded-lg px-4 py-3 flex items-start flex-col justify-evenly mr-6 tablet:mr-0 tablet:w-full mobile:h-full">
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Handle: </span>harshm_01
                </p>
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Rating: </span>1682 (Expert)
                </p>
              </div>
              <div className="h-20 w-96 bg-box-red rounded-lg px-4 py-3 flex items-start flex-col justify-evenly mr-6 tablet:mr-0 tablet:w-full mobile:h-full">
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Global Rank: </span>560
                </p>
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Codeforces Round: </span>
                  #889 (Division 2)
                </p>
              </div>
              <div className="h-20 w-96 bg-box-red rounded-lg px-4 py-3 flex items-start flex-col justify-evenly mr-6 tablet:mr-0 tablet:w-full mobile:h-full">
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Global Rank: </span>541
                </p>
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Codeforces Round: </span>
                  #894 (Division 3)
                </p>
              </div>
              <div className="h-20 w-96 bg-box-red rounded-lg px-4 py-3 flex items-start flex-col justify-evenly mr-6 tablet:mr-0 tablet:w-full mobile:h-full">
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Global Rank: </span>815
                </p>
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Educational Round: </span>
                  #154
                </p>
              </div>
            </div>
            <div className="h-full bg-btn-color-4 rounded-md text-nav-text-inactive w-10 flex items-center justify-center tablet:w-full tablet:h-10" onClick={() => setToggle1(!toggle1)}>
              <button className="h-full w-full rounded-lg hover:bg-btn-color-4-hover">
                &#11216;
              </button>
            </div>
          </div>
        </div>
        <div className="h-80 bg-light-bg mx-8 my-8 px-4 py-6 rounded-2xl shadow-dark-shadow tablet:mx-1 notepad:w-full tablet:py-4 tablet:h-full med1:w-4/6">
          <div className="w-full text-text-orange font-custom5 text-2xl flex items-center justify-center px-1 mb-4">
            LeetCode
          </div>
          <div className="h-5/6 mx-3 flex gap-4 tablet:flex-col tablet:justify-center tablet:h-full tablet:w-full tablet:mx-0 tablet:items-center tablet:py-2">
            <div className="w-48 h-full flex items-center justify-center cursor-pointer">
              <img src={leetCode} alt="" className="w-[11.5rem] h-full"  onClick={() => goToSite("https://leetcode.com/u/harshm_01/")}/>
            </div>
            <div className={`h-full flex flex-col items-center justify-evenly flex-wrap text-white tablet:gap-4 ${toggle2? "" : "hidden"}`}>
              <div className="h-20 w-96 bg-box-green rounded-lg px-4 py-3 flex items-start flex-col justify-evenly mr-6 tablet:mr-0 tablet:w-full mobile:h-full">
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Handle: </span>harshm_01
                </p>
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Rating: </span>1601
                </p>
              </div>
              <div className="h-20 w-96 bg-box-red rounded-lg px-4 py-3 flex items-start flex-col justify-evenly mr-6 tablet:mr-0 tablet:w-full mobile:h-full">
                <p className="text-lg font-custom1 mobile:text-base">
                  Solved over 250+ DSA Problems
                </p>
                <p className="text-lg mobile:text-base">
                  150+ Medium and 50+ Hard
                </p>
              </div>
            </div>
            <div className="h-full rounded-md text-nav-text-inactive bg-btn-color-4 w-10 flex items-center justify-center tablet:w-full tablet:h-10" onClick={() => setToggle2(!toggle2)}>
              <button className="h-full w-full rounded-lg hover:bg-btn-color-4-hover">
                &#11216;
              </button>
            </div>
          </div>
        </div>
        <div className="h-80 bg-light-bg mx-8 my-8 px-4 py-6 rounded-2xl shadow-dark-shadow tablet:mx-1 notepad:w-full tablet:py-4 tablet:h-full med1:w-4/6">
          <div className="w-full text-text-orange font-custom5 text-2xl flex items-center justify-center px-1 mb-4">
            InterviewBit
          </div>
          <div className="h-5/6 mx-3 flex gap-4 tablet:flex-col tablet:justify-center tablet:h-full tablet:w-full tablet:mx-0 tablet:items-center tablet:py-2">
            <div className="w-48 h-full flex items-center justify-center cursor-pointer">
              <img src={interviewBit} alt="" className="w-[11.5rem] h-full"  onClick={() => goToSite("https://www.interviewbit.com/profile/harsh-maurya_326/")}/>
            </div>
            <div className={`h-full flex flex-col items-center justify-evenly flex-wrap text-white tablet:gap-4 ${toggle3? "" : "hidden"}`}>
              <div className="h-20 w-96 bg-box-green rounded-lg px-4 py-3 flex items-start flex-col justify-evenly mr-6 tablet:mr-0 tablet:w-full mobile:h-full">
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Handle: </span>
                  harsh-maurya_326
                </p>
                <p className="text-lg mobile:text-base">
                  <span className="font-custom1">Global Rank: </span>~1500
                </p>
              </div>
              <div className="h-20 w-96 bg-box-red rounded-lg px-4 py-3 flex items-start flex-col justify-evenly mr-6 tablet:mr-0 tablet:w-full mobile:h-full">
                <p className="text-lg font-custom1 mobile:text-base">
                  Solved over 350+ Quality DSA
                </p>
                <p className="text-lg font-custom1 mobile:text-base">
                  Problems
                </p>
              </div>
            </div>
            <div className="h-full bg-btn-color-4 text-nav-text-inactive rounded-md w-10 flex items-center justify-center tablet:w-full tablet:h-10" onClick={() => setToggle3(!toggle3)}>
              <button className="h-full w-full rounded-lg hover:bg-btn-color-4-hover">
                &#11216;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
