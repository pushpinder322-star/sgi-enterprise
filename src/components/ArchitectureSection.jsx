import React from "react";
import { motion } from "framer-motion";
import "./ArchitectureSection.css";

export default function ArchitectureSection() {
  const nodes = [
    {
      className: "top-left",
      title: "Network Fabric",
      text: "Enterprise switching, routing, VLAN segmentation, managed wireless and resilient site connectivity.",
      tag: "Connectivity",
      delay: 0.1,
    },
    {
      className: "top-right",
      title: "Security Stack",
      text: "Surveillance, access control, cybersecurity coordination and physical security systems working together.",
      tag: "Protection",
      delay: 0.2,
    },
    {
      className: "bottom-left",
      title: "Cloud Continuity",
      text: "Backup, remote access, centralized visibility and scalable infrastructure operations.",
      tag: "Resilience",
      delay: 0.3,
    },
    {
      className: "bottom-right",
      title: "Managed Operations",
      text: "Monitoring, support, lifecycle management and proactive infrastructure response.",
      tag: "Support",
      delay: 0.4,
    },
  ];

  return (
    <section className="sgi-architecture">
      <div className="architecture-inner">
        <motion.div
          className="architecture-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
        >
          <p>Enterprise Infrastructure Ecosystem</p>

          <h2>
            One connected architecture for IT, networking, security and
            business continuity.
          </h2>
        </motion.div>

        <div className="architecture-diagram">
          <motion.div
            className="architecture-core"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="core-circle">
              <span>SGI CORE</span>
              <small>Managed Infrastructure</small>
            </div>
          </motion.div>

          {nodes.map((node) => (
            <motion.div
              key={node.title}
              className={`architecture-node ${node.className}`}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: node.delay }}
              viewport={{ once: true }}
            >
              <span className="architecture-tag">{node.tag}</span>
              <strong>{node.title}</strong>
              <p>{node.text}</p>
            </motion.div>
          ))}

          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
        </div>
      </div>
    </section>
  );
}