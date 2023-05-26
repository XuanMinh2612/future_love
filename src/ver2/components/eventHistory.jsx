import React from "react";
import girl from "./image/girl.jpg";
import heart from "./image/Vector.png";
import { AiFillHeart } from "react-icons/ai";

function EventHistory() {
  return (
    <div className="w-[900px] h-96 bg-white rounded-[36px]">
      {/* image love */}
      <div className="flex flex-col">
        <img src={girl} alt="" className="w-32 h-32 rounded-[50%] bg-red-400" />
        <AiFillHeart className="text-[#FF9F9F] text-6xl" />
        <img src={girl} alt="" className="w-32 h-32 rounded-[50%] bg-red-400" />
      </div>
      {/* image swap */}
      <img src="" alt="" />
      {/* frist event  */}
      <div></div>
    </div>
  );
}

export default EventHistory;
