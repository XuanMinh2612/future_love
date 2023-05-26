import React, { useEffect, useState } from "react";

function Clock() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const countdownDate = localStorage.getItem("countdownDate");
    if (countdownDate) {
      startCountdown(new Date(countdownDate));
    } else {
      const currentDate = new Date();
      localStorage.setItem("countdownDate", currentDate);
      startCountdown(currentDate);
    }
  }, []);

  const startCountdown = (startDate) => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate.getTime();

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  };
  return (
    <div className="flex flex-row ">
      <div className="w-[67.95px] h-[56px] relative mx-2">
        <div className="w-full h-1/2 bg-white absolute top-0 rounded-[8px] flex items-end justify-between">
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute left-2 bottom-1"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute right-2 bottom-1"></div>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 h-full flex justify-center items-center">
          <span className="text-[#FF2C61] text-[50px] mb-3">
            {countdown.days}
          </span>
        </div>
        <div className="w-full bg-[#24475b] absolute h-[2px] top-[calc(50%-1px)] z-10">
          <div className="absolute bg-[#24475b] h-2 w-2 rounded-full -left-1 -top-1"></div>
          <div className="absolute bg-[#24475b] h-2 w-2 rounded-full -right-1 -top-1"></div>
        </div>
        <div className="w-full h-1/2 bg-white absolute bottom-0 rounded-[8px] flex items-end justify-between">
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute left-2 top-1"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute right-2 top-1"></div>
        </div>
      </div>
      <div className="w-[67.95px] h-[56px] relative mx-2">
        <div className="w-full h-1/2 bg-white absolute top-0 rounded-[8px] flex items-end justify-between">
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute left-2 bottom-1"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute right-2 bottom-1"></div>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 h-full flex justify-center items-center">
          <span className="text-[#FF2C61] text-[50px] mb-3">
            {countdown.hours}
          </span>
        </div>
        <div className="w-full bg-[#24475b] absolute h-[2px] top-[calc(50%-1px)] z-10">
          <div className="absolute bg-[#24475b] h-2 w-2 rounded-full -left-1 -top-1"></div>
          <div className="absolute bg-[#24475b] h-2 w-2 rounded-full -right-1 -top-1"></div>
        </div>
        <div className="w-full h-1/2 bg-white absolute bottom-0 rounded-[8px] flex items-end justify-between">
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute left-2 top-1"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute right-2 top-1"></div>
        </div>
      </div>
      <div className="w-[67.95px] h-[56px] relative mx-2">
        <div className="w-full h-1/2 bg-white absolute top-0 rounded-[8px] flex items-end justify-between">
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute left-2 bottom-1"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute right-2 bottom-1"></div>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 h-full flex justify-center items-center">
          <span className="text-[#FF2C61] text-[50px] mb-3">
            {countdown.minutes}
          </span>
        </div>
        <div className="w-full bg-[#24475b] absolute h-[2px] top-[calc(50%-1px)] z-10">
          <div className="absolute bg-[#24475b] h-2 w-2 rounded-full -left-1 -top-1"></div>
          <div className="absolute bg-[#24475b] h-2 w-2 rounded-full -right-1 -top-1"></div>
        </div>
        <div className="w-full h-1/2 bg-white absolute bottom-0 rounded-[8px] flex items-end justify-between">
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute left-2 top-1"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute right-2 top-1"></div>
        </div>
      </div>
      <div className="w-[67.95px] h-[56px] relative mx-2">
        <div className="w-full h-1/2 bg-white absolute top-0 rounded-[8px] flex items-end justify-between">
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute left-2 bottom-1"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute right-2 bottom-1"></div>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 h-full flex justify-center items-center">
          <span className="text-[#FF2C61] text-[50px] mb-3">
            {countdown.seconds}
          </span>
        </div>
        <div className="w-full bg-[#24475b] absolute h-[2px] top-[calc(50%-1px)] z-10">
          <div className="absolute bg-[#24475b] h-2 w-2 rounded-full -left-1 -top-1"></div>
          <div className="absolute bg-[#24475b] h-2 w-2 rounded-full -right-1 -top-1"></div>
        </div>
        <div className="w-full h-1/2 bg-white absolute bottom-0 rounded-[8px] flex items-end justify-between">
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute left-2 top-1"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#24475b] absolute right-2 top-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
