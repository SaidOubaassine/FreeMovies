import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Start from "./component/pages/Start";
import Movies from "./component/pages/Movies";
import Home from "./component/pages/Home";
import Top from "./component/pages/Top";
import Tv from "./component/pages/Tv";
import logo from "./assets/logo.png";
import "./App.css";
function App() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(1170);
  function toHome() {
    setWidth(1170);
    navigate("./");
  }
  return (
    <div className="app">
      <div className="header-container">
        <div className="header" style={{ width: width }}>
          <div className="logo" onClick={toHome}>
            <img src={logo} alt="Logo" />
            <span>Freemoviesfull.cc</span>
          </div>
          {window.location.pathname === "/" && (
            <ul className="right-header">
              <li>
                <Link
                  to="/home"
                  onClick={() => {
                    setWidth(1270);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  onClick={() => {
                    setWidth(1270);
                  }}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/tv"
                  onClick={() => {
                    setWidth(1270);
                  }}
                >
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/top"
                  onClick={() => {
                    setWidth(1270);
                  }}
                >
                  Top IMDB
                </Link>
              </li>
            </ul>
          )}
          {window.location.pathname !== "/" && (
            <div className="right-header1">
              <div className="section1">
                <button className="browse">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
                    />
                  </svg>
                  <span>Browse</span>
                </button>
                <div className="search">
                  <input type="text" placeholder="Enter kaywords..." />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                    />
                    <circle cx="12" cy="7" r="3" />
                  </g>
                </svg>
                <span>Login</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="/top" element={<Top />}></Route>
      </Routes>
    </div>
  );
}
export default App;
