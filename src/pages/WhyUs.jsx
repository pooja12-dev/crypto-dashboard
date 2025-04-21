// src/pages/WhyUs.jsx
import React from "react";
import FeatureCard from "../components/FeatureCard";
import { motion } from "framer-motion";
import "./WhyUs.css";

const features = [
  {
    icon: "👁️",
    title: "Clarity",
    desc: "We help you make sense of the coins, the terms, the dense charts and market changes.",
  },
  {
    icon: "🛡️",
    title: "Confidence",
    desc: "Our markets are always up to date, sparking curiosity with real-world relevance.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "We support the crypto community, putting data in the hands which need it most.",
  },
];

const stats = [
  { icon: "🌍", value: "198+", label: "Countries" },
  { icon: "💹", value: "350+", label: "Trading Pairs" },
  { icon: "👥", value: "20 million+", label: "Traders" },
];

export default function WhyUs() {
  return (
    <div className="whyus-section">
      <motion.div
        className="whyus-stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7 }}
      >
        <div className="whyus-map-bg">
          {/* Add more animated icons here! */}
          {stats.map((stat, idx) => (
            <motion.div
              className="whyus-stat-card"
              key={stat.label}
              whileHover={{ scale: 1.05, rotate: 2 }}
              style={{ top: `${27 + idx * 15}%`, left: `${7 + idx * 25}%` }}
            >
              <span className="whyus-stat-icon">{stat.icon}</span>
              <span className="whyus-stat-value">{stat.value}</span>
              <span className="whyus-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="whyus-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2>We are the most trusted cryptocurrency platform.</h2>
        <p className="whyus-subtitle">
          We believe DemoExchange is here to stay — and that a future worth
          building is one which opens its doors and invites everyone in.
        </p>
        <div className="whyus-features">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.12} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
