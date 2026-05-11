import React from "react";
import architecture1 from "../assets/architecture/architecture-1.jpg";
import "./InfrastructureShowcase.css";

export default function InfrastructureShowcase() {
  return (
    <section className="sgi-showcase">
      <div
        className="showcase-image"
        style={{ backgroundImage: `url(${architecture1})` }}
      >
        <div className="showcase-overlay"></div>
        <div className="sgi-media-scan"></div>

        <div className="showcase-content">
          <div className="showcase-left">
            <p>Enterprise Infrastructure Architecture</p>

            <h2>
              Designed for uptime, visibility and operational continuity.
            </h2>

            <span>
              SGI builds integrated technology environments combining
              networking, cybersecurity, cloud, surveillance, access control
              and managed operations into one unified infrastructure layer.
            </span>
          </div>

          <div className="showcase-right">
            <div className="showcase-card">
              <strong>Network Core</strong>
              <p>
                Enterprise switching, routing, VLAN segmentation and secure
                multi-site connectivity.
              </p>
            </div>

            <div className="showcase-card">
              <strong>Security Layer</strong>
              <p>
                Surveillance, access control, cybersecurity monitoring and
                integrated protection systems.
              </p>
            </div>

            <div className="showcase-card">
              <strong>Operational Continuity</strong>
              <p>
                Managed services, monitoring, support and resilient business
                infrastructure strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}