import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [tncChecked, setTncChecked] = useState(false);
  const [tncError, setTncError] = useState("");
  const [generalError, setGeneralError] = useState(""); // For existing user error
  const navigate = useNavigate();

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!value) {
      return "This field is required.";
    } else if (!emailRegex.test(value)) {
      return "Please enter a valid Gmail address.";
    }
    return "";
  };

  const checkPasswordStrength = (value) => {
    if (!value) {
      setPasswordStrength("");
    } else if (value.length < 6) {
      setPasswordStrength("Weak");
    } else if (
      value.match(/[A-Za-z]/) &&
      value.match(/[0-9]/) &&
      value.match(/[!@#$%^&*]/)
    ) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Medium");
    }
  };

  const validateFields = () => {
    let hasErrors = false;

    if (!name) {
      setNameError("This field is required.");
      hasErrors = true;
    } else {
      setNameError("");
    }

    const emailValidationError = validateEmail(email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
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

    if (!confirmPassword) {
      setConfirmPasswordError("This field is required.");
      hasErrors = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      hasErrors = true;
    } else {
      setConfirmPasswordError("");
    }

    if (!tncChecked) {
      setTncError("You must agree to the terms and conditions.");
      hasErrors = true;
    } else {
      setTncError("");
    }

    return !hasErrors;
  };

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setGeneralError("User already exists with this email.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Navigate to dashboard after successful signup
    navigate("/dashboard");
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
            handleSignUp();
          }
        }}
      >
        <div className="auth-logo">DemoExchange</div>
        <div className="auth-subtitle">
          Let's get started by filling out the form
        </div>
        {generalError && <div className="error-text">{generalError}</div>}
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
            autoComplete="off"
          />
          {nameError && <span className="error-text">{nameError}</span>}
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
              setGeneralError(""); // Clear general error on input change
            }}
            autoComplete="off"
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
              checkPasswordStrength(e.target.value);
              setPasswordError("");
            }}
          />
          <span className="show-eye" onClick={() => setShowPassword((v) => !v)}>
            {showPassword ? "🙈" : "👁️"}
          </span>
          <span className="password-strength">{passwordStrength}</span>
          {passwordError && <span className="error-text">{passwordError}</span>}
        </div>
        <div className="input-group">
          <input
            type={showPassword2 ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError("");
            }}
          />
          <span
            className="show-eye"
            onClick={() => setShowPassword2((v) => !v)}
          >
            {showPassword2 ? "🙈" : "👁️"}
          </span>
          {confirmPasswordError && (
            <span className="error-text">{confirmPasswordError}</span>
          )}
        </div>
        <div className="auth-checkbox">
          <input
            type="checkbox"
            id="tnc"
            checked={tncChecked}
            onChange={(e) => {
              setTncChecked(e.target.checked);
              setTncError("");
            }}
          />
          <label htmlFor="tnc">
            I agree to the <a href="/">Terms and Conditions</a>
          </label>
          {tncError && <span className="error-text">{tncError}</span>}
        </div>
        <motion.button
          type="submit"
          className="auth-btn"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Sign Up Now
        </motion.button>
        <div className="auth-footer">
          Already have an account? <Link to="/signin">Sign in now</Link>
        </div>
      </motion.form>
    </div>
  );
}
