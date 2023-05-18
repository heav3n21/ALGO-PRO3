import React, { useState } from "react";
import ChatBubble from './ChatBubble'

const NavBar = ({code}) => {
  console.log(`From Navbar: ${code}`)
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [aiResponse, setAiResponse ] = useState("hello")
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [showDropdownLang, setShowDropdownLang] = useState(false);
  const [showDropdownLevel, setShowDropdownLevel] = useState(false);
  const [showDropdownConcept, setShowDropdownConcept] = useState(false);
  const [savedResponse, setSavedResponse] = useState(null);


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

  let choices = `${selectedLanguage} ${selectedLevel} ${selectedConcept}`
  
  const handleSelectedChoices = async (selectedLanguage, selectedLevel, selectedConcept) =>{
if (selectedLanguage == null || selectedLevel == null || selectedConcept == null){
  // console.log("You Must Select a Language, Level and Concept before starting!")
  return "error";
}
let question = `Give me a coding algorithm question. The coding language is ${selectedLanguage}, make the difficulty level ${selectedLevel}, and make the concept on ${selectedConcept}`
const url = window.location.pathname + '/airesponse';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: question}),
    });
    let responseData = await response.json();
    setAiResponse(responseData.data)
    setSavedResponse(responseData.data);
   
    return responseData;
  }



  // if(typeof handleSelectedChoices(selectedLanguage, selectedLevel, selectedConcept) == "object" || handleSelectedChoices(selectedLanguage, selectedLevel, selectedConcept) === "error"){
  
  // } //else {
  // let responseData = handleSelectedChoices(selectedLanguage, selectedLevel, selectedConcept);
  // console.log(responseData);

  // }
const sendResponse = async () =>{
  let aiResponse = savedResponse
  let userCode = `${code}`
  let toAi = `How does my code look? The question was ${aiResponse}. and my code is ${userCode}`
  console.log(toAi);
  const url = window.location.pathname + '/airesponse';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: toAi}),
    });
    let responseData = await response.json();
    setAiResponse(responseData.data)



}
  
  

  return (
    <>
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
                  Selected Choices: {selectedLanguage} {selectedLevel} {selectedConcept}
                  <br />
                  <button onClick={() => handleSelectedChoices(selectedLanguage, selectedLevel, selectedConcept)}>
                  Get Question
                    </button>
              
                  </div>
                  </nav>
                  <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: 0, padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#ffffff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
          Chat
        </div>
        <div style={{ padding: '20px', maxHeight: '400px', overflowY: 'scroll' }}>
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>User 1:</span>
            <div style={{ marginTop: '5px' }}>{aiResponse}</div>
          </div>
          {}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f0f0f0' }}>
         
          <button style={{ marginLeft: '10px', padding: '8px 15px', border: 'none', backgroundColor: '#4caf50',
           color: '#ffffff', borderRadius: '3px', cursor: 'pointer'}} onClick={()=> sendResponse()}> Send</button>
        </div>
      </div>
    </div>
        </>
                  
                 ); };
                  
                  export default NavBar;

               


               

               

               


