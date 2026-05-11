import React from "react";
import { motion } from "framer-motion";
import architectureImg from "../assets/architecture/architecture-1.jpg";
import "./PremiumHero.css";

export default function PremiumHero() {
  return (
    <section className="premium-hero">
      <div className="sgi-hero-orbs">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="enterprise-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-grid"></div>

      <motion.div
        className="hero-glow hero-glow-1"
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-glow hero-glow-2"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="premium-hero-inner">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9 }}
        >
          <p>Enterprise IT • Network • Security • Automation</p>

          <h1>
            Enterprise infrastructure engineered for secure, resilient operations.
          </h1>

          <span>
            SGI designs, deploys and manages enterprise-grade IT, networking,
            cybersecurity and physical security environments that improve
            operational continuity, visibility and long-term infrastructure
            performance.
          </span>

          <div className="hero-buttons">
            <button>Schedule Infrastructure Assessment</button>
            <button className="hero-outline">
              Explore Enterprise Solutions
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
        >
          <div className="hero-enterprise-image">
            <img
              src={architectureImg}
              alt="Enterprise infrastructure architecture"
            />

            <div className="hero-image-overlay">
              <span>Operational Infrastructure</span>
              <h3>Integrated enterprise environments built for resilience.</h3>
            </div>
          </div>

          <motion.div
            className="hero-panel large"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <strong>Operational Visibility</strong>
            <p>
              Integrated monitoring, infrastructure analytics and multi-site
              operational management.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}