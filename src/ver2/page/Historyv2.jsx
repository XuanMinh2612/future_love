import React from "react";
import Header from "./Header";
import EventHistory from "../components/eventHistory";
import Comments from "../components/comments";

function Historyv2() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-custom-pink to-custom-red p-10">
      <Header />
      <div className="flex flex-row justify-around">
        <EventHistory />
        <Comments />
      </div>
    </div>
  );
}

export default Historyv2;
