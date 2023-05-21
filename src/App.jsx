import "./App.scss";
import About from "./container/About";
import "./container/tailwincss.css";
import SideBar from "./sideBar/SideBar";
import { NavLink, Route, Routes } from "react-router-dom";
import History from "./container/History";

import ViewResult from "./container/View";
function App() {
  return (
    <div className="App">
      <header className="App-header static">
        <p>Future Love</p>
        <div className="img-love"></div>
      </header>
      <div className="flex flex-row">
        <div className="">
          <SideBar />
        </div>
        <div className="flex justify-center w-screen">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/:id" element={<ViewResult />} />
            <Route path="/" element={<History />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
