import React, { useState } from "react";
import { ref, set } from "firebase/database";
import database from "../firebaseConfig";
import mail from "../assets/images/logo/mail.svg";
import phone from "../assets/images/logo/phone.svg";
import Isend from "../assets/images/icons/send.svg";
import Mygithub from "../assets/images/pictures/github.svg";
import Myinstagram from "../assets/images/pictures/instagram.svg";
import Mylinkedin from "../assets/images/pictures/linkedin.svg";
import Myx from "../assets/images/pictures/x.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const goToSite = (url) => {
    let newWindow = window.open(url, '_blank');
  
    if (newWindow) {
      newWindow.focus();
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dbRef = ref(database, "Portfolio");
    set(dbRef, {
      SenderName: name,
      SenderEmail: email,
      SubjectOfMail: subject,
      MainContent: message,
    })
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        alert("Message Sent successfully!");
      })
      .catch((error) => {
        alert("Network Issue. Please Try Again!");
      });
  };

  return (
    <main
      className="w-screen pt-14 relative bg-body-bg z-100 pb-6"
      id="contact"
    >
      <div className="w-full h-16 flex items-center justify-center">
        <div className="w-48 h-12 flex flex-col items-center">
          <div className="text-white text-2xl h-full font-custom1 flex flex-col justify-center">
            <p>GET IN TOUCH</p>
            <div className="flex items-center gap-1 justify-end">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="h-0.5 w-24 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[36rem] px-8 py-4 flex gap-6 tablet:flex-col tablet:h-full tablet:px-2">
        <div className="w-1/2 h-full flex px-5 py-6 tablet:w-full tablet:flex-col mobile:px-0 mobile:items-center mobile:justify-center mobile:py-0">
          <div className="w-1/2 mx-2 py-6 flex flex-col items-center justify-center gap-16 tablet:w-full tablet:gap-4 notepad:flex-col">
            <div className="laptop:h-full laptop:w-64 laptop:flex-col laptop:text-center tablet:text-left tablet:flex-row tablet:h-16 tablet:w-80 w-80 h-16 bg-light-bg rounded-md px-4 py-2 flex items-center shadow-light-shadow mobile:w-72">
              <div className="h-10 w-10 mr-3 tablet:mr-3 laptop:mr-0">
                <img src={phone} alt="" className="w-full h-full" />
              </div>
              <div className="text-white flex flex-col grow">
                <p className="text-base font-custom1 ">Phone</p>
                <p className="text-sm">+91 63948 80755</p>
              </div>
            </div>
            <div className="laptop:h-full laptop:w-64 laptop:flex-col laptop:text-center tablet:text-left tablet:flex-row tablet:h-16 tablet:w-80 w-80 h-16 bg-light-bg rounded-md px-4 py-2 flex items-center shadow-light-shadow mobile:w-72">
              <div className="h-10 w-10 mr-3 tablet:mr-3 laptop:mr-0">
                <img src={mail} alt="" className="w-full h-full" />
              </div>
              <div className="text-white flex flex-col grow">
                <p className="text-base font-custom1 ">Primary Email</p>
                <p className="text-sm">
                  harshm99hm@gmail.com
                </p>
              </div>
            </div>
            <div className="laptop:h-full laptop:w-64 laptop:flex-col laptop:text-center tablet:text-left tablet:flex-row tablet:h-16 tablet:w-80 w-80 h-16 bg-light-bg rounded-md px-4 py-2 flex items-center shadow-light-shadow mobile:w-72">
              <div className="h-10 w-10 mr-3 tablet:mr-3 laptop:mr-0">
                <img src={mail} alt="" className="w-full h-full" />
              </div>
              <div className="text-white flex flex-col grow">
                <p className="text-base font-custom1 ">Personal Email</p>
                <p className="text-sm  tablet:text-xs">harshmaurya99hm@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 mx-2 py-16 flex flex-wrap items-center justify-center tablet:w-full laptop:py-1 tablet:gap-8 mobile:gap-4">
            <div className="laptop:w-48 laptop:h-16 tablet:w-28 tablet:h-36 laptop:flex-row tablet:flex-col w-28 h-36 bg-light-bg hover:bg-btn-color-4-hover rounded-md px-4 py-2 flex flex-col items-center shadow-light-shadow justify-center gap-4 mx-2 cursor-pointer mobile:mx-0" onClick={() => goToSite("https://www.linkedin.com/in/harsh-maurya-39a102203/")}>
              <div className="h-16 w-16">
                <img src={Mylinkedin} alt="" className="w-full h-full" />
              </div>
              <div className="text-white w-full flex items-center justify-center mt-2 laptop:mt-0 tablet:mt-2 laptop:justify-start tablet:justify-center">
                <p className="text-base font-custom1">Linkedin</p>
              </div>
            </div>
            <div className="laptop:w-48 laptop:h-16 tablet:w-28 tablet:h-36 laptop:flex-row tablet:flex-col w-28 h-36 bg-light-bg hover:bg-btn-color-4-hover rounded-md px-4 py-2 flex flex-col items-center shadow-light-shadow justify-center gap-4 mx-2 cursor-pointer mobile:mx-0" onClick={() => goToSite("https://github.com/harshm-01")}>
              <div className="h-16 w-16">
                <img src={Mygithub} alt="" className="w-full h-full" />
              </div>
              <div className="text-white w-full flex items-center justify-center mt-2 laptop:mt-0 tablet:mt-2 laptop:justify-start tablet:justify-center">
                <p className="text-base font-custom1">GitHub</p>
              </div>
            </div>
            <div className="laptop:w-48 laptop:h-16 tablet:w-28 tablet:h-36 laptop:flex-row tablet:flex-col w-28 h-36 bg-light-bg hover:bg-btn-color-4-hover rounded-md px-4 py-2 flex flex-col items-center shadow-light-shadow justify-center gap-4 mx-2 cursor-pointer mobile:mx-0" onClick={() => goToSite("https://www.instagram.com/harsh.maurya__/")}>
              <div className="h-16 w-16">
                <img src={Myinstagram} alt="" className="w-full h-full" />
              </div>
              <div className="text-white w-full flex items-center justify-center mt-2 laptop:mt-0 tablet:mt-2 laptop:justify-start tablet:justify-center">
                <p className="text-base font-custom1">Instagram</p>
              </div>
            </div>
            <div className="laptop:w-48 laptop:h-16 tablet:w-28 tablet:h-36 laptop:flex-row tablet:flex-col w-28 h-36 bg-light-bg hover:bg-btn-color-4-hover rounded-md px-4 py-2 flex flex-col items-center shadow-light-shadow justify-center gap-4 mx-2 cursor-pointer mobile:mx-0" onClick={() => goToSite("https://x.com/harshm_01")}>
              <div className="h-16 w-16">
                <img src={Myx} alt="" className="w-full h-full" />
              </div>
              <div className="text-white w-full flex items-center justify-center mt-2 laptop:mt-0 tablet:mt-2 laptop:justify-start tablet:justify-center">
                <p className="text-base font-custom1">X</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full px-4 py-8 tablet:w-full">
          <div className="w-full text-text-orange font-custom2 text-xl flex items-center justify-start">
            Drop Me a Message
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full h-[28rem] flex flex-col items-start justify-evenly"
          >
            <div className="w-full flex gap-4 h-10">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-1/2 h-full rounded-full px-4 py-1 font-custom2 bg-form-bg text-form-font placeholder-form-font-light"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-1/2 h-full rounded-full px-4 py-1 font-custom2 bg-form-bg text-form-font placeholder-form-font-light"
                required
              />
            </div>
            <div className="w-full flex gap-4 h-10">
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Your Subject"
                className="w-full h-full rounded-full px-4 py-1 font-custom2 bg-form-bg text-form-font placeholder-form-font-light"
                required
              />
            </div>
            <div className="h-48 w-full">
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="h-full w-full rounded-2xl px-4 py-3 font-custom2 bg-form-bg text-form-font placeholder-form-font-light"
                required
              ></textarea>
            </div>
            <div className="mt-5">
              <button type="submit">
                <div className="w-[11rem] h-10 border border-text-orange text-text-orange hover:bg-text-orange-hover hover:text-white rounded-full flex items-center justify-between">
                  <p className="ml-4 font-custom2 text-sm">Send Message</p>
                  <div className="w-10 h-10 bg-text-orange rounded-full flex items-center justify-center">
                    <img src={Isend} alt="" className="w-6 h-6" />
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-16 text-4xl font-custom1 flex items-center px-14 tablet:px-4 tablet:text-2xl tablet:h-full tablet:py-1">
        <span className="gradient-text py-2">
          Let’s make something amazing together.
        </span>
      </div>
    </main>
  );
}
