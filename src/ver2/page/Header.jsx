import React, { useState } from "react";
import Clock from "../components/clock";
import img from "../components/image/Screenshot_1.png";
import { BsFillHeartFill } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import useEvenStore from "../../utils/store";

function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const version = useEvenStore((state) => state.version);
  const setVersion = useEvenStore((state) => state.setVersion);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleVersion = () => {
    setVersion(version == 2 ? 1 : 2);
  };

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
          <BsFillHeartFill
            onClick={toggleVersion}
            className="text-[54px] text-white mt-2 mr-10 transition-transform duration-300 hover:scale-125 "
          />

          <SlMenu
            className="text-[56px] text-white mt-1 font-black mr-20 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {showMenu && (
        <div className="absolute top-36 right-10 bg-white p-4">
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
