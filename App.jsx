import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/hero"; 
import Exam from "./Pages/Exam";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



