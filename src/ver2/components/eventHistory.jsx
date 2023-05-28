import React from "react";
import girl from "./image/girl.jpg";
import { AiFillHeart } from "react-icons/ai";

function EventHistory() {
  return (
    <div className="w-[900px] max-h-full">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-[900px] h-96 bg-white rounded-[36px] flex flex-row justify-around ${
            index > 0 ? "mt-12" : ""
          }`}
        >
          {/* image love */}
          <div className="flex flex-col w-40 h-[100%] justify-center items-center">
            <img
              src={girl}
              alt=""
              className="w-44 h-40 rounded-[50%] bg-red-400"
            />
            <AiFillHeart className="text-[#FF9F9F] text-8xl absolute" />
            <img
              src={girl}
              alt=""
              className="w-44 h-40 rounded-[50%] bg-red-400"
            />
          </div>
          {/* image swap */}
          <img src={girl} alt="" className="rounded-[30px] p-6" />
          {/* first event */}
          <div className="flex flex-col p-7">
            <span className="text-6xl">First Date</span>
            <p className="text-3xl font-[Montserrat] max-w-lg pt-3">
              Our first date was a mix of nervousness and excitement. We shared
              stories, laughed, and felt a growing connection
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventHistory;
