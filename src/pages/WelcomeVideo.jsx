// src/pages/WelcomeVideo.jsx
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeVideo.css"; // Create this for styling

export default function WelcomeVideo() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // When video ends, navigate to dashboard
  const handleEnd = () => {
    navigate("/dashboard");
  };

  // Optional: allow SKIP
  const handleSkip = () => {
    if (videoRef.current) videoRef.current.pause();
    navigate("/dashboard");
  };

  return (
    <div className="welcome-video-bg">
      <video
        src="public/original-9624e72c80e0631b8731ba148854464d.mp4" // replace with your filename
        className="welcome-video-player"
        autoPlay
        controls={false}
        ref={videoRef}
        onEnded={handleEnd}
      />
      <button className="welcome-video-skip" onClick={handleSkip}>
        Skip
      </button>
    </div>
  );
}
