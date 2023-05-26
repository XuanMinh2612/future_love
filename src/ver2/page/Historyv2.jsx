import React from "react";
import Header from "./Header";
import EventHistory from "../components/eventHistory";
import Comments from "../components/comments";

function Historyv2() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-custom-pink to-custom-red h-screen p-10">
      <Header />
      <div className="flex flex-row justify-between">
        <div className="w-3/6">
          <EventHistory />
        </div>
        <div className="w-2/6 mr-40">
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default Historyv2;
