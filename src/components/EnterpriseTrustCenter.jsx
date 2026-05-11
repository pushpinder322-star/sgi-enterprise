import React from "react";
import { motion } from "framer-motion";
import "./EnterpriseTrustCenter.css";

export default function EnterpriseTrustCenter() {
  const trustItems = [
    {
      title: "Structured Deployment",
      text: "Infrastructure deployment workflows designed around operational continuity, validation and long-term scalability.",
    },
    {
      title: "Operational Visibility",
      text: "Monitoring-ready environments with centralized infrastructure awareness and support visibility.",
    },
    {
      title: "Lifecycle Support",
      text: "Long-term infrastructure management, operational assistance and support continuity for evolving business environments.",
    },
    {
      title: "Infrastructure Standards",
      text: "Enterprise-focused networking, security and operational methodologies aligned with scalable deployment practices.",
    },
  ];

  return (
    <section className="enterprise-trust-center">
      <div className="trust-center-inner">

        <motion.div
          className="trust-center-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Enterprise Trust Layer</p>

          <h2>
            Infrastructure delivery designed around reliability,
            operational continuity and long-term support.
          </h2>
        </motion.div>

        <div className="trust-center-grid">
          {trustItems.map((item, index) => (
            <motion.div
              className="trust-center-card"
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <span>0{index + 1}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}