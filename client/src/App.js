import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage"
import Footer from "./components/Footer"
import Login from "./pages/Loginpage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Homepage />}/>
        <Route exact path="/login" element={<Login/>}/>
     
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
