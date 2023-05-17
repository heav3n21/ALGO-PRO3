import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import CHAT from "../src/components/CHAT";

function App() {
  return (
    <Router>
      <nav>
      <div className="flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white  nav--bar">
        <h1 className="w-full text-3xl font-bold primary--text--color">
          CODE CLUB
        </h1>
        <ul className="hidden md:flex">
          <li>
            <Link className="p-4" to="/">HOME</Link>
            <Link className="p-4">LOGIN</Link>
                <Link className="p-4" to="/chat">CHALLENGE</Link>
              <Link className="p-4">CONTACT</Link>
          </li>
        </ul>
        {/* <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                
            </div> */}

        <div className=""></div>
      </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<CHAT />} />
        {/* <Route path="/login" element={<Login />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
