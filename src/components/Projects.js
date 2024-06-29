import React, { useEffect, useState } from "react";
import androidStudio2 from "../assets/images/logo/androidStudio2.svg";
import css from "../assets/images/logo/css.svg";
import dart2 from "../assets/images/logo/dart2.svg";
import firebase2 from "../assets/images/logo/firebase2.svg";
import flutter2 from "../assets/images/logo/flutter2.svg";
import html from "../assets/images/logo/html.svg";
import javascript from "../assets/images/logo/javascript.svg";
import threejs from "../assets/images/logo/threejs.svg";
import vscode from "../assets/images/logo/vscode.svg";
import cards2gather1 from "../assets/images/carousel/cards2gather/1.svg";
import cards2gather2 from "../assets/images/carousel/cards2gather/2.svg";
import cards2gather3 from "../assets/images/carousel/cards2gather/3.svg";
import cards2gather4 from "../assets/images/carousel/cards2gather/4.svg";
import cards2gather5 from "../assets/images/carousel/cards2gather/5.svg";
import metaverse1 from "../assets/images/carousel/metaverse/1.svg";
import metaverse2 from "../assets/images/carousel/metaverse/2.svg";
import metaverse3 from "../assets/images/carousel/metaverse/3.svg";
import metaverse4 from "../assets/images/carousel/metaverse/4.svg";
import metaverse5 from "../assets/images/carousel/metaverse/5.svg";
import metaverse6 from "../assets/images/carousel/metaverse/6.svg";

