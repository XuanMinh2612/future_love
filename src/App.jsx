import "./App.scss";
import About from "./container/About";
import "./container/tailwincss.css";
import SideBar from "./container/SideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import History from "./container/History";
import ViewResult from "./container/View";
import useEvenStore from "./utils/store";
import Historyv2 from "./ver2/page/Historyv2";
import Home from "./ver2/page/Home";
import View from "./ver2/page/viewv2";

function App() {
  const version = useEvenStore((state) => state.version);
  const setVersion = useEvenStore((state) => state.setVersion);
  const navigate = useNavigate();
  const toggleVersion = () => {
    setVersion(version === 2 ? 1 : 2);
    navigate("/");
  };

  return version === 1 ? (
    <div className="App">
      <header className="App-header static">
        <p>Future Love</p>
        <div className="img-love" onClick={toggleVersion}></div>

        <div className="absolute right-10"></div>
      </header>
      <div className="flex flex-row">
        <div className="">
          <SideBar />
        </div>
        <div className="flex justify-center w-screen">
          <Routes>
            <Route path="/Home" element={<About />} />
            <Route path="/:id" element={<ViewResult />} />
            <Route path="/" element={<History />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Historyv2 />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/View" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
