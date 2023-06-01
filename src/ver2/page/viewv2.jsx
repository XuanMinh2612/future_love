import React, { useEffect } from "react";
import Headers from "../components/Header";
import Rose from "../components/image/Rose.png";

function Viewer2() {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-6 fixed">
        <Headers />
      </div>
      <div className="flex overflow-x-auto">
        <div className="flex-row flex">
          {[...Array(25)].map((_, index) => (
            <div className="w-[350px] flex justify-center" key={index}>
              <img
                src={Rose}
                alt=""
                className="h-screen w-fit bg-center bg-cover bg-no-repeat"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Viewer2;
