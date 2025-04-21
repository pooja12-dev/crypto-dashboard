// src/components/FeatureCard.jsx
import React from "react";
import { motion } from "framer-motion";
import "./FeatureCard.css";

export default function FeatureCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay || 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <span className="feature-icon">{icon}</span>
      <div>
        <div className="feature-title">{title}</div>
        <div className="feature-desc">{desc}</div>
      </div>
    </motion.div>
  );
}
