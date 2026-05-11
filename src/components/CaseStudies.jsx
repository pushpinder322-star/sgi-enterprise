import React from "react";
import { motion } from "framer-motion";
import "./CaseStudies.css";

export default function CaseStudies() {
  const cases = [
    {
      title: "Multi-Site Infrastructure Modernization",
      industry: "Transportation & Logistics",
      result:
        "Unified network connectivity, surveillance coverage and operational visibility across multiple business locations.",
      metrics: ["Multi-site", "Network + Security", "Centralized Visibility"],
    },
    {
      title: "Managed IT & Security Operations",
      industry: "Retirement & Assisted Living",
      result:
        "Improved technology continuity through managed IT support, monitoring, infrastructure response and security system coordination.",
      metrics: ["Managed IT", "Monitoring", "Continuity"],
    },
    {
      title: "Enterprise Wireless & Network Deployment",
      industry: "Commercial Facilities",
      result:
        "Delivered secure wireless access, switching architecture, VLAN segmentation and scalable connectivity for business operations.",
      metrics: ["Wi-Fi", "Switching", "Segmentation"],
    },
  ];

  return (
    <section className="sgi-case-studies">
      <div className="case-inner">
        <motion.div
          className="case-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
        >
          <p>Enterprise Project Experience</p>
          <h2>Operational environments strengthened through structured infrastructure delivery.</h2>
        </motion.div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <motion.div
              className="case-card"
              key={item.title}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="case-topline">
                <span>{item.industry}</span>
                <small>0{index + 1}</small>
              </div>

              <h3>{item.title}</h3>
              <p>{item.result}</p>

              <div className="case-metrics">
                {item.metrics.map((metric) => (
                  <em key={metric}>{metric}</em>
                ))}
              </div>

              <button>View Project →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}