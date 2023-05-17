import React, { useState } from "react";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdownLang = () => {
    setShowDropdown(!showDropdown);
  };



  return (
    <nav style={{ backgroundColor: "#000", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="relative">
          <button
            style={{
              color: "#fff",
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              padding: "5px",
            }}
            onClick={toggleDropdownLang}
          >
            Languages ▼
          </button>
          {showDropdown && (
            <ul
              style={{
                position: "absolute",
                backgroundColor: "#333",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                top: "100%",
                left: "0",
                zIndex: "9999",
              }}
            >
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer", }}>
                  JavaScript
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  Python
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  C++
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  Java
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  Ruby
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  SQL
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  PHP
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="relative">
          <button
            style={{
              color: "#fff",
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              padding: "5px",
            }}
            // onClick={toggleDropdown}
          >
            Difficulty Level ▼
          </button>
          {showDropdown && (
            <ul
              style={{
                position: "absolute",
                backgroundColor: "#333",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                top: "100%",
                left: "0",
                zIndex: "9999",
              }}
            >
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  Beginner
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  Intermediate
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  Diffcult
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                  Pro-Level
                </a>
              </li>
              
            </ul>
          )}
        </div>
        <div className="relative">
          <button
            style={{
              color: "#fff",
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              padding: "5px",
            }}
            // onClick={toggleDropdown}
          >
            Concepts ▼
          </button>
          {showDropdown && (
            <ul
              style={{
                position: "absolute",
                backgroundColor: "#333",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                top: "100%",
                left: "0",
                zIndex: "9999",
              }}
            >
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                Algorithm Challenge
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                Data Structures
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer",}}>
                OOP (Object Oriented Programming)
                </a>
              </li>
              Database Related Questions
             
            </ul>
            
          )}
          <button style={{ color: "#fff", fontSize: "20px", fontWeight: "bold", textDecoration: "none" }}>
          Generate Question
        </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

