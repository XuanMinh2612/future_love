import { NavLink, Route, Routes } from "react-router-dom";
import About from "../container/About";
import Happy from "../container/Happy";
import Sad from "../container/Sad";
import NewStart from "../container/NewStart";
import Shopping from "../container/Shopping";
import Ending from "../container/Enading";

import "./SideBar.scss";
import ViewResult from "../container/View";

function SideBar() {
  return (
    <div className="wrapper-side-bar">
      <div className="side-bar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Happy"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Sad"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sad
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Shopping"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Shopping
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/NewStart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              New Start
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Ending"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Ending
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
