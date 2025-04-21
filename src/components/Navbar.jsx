// src/components/NavBar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css"; // Import your CSS file for styling

export default function NavBar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Substitute your logo here */}
        <span className="logo-icon">🪙</span>
        <span>DemoExchange</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/whyus"
            className={location.pathname === "/whyus" ? "active" : ""}
          >
            Why Us
          </Link>
        </li>
        <li>
          <Link
            to="/signin"
            className={location.pathname === "/signin" ? "active" : ""}
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
