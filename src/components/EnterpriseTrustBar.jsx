import React from "react";
import "./EnterpriseTrustBar.css";

export default function EnterpriseTrustBar() {
  const items = [
    ["24/7", "Monitoring-ready infrastructure"],
    ["Multi-Site", "Designed for distributed operations"],
    ["Secure", "Network, cloud and physical security"],
    ["Continuity", "Built around uptime and resilience"],
  ];

  return (
    <section className="enterprise-trust-bar">
      <div className="enterprise-trust-inner">
        {items.map(([label, text]) => (
          <div className="enterprise-trust-item" key={label}>
            <strong>{label}</strong>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}