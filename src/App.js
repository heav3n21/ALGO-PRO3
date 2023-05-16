import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
