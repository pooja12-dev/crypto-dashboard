import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Client, Account } from "appwrite";
import "./Home.css";

const HERO_IMAGE_URL = "https://same-assets.com/crypto-dashboard-hero-dark.png";

export default function Home() {
  const navigate = useNavigate();

  // Initialize Appwrite client
  const client = new Client();
  const account = new Account(client);

  client
    .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
    .setProject("68039e44001ea9eec8bf"); // Replace with your project ID

  const handleGoogleLogin = async () => {
    try {
      // Initiate OAuth login
      account.createOAuth2Session(
        "google",
        "http://localhost:3000/dashboard",
        "http://localhost:3000"
      );
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  return (
    <div className="home-hero">
      <div className="home-hero-content">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          The world's most secure trading platform.
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Join the fastest growing global cryptocurrency exchange with the
          lowest fees around.
        </motion.p>
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="home-cta-btn"
          >
            Start trading
          </motion.button>
        </Link>
        <motion.button
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-full bg-white transition-colors duration-150 focus:outline-none"
          style={{
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            fontFamily: "Roboto, Arial, sans-serif",
            width: "240px",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "18px",
              width: "18px",
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </span>
          <span
            className="text-gray-800 text-base font-medium leading-tight select-none"
            style={{ fontFamily: "Roboto, Arial, sans-serif" }}
          >
            Sign in with Google
          </span>
        </motion.button>
      </div>
    </div>
  );
}
