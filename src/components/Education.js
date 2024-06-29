import React from "react";
import iitRoorkee from "../assets/images/scenary/iitRoorkee.svg";
import school from "../assets/images/scenary/school.svg";
import syntaxError from "../assets/images/logo/syntaxError.svg";
import techMeet from "../assets/images/logo/techMeet.svg";
import miess from "../assets/images/logo/miess.svg";
import iitrms from "../assets/images/logo/iitrms.svg";
import aries from "../assets/images/logo/aries.svg";

export default function Education() {
  return (
    <div className="w-full pt-8 pb-8" id="education">
      <div className="w-full h-24 flex items-center justify-center">
        <div className="w-96 h-12 flex flex-col items-center">
          <div className="text-white text-2xl h-full font-custom1 flex flex-col justify-center">
            <p>EDUCATION</p>
            <div className="flex items-center gap-1 justify-end">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="h-0.5 w-20 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-16 text-text-orange font-custom2 text-2xl flex items-center justify-start mt-6 px-16 tablet:px-2">
          Graduation
        </div>
        <div className="w-full h-60 pt-2 px-16 tablet:h-full tablet:px-3">
          <div className="w-5/6 h-5/6 bg-light-bg rounded-2xl px-5 py-6 flex items-center shadow-dark-shadow notepad:flex-col tablet:w-full">
            <div className="flex items-center justify-center w-72 mr-5 notepad:mr-0 ">
              <img src={iitRoorkee} alt="" />
            </div>
            <div className="text-white notepad:text-center notepad:pt-4">
              <p className="text-2xl font-custom2 tablet:text-xl">
                INDIAN INSTITUTE OF TECHNOLOGY ROORKEE
              </p>
              <p className="text-xl font-custom2">
                Roorkee, Uttarakhand (247667)
              </p>
              <p className="text-base font-custom8">
                <span className="font-custom2">Degree:</span> Bachelors in
                Technology
              </p>
              <p className="text-base font-custom8">
                <span className="font-custom2">Branch:</span> Mechanical
                Engineering
              </p>
              <p className="text-base font-custom8">
                <span className="font-custom2">C.G.P.A.:</span> 8.337
              </p>
              <p className="text-base font-custom8">
                <span className="font-custom2">Class:</span> Class of 2024
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-24 flex items-center px-16 tablet:h-full tablet:justify-center notepad:flex-col laptop:px-4 notepad:px-8 tablet:mt-4 tablet:gap-4 notepad:gap-3">
          <div className="w-[26rem] h-[5.5rem] relative mx-20 tablet:mx-0 laptop:mx-12 tablet:w-[24rem] mobile:w-80">
            <div className="absolute top-0 left-0 bg-green-transparent w-[25.5rem] h-20 rounded-lg tablet:w-[23.5rem] mobile:w-[19.5rem]"></div>
            <div className="absolute bottom-0 right-0 bg-red-transparent w-[25.5rem] h-20 rounded-lg z-10 tablet:w-[23.5rem] mobile:w-[19.5rem]"></div>
            <div className="flex absolute z-20 top-3 left-4 mobile:flex mobile:items-center mobile:justify-center mobile:h-16">
              <div className="w-16 h-16 flex items-center justify-center mr-4 mobile:w-14 mobile:h-14 mobile:mr-2">
                <img src={iitrms} alt="" />
              </div>
              <div className="text-white leading-tight text-base tablet:text-sm">
                <p className="font-custom3 mobile:text-sm">
                  IIT Roorkee Motorsports
                </p>
                <p className="font-custom3 text-sm mobile:font-custom8">
                  Aerodynamic Engineer
                </p>
                <p className="font-custom8 text-sm">May 2021 - July 2022</p>
              </div>
            </div>
          </div>
          <div className="w-[26rem] h-[5.5rem] relative mx-16 laptop:mx-0 tablet:w-[24rem] mobile:w-80">
            <div className="absolute top-0 left-0 bg-green-transparent w-[25.5rem] h-20 rounded-lg tablet:w-[23.5rem] mobile:w-[19.5rem]"></div>
            <div className="absolute bottom-0 right-0 bg-red-transparent w-[25.5rem] h-20 rounded-lg z-10 tablet:w-[23.5rem] mobile:w-[19.5rem]"></div>
            <div className="flex absolute z-20 top-3 left-4 mobile:flex mobile:items-center mobile:justify-center mobile:h-16">
              <div className="w-16 h-16 flex items-center justify-center mr-4 mobile:w-14 mobile:h-14 mobile:mr-2">
                <img src={aries} alt="" />
              </div>
              <div className="text-white leading-tight text-base tablet:text-sm">
                <p className="font-custom3">ARIES</p>
                <p className="font-custom3 text-sm mobile:font-custom8">
                  Joint Secretary
                </p>
                <p className="font-custom8 text-sm">June 2022 - May 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-56 flex items-center px-16 mt-7 notepad:mt-3 laptop:justify-start tablet:h-full laptop:px-4 notepad:flex-col tablet:justify-center notepad:gap-4 tablet:gap-9">
          <div className="w-[14rem] h-48 relative mx-[5.5rem] tablet:mx-0 laptop:mx-12 notepad:mx-[5.5rem]">
            <div className="absolute top-0 left-0 bg-green-transparent w-[13.5rem] h-[11.5rem] rounded-lg"></div>
            <div className="absolute bottom-0 right-0 bg-blue-transparent w-[13.5rem] h-[11.5rem] rounded-lg z-10"></div>
            <div className="flex flex-col absolute z-20 top-4 left-5 w-48">
              <div className="flex items-center">
                <div className="w-[4.2rem] h-[4.2rem] flex items-center justify-center mr-3">
                  <img src={syntaxError} alt="" />
                </div>
                <div className="text-white leading-tight text-base">
                  <p className="font-custom3">Syntax Error</p>
                  <p className="font-custom3">Hackathon</p>
                  <p className="font-custom3">2023</p>
                </div>
              </div>
              <div className="text-white px-2 py-4 font-custom3 leading-tight text-sm">
                Open Track’s First Prize Winner
              </div>
              <div className="text-white font-custom8 flex items-center justify-end px-3 py-1 text-xs">
                - SDS Labs, IIT Roorkee
              </div>
            </div>
          </div>
          <div className="w-[14rem] h-48 relative mx-16 tablet:mx-0 notepad:mx-16 laptop:mx-4">
            <div className="absolute top-0 left-0 bg-green-transparent w-[13.5rem] h-[11.5rem] rounded-lg"></div>
            <div className="absolute bottom-0 right-0 bg-blue-transparent w-[13.5rem] h-[11.5rem] rounded-lg z-10"></div>
            <div className="flex flex-col absolute z-20 top-4 left-5 w-48">
              <div className="flex items-center">
                <div className="w-[4.2rem] h-[4.2rem] flex items-center justify-center mr-3">
                  <img src={techMeet} alt="" />
                </div>
                <div className="text-white leading-tight text-sm">
                  <p className="font-custom3">Engineering</p>
                  <p className="font-custom3">Conclave Pitch</p>
                  <p className="font-custom3">2022</p>
                </div>
              </div>
              <div className="text-white px-2 pr-4 py-4 font-custom3 text-sm leading-tight">
                Scored (150/150) in Flood Rescue Drone
              </div>
              <div className="text-white font-custom8 flex text-xs items-center justify-end px-3 py-1">
                - Inter IIT Tech Meet 10.0
              </div>
            </div>
          </div>
          <div className="w-[14rem] h-48 relative mx-16  tablet:mx-0 notepad:mx-16 laptop:mx-12">
            <div className="absolute top-0 left-0 bg-green-transparent w-[13.5rem] h-[11.5rem] rounded-lg"></div>
            <div className="absolute bottom-0 right-0 bg-blue-transparent w-[13.5rem] h-[11.5rem] rounded-lg z-10"></div>
            <div className="flex flex-col absolute z-20 top-4 left-5 w-48">
              <div className="flex items-center">
                <div className="w-[4.2rem] h-[4.2rem] flex items-center justify-center mr-3">
                  <img src={miess} alt="" />
                </div>
                <div className="text-white leading-tight text-sm">
                  <p className="font-custom3">Solidworks</p>
                  <p className="font-custom3">Competition</p>
                  <p className="font-custom3">2021</p>
                </div>
              </div>
              <div className="text-white px-2 py-4 font-custom3 leading-tight text-sm">
                2nd Runner Up
              </div>
              <div className="text-white font-custom8 text-xs flex items-center justify-end px-2 py-1 pt-5">
                - MIESS, IIT Roorkee
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-16 text-text-orange font-custom2 text-2xl flex items-center justify-start mt-10 px-16 tablet:px-2">
          Intermediate
        </div>
        <div className=" w-full h-40 px-16 notepad:h-full tablet:px-2">
          <div className="w-[35rem] h-36 bg-light-bg rounded-xl text-white flex items-center shadow-dark-shadow notepad:h-full notepad:justify-start notepad:px-3 notepad:py-3 notepad:w-full">
            <div className="w-40 h-28 flex items-center justify-center pl-6 pr-4 notepad:pl-0 notepad:w-36">
              <img src={school} alt="" />
            </div>
            <div className="leading-4">
              <p className="text-xl font-custom2 notepad:text-lg mobile:text-base">
                Shandilya Public School
              </p>
              <p className="text-base font-custom2 notepad:hidden">
                Samneghat, Varanasi, Uttar Pradesh [221001]
              </p>
              <p className="text-sm notepad:text-base">
                <span className="font-custom2">Board:</span> CBSE
              </p>
              <p className="text-sm notepad:text-base">
                <span className="font-custom2">Class:</span> 12th (PCM)
              </p>
              <p className="text-sm notepad:text-base">
                <span className="font-custom2">Percentage:</span> 94.80%
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-16 text-text-orange font-custom2 text-2xl flex items-center justify-start mt-10 px-16 tablet:px-2">
          Matriculate
        </div>
        <div className="w-full h-40 px-16 notepad:h-full tablet:px-2">
          <div className="w-[35rem] h-36 bg-light-bg rounded-xl text-white flex items-center shadow-dark-shadow notepad:h-full notepad:justify-start notepad:px-3 notepad:py-3 notepad:w-full">
            <div className="w-40 h-28 flex items-center justify-center pl-6 pr-4 notepad:pl-0 notepad:w-36">
              <img src={school} alt="" />
            </div>
            <div className="leading-4">
              <p className="text-xl font-custom2 notepad:text-lg mobile:text-base">
                Shandilya Public School
              </p>
              <p className="text-base font-custom2 notepad:hidden">
                Samneghat, Varanasi, Uttar Pradesh [221001]
              </p>
              <p className="text-sm notepad:text-base">
                <span className="font-custom2">Board:</span> CBSE
              </p>
              <p className="text-sm notepad:text-base">
                <span className="font-custom2">Class:</span> 10th
              </p>
              <p className="text-sm notepad:text-base">
                <span className="font-custom2">Percentage:</span> 94.60%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