export default function Projects() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const goToSite = (url) => {
    let newWindow = window.open(url, '_blank');
  
    if (newWindow) {
      newWindow.focus();
    }
  }

  useEffect(() => {
    const slides1 = document.querySelectorAll(".slider1");
    const slides2 = document.querySelectorAll(".slider2");
    let counter1 = 0,
      counter2 = 0;

    slides1.forEach((slides, index) => {
      slides.style.left = `${index * 100}%`;
    });

    slides2.forEach((slides, index) => {
      slides.style.left = `${index * 100}%`;
    });

    const slideImage = () => {
      slides1.forEach((slide) => {
        slide.style.transform = `translateX(-${counter1 * 100}%)`;
      });

      slides2.forEach((slide) => {
        slide.style.transform = `translateX(-${counter2 * 100}%)`;
      });
    };

    const intervalId = setInterval(() => {
      slideImage();
      counter1++;
      counter2++;
      if (counter1 === 5) {
        counter1 = 0;
      }
      if (counter2 === 6) {
        counter2 = 0;
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full pt-8 mb-5" id="project">
      <div className="w-full h-24 flex items-center justify-center">
        <div className="w-96 h-12 flex flex-col items-center">
          <div className="text-white text-2xl h-full font-custom1 flex flex-col justify-center">
            <p>PROJECTS</p>
            <div className="flex items-center gap-1 justify-end">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="h-0.5 w-16 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-24 py-8 laptop:px-4 tablet:px-2 tablet:py-2 laptop:flex laptop:items-center laptop:justify-center">
        <div className="w-[80rem] laptop:w-[72rem] med1:w-[50rem] med2:w-[46rem] bg-light-bg rounded-3xl py-6 px-6 flex flex-col items-center justify-start notepad:w-[24.5rem] mobile:w-[20rem] shadow-dark-shadow">
          <div className="w-full text-text-orange font-custom5 text-2xl flex items-center justify-center px-2 pb-1">
            <div className="flex flex-col">
              <p>CARDS2GATHER</p>
              <div className="flex items-center gap-1 justify-end">
                <div className="w-1 h-1 bg-text-orange rounded-full"></div>
                <div className="h-0.5 w-24 bg-text-orange rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-4 gap-6 tablet:flex-col">
            <div className="w-1/2 flex flex-col items-center justify-center tablet:w-full">
              <div className="w-5/6 px-2 py-2 my-4 items-center flex justify-center tablet:px-0 tablet:w-full">
                <div className="w-[25rem] h-56 relative tablet:w-[21rem] tablet:h-48 mobile:w-[16rem] mobile:h-40">
                  <div className="absolute bottom-0 left-0 bg-blue-transparent w-[23.5rem] h-[13rem] tablet:w-[20.5rem] tablet:h-[11rem] mobile:h-[9rem] mobile:w-[15.5rem] rounded-2xl"></div>
                  <div className="absolute top-0 right-0 bg-red-transparent w-[23.5rem] h-[13rem] tablet:w-[20.5rem] tablet:h-[11rem] mobile:h-[9rem] mobile:w-[15.5rem] rounded-2xl z-10"></div>
                  <div className="flex absolute z-20 -top-[0.5rem] left-[1rem] tablet:left-2 tablet:top-2 overflow-hidden">
                    <div className="h-[15rem] w-[23rem] rounded-lg tablet:h-[11rem] tablet:w-[20rem] mobile:w-[15rem] mobile:h-[9rem]">
                      <img
                        src={cards2gather1}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider1"
                      />
                      <img
                        src={cards2gather2}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider1"
                      />
                      <img
                        src={cards2gather3}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider1"
                      />
                      <img
                        src={cards2gather4}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider1"
                      />
                      <img
                        src={cards2gather5}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-5/6 h-16 items-center justify-around my-2 notepad:w-full tablet:w-1/2 tablet:my-0 font-custom2">
                <button className="bg-btn-color-1 hover:bg-btn-color-1-hover text-white px-8 py-2 rounded-md shadow-light-shadow" onClick={() => goToSite("https://youtu.be/IUGl1QJ310c")}>
                  Video
                </button>
                <button className="bg-btn-color-2 hover:bg-btn-color-2-hover text-white px-8 py-2 rounded-md shadow-light-shadow" onClick={() => goToSite("https://play.google.com/store/apps/details?id=com.cards.together")}>
                  Play
                </button>
              </div>
            </div>
            <div className="w-1/2 px-4 py-4 flex flex-col justify-end items-start tablet:w-full">
              <div className="flex flex-col grow">
                <div className="w-full h-7 text-white font-custom1 text-lg flex items-center justify-start px-2 mb-4">
                  TechStack Used
                </div>
                <div className="flex flex-wrap my-1 items-center justify-start text-white tablet:justify-center">
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 my-1 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={flutter2} alt="" />
                    </div>
                    <div className="text-sm font-normal">Flutter</div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 my-1 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={firebase2} alt="" />
                    </div>
                    <div className="text-sm font-normal">Firebase</div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 my-1 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={dart2} alt="" />
                    </div>
                    <div className="text-sm font-normal">Dart</div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 my-1 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={androidStudio2} alt="" />
                    </div>
                    <div className="text-sm font-normal">Android Studio</div>
                  </div>
                </div>
              </div>
              <div
                className="w-full text-nav-text-inactive rounded-md bg-btn-color-4 h-10 flex items-center justify-end px-6 mt-1 cursor-pointer hover:bg-btn-color-4-hover"
                onClick={() => setToggle1(!toggle1)}
              >
                <button>More</button>
              </div>
            </div>
          </div>
          <div className={`w-full mt-1 text-white ${toggle1 ? "" : "hidden"}`}>
            <div className="w-full font-custom6 text-xl flex flex-col items-start justify-start px-2 mt-5 text-justify mobile:text-lg">
              <p className="leading-6 mb-5">
                Cards2Gather is a gaming app created with Flutter's Dart
                language and a Firebase backend. The app utilizes Flutter's
                framework for UI components and game logic.
              </p>
              <p className="leading-6 mb-5">
                Users have the option to play in online or offline multiplayer
                modes. In offline mode, users can connect using their mobile's
                Bluetooth or hotspot, facilitated by the Nearby API. For online
                gameplay, users can search for friends and send requests to
                play.
              </p>
              <p className="leading-6 mb-5">
                The app boasts features such as online product purchasing, cart
                management, profile customization, and delivery options. Both
                the user and seller apps are interconnected via Firebase,
                facilitating real-time updates on product availability.
              </p>
              <p className="leading-6">
                Cards2Gather has been successfully deployed on the Google Play
                Store.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-24 py-8 laptop:px-4 tablet:px-2 tablet:py-2 laptop:flex laptop:items-center laptop:justify-center">
        <div className="w-[80rem] laptop:w-[72rem] med1:w-[50rem] med2:w-[46rem] bg-light-bg rounded-3xl py-6 px-6 flex flex-col items-center justify-start notepad:w-[24.5rem] mobile:w-[20rem] shadow-dark-shadow">
          <div className="w-full text-text-orange font-custom5 text-2xl flex items-center justify-center px-2 pb-1">
            <div className="flex flex-col">
              <p className="tablet:hidden">WEB-BASED METAVERSE</p>
              <p className="hidden tablet:block">WEB METAVERSE</p>
              <div className="flex items-center gap-1 justify-end">
                <div className="w-1 h-1 bg-text-orange rounded-full"></div>
                <div className="h-0.5 w-36 bg-text-orange rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-4 gap-6 tablet:flex-col">
            <div className="w-1/2 flex flex-col items-center justify-center tablet:w-full">
              <div className="w-5/6 px-2 py-2 my-4 items-center flex justify-center tablet:px-0 tablet:w-full">
                <div className="w-[25rem] h-56 relative tablet:w-[21rem] tablet:h-48 mobile:w-[16rem] mobile:h-40">
                  <div className="absolute bottom-0 left-0 bg-blue-transparent w-[23.5rem] h-[13rem] rounded-2xl tablet:w-[20.5rem] tablet:h-[11rem] mobile:w-[15.5rem] mobile:h-[9rem]"></div>
                  <div className="absolute top-0 right-0 bg-red-transparent w-[23.5rem] h-[13rem] rounded-2xl z-10 tablet:w-[20.5rem] tablet:h-[11rem] mobile:w-[15.5rem] mobile:h-[9rem]"></div>
                  <div className="flex absolute z-20 -top-[0.5rem] left-[1rem] tablet:left-2 tablet:top-2 overflow-hidden">
                    <div className="h-[15rem] w-[23rem] rounded-lg notepad:h-[11rem] tablet:w-[20rem] mobile:w-[15rem] mobile:h-[9rem] tablet:h-[11.25rem]">
                      <img
                        src={metaverse1}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider2"
                      />
                      <img
                        src={metaverse2}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider2"
                      />
                      <img
                        src={metaverse3}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider2"
                      />
                      <img
                        src={metaverse4}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider2"
                      />
                      <img
                        src={metaverse5}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider2"
                      />
                      <img
                        src={metaverse6}
                        alt=""
                        className="h-full w-full absolute transition duration-300 slider2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-5/6 h-16 items-center justify-around my-2 notepad:w-full tablet:w-1/2 tablet:my-0 font-custom2">
                <button className="bg-btn-color-1 hover:bg-btn-color-1-hover text-white px-8 py-2 rounded-md shadow-light-shadow" onClick={() => goToSite("https://drive.google.com/file/d/1iKALU0WXGgWhZXrYrAqL7U_K1k7MWIhA/view?usp=drive_link")}>
                  Video
                </button>
                <button className="bg-btn-color-2 hover:bg-btn-color-2-hover text-white px-8 py-2 rounded-md shadow-light-shadow" onClick={() => goToSite("https://github.com/harshm-01/Web-Based-Metaverse/tree/master")}>
                  Link
                </button>
              </div>
            </div>
            <div className="w-1/2 px-4 py-4 flex flex-col justify-end items-start tablet:w-full">
              <div className="flex flex-col grow">
                <div className="w-full h-7 text-white font-custom1 text-lg flex items-center justify-start px-2 mb-4">
                  TechStack Used
                </div>
                <div className="flex flex-wrap my-1 items-center justify-start text-white notepad:justify-center">
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 mb-2 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={threejs} alt="" />
                    </div>
                    <div className="text-sm font-normal">THREE</div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 mb-2 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={firebase2} alt="" />
                    </div>
                    <div className="text-sm font-normal">Firebase</div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 mb-2 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={javascript} alt="" />
                    </div>
                    <div className="text-sm font-normal">JavaScript</div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 mt-2 tablet:mt-0 tablet:mb-2 notepad:mb-0 notepad:mt-2 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={html} alt="" />
                    </div>
                    <div className="text-sm font-normal">HTML</div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 mt-2 tablet:mt-0 tablet:mb-2 notepad:mb-0 notepad:mt-2 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={css} alt="" />
                    </div>
                    <div className="text-sm font-normal">CSS</div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-28 h-24 mx-6 mt-2 tablet:mt-0 tablet:mb-2 notepad:mb-0 notepad:mt-2 tablet:mx-4 mobile:mx-1">
                    <div className="w-16 h-16 flex items-end justify-center">
                      <img src={vscode} alt="" />
                    </div>
                    <div className="text-sm font-normal">VS Code</div>
                  </div>
                </div>
              </div>
              <div
                className="w-full text-nav-text-inactive rounded-md bg-btn-color-4 h-10 flex items-center justify-end px-6 mt-1 cursor-pointer hover:bg-btn-color-4-hover"
                onClick={() => setToggle2(!toggle2)}
              >
                <button>More</button>
              </div>
            </div>
          </div>
          <div className={`w-full mt-1 text-white ${toggle2 ? "" : "hidden"}`}>
            <div className="w-full font-custom6 text-xl flex flex-col items-start justify-start px-2 mt-5 text-justify mobile:text-lg">
              <p className="leading-6 mb-5">
                We developed a web-based metaverse using Three.js for immersive
                3D environments. Avatars and models were sourced from
                open-source platforms and avatar generation tools, enhancing
                user interaction.
              </p>
              <p className="leading-6 mb-5">
                Firebase was implemented for secure authentication, facilitating
                real-time chat and multiplayer experiences within the metaverse.
              </p>
              <p className="leading-6">
                The platform also integrates e-commerce features, allowing users
                to interact with 3D product models for enhanced engagement. This
                combination of Three.js for 3D environments, Firebase for
                authentication and chat, and e-commerce integration provides a
                dynamic and interactive metaverse experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
