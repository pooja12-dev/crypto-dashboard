// src/pages/SignIn.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const validateFields = () => {
    let hasErrors = false;

    if (!email) {
      setEmailError("This field is required.");
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      hasErrors = true;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("This field is required.");
      hasErrors = true;
    } else {
      setPasswordError("");
    }

    return !hasErrors;
  };

  return (
    <div className="auth-bg">
      <motion.form
        className="auth-card"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => {
          e.preventDefault();
          const isValid = validateFields();
          if (isValid) {
            navigate("/dashboard");
          }
        }}
      >
        <div className="auth-logo">DemoExchange</div>
        <div className="auth-subtitle">Welcome back! Login to DemoExchange</div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter your email address"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <span className="error-text">{emailError}</span>}
        </div>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          <span className="show-eye" onClick={() => setShowPassword((v) => !v)}>
            {showPassword ? "🙈" : "👁️"}
          </span>
          {passwordError && <span className="error-text">{passwordError}</span>}
        </div>
        <motion.button
          type="submit"
          className="auth-btn"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Sign In Now
        </motion.button>
        <div className="auth-footer">
          Haven't an account? <Link to="/signup">Sign up for free</Link>
        </div>
      </motion.form>
    </div>
  );
}
