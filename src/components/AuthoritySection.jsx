import React from "react";
import "./AuthoritySection.css";

export default function AuthoritySection() {
  return (
    <section className="sgi-authority">
      <div className="authority-inner">
        <div className="authority-left">
          <p className="authority-eyebrow">Enterprise Delivery Model</p>
          <h2>From installation work to structured infrastructure delivery.</h2>
          <span>
            SGI combines field deployment, network engineering, managed IT,
            physical security and long-term support into one operational model.
          </span>
        </div>

        <div className="authority-grid">
          {[
            ["Assessment Framework", "Site review, risk discovery, infrastructure audit and business requirement mapping."],
            ["Architecture Planning", "Network, security, cloud and physical systems designed before deployment begins."],
            ["Deployment Governance", "Structured rollout with documentation, configuration control and staged implementation."],
            ["Managed Continuity", "Monitoring, support, lifecycle upgrades and ongoing operational improvement."]
          ].map(([title, text]) => (
            <div className="authority-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}