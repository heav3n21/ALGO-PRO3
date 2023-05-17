import React, { useState } from "react";

const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [showDropdownLang, setShowDropdownLang] = useState(false);
  const [showDropdownLevel, setShowDropdownLevel] = useState(false);
  const [showDropdownConcept, setShowDropdownConcept] = useState(false);

  const toggleDropdownLang = () => {
    setShowDropdownLang(!showDropdownLang);
  };

  const toggleDropdownLevel = () => {
    setShowDropdownLevel(!showDropdownLevel);
  };

  const toggleDropdownConcept = () => {
    setShowDropdownConcept(!showDropdownConcept);
  };

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language === selectedLanguage ? null : language);
    toggleDropdownLang();
  };

  const handleLevelSelection = (level) => {
    setSelectedLevel(level === selectedLevel ? null : level);
    toggleDropdownLevel();
  };

  const handleConceptSelection = (concept) => {
    setSelectedConcept(concept === selectedConcept ? null : concept);
    toggleDropdownConcept();
  };

  return (
    <nav style={{ backgroundColor: "#000", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="relative">
          <button
            className="language"
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
            {selectedLanguage ? selectedLanguage : "Languages"} ▼
          </button>
          {showDropdownLang && (
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
                <a
                  style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer" }}
                  onClick={() => handleLanguageSelection("JavaScript")}
                >
                  JavaScript
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer" }}
                  onClick={() => handleLanguageSelection("Python")}
                >
                  Python
                </a>
              </li>
              {/* Add other language options */}
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
            onClick={toggleDropdownLevel}
          >
            {selectedLevel ? selectedLevel : "Difficulty Level"} ▼
          </button>
          {showDropdownLevel && (
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
                <a
                  style={{ textDecoration : "none", color: "#fff", zIndex: "9999", cursor: "pointer" }}
                  onClick={() => handleLevelSelection("Beginner")}
                  >
                  Beginner
                  </a>
                  </li>
                  <li>
                  <a
                  style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer" }}
                  onClick={() => handleLevelSelection("Intermediate")}
                  >
                  Intermediate
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
                  onClick={toggleDropdownConcept}
                  >
                  {selectedConcept ? selectedConcept : "Concept"} ▼
                  </button>
                  {showDropdownConcept && (
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
                  <a
                  style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer" }}
                  onClick={() => handleConceptSelection("Functions")}
                  >
                  Functions
                  </a>
                  </li>
                  <li>
                  <a
                  style={{ textDecoration: "none", color: "#fff", zIndex: "9999", cursor: "pointer" }}
                  onClick={() => handleConceptSelection("Arrays")}
                  >
                  Arrays
                  </a>
                  </li>
                
                  </ul>
                  )}
                  </div>
                  </div>
                  <div style={{ marginTop: "10px", color: "#fff" }}>
                  Selected Choices: {selectedLanguage}, {selectedLevel}, {selectedConcept}
                  </div>
                  </nav>
                  );
                  };
                  
                  export default NavBar;

               


