import React from "react";
import Ihome from "../assets/images/icons/home.svg";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="w-screen h-16 bg-black flex items-center justify-between tablet:h-full tablet:py-3 relative z-100">
      <div className="text-base text-white px-8 tablet:px-2">
        Copyright &#169; 2024 by Harsh Maurya | All Rights Reserved.
      </div>
      <Link to="home" smooth={true} duration={800} className="cursor-pointer">
        <div className="h-10 w-10 bg-btn-color-3 hover:bg-btn-color-3-hover mx-16 tablet:mx-4 rounded-md flex items-center justify-center">
          <img src={Ihome} alt="" className="w-4 h-4" />
        </div>
      </Link>
    </footer>
  );
}
