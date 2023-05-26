import React from "react";
import Clock from "../components/clock";
import img from "../components/image/Screenshot_1.png";
import { BsFillHeartFill } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";

function Header() {
  return (
    <div className="w-screen h-40">
      <div className="flex flex-row items-center justify-between ">
        <Clock className="" />
        <div className="flex flex-row">
          <img src={img} alt="" className="w-28 h-24" />
          <p className="text-8xl text-white">Future Love</p>
          <img src={img} alt="" className="w-28 h-24" />
        </div>
        <div className="flex flex-row">
          <BsFillHeartFill className="text-[54px] text-white mt-2 mr-10" />
          <SlMenu className="text-[56px] text-white mt-1 font-black mr-20" />
        </div>
      </div>
    </div>
  );
}

export default Header;
