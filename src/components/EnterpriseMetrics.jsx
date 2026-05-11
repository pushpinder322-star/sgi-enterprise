import React from "react";
import { motion } from "framer-motion";
import "./EnterpriseMetrics.css";

export default function EnterpriseMetrics() {
  const metrics = [
    {
      value: "24/7",
      label: "Infrastructure Monitoring",
    },
    {
      value: "99.9%",
      label: "Operational Uptime Focus",
    },
    {
      value: "Multi-Site",
      label: "Deployment Capability",
    },
    {
      value: "Enterprise",
      label: "Network Architecture",
    },
  ];

  return (
    <section className="sgi-metrics">
      <div className="metrics-inner">
        {metrics.map((item, index) => (
          <motion.div
            className="metric-card"
            key={item.label}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <h2>{item.value}</h2>

            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}