// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="app-background">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
