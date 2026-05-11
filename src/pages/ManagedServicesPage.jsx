import { useEffect } from "react";

export default function ManagedServicesPage({ setPage }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    "Managed IT Support",
    "Network Monitoring",
    "Security Monitoring",
    "Microsoft 365 Administration",
    "Endpoint Support",
    "Preventive Maintenance",
    "SLA-Based Response",
    "Ongoing Optimization",
  ];

  return (
    <main className="sgi-page">
      <section className="sgi-detail-hero">
        <div className="sgi-detail-overlay" />

        <div className="sgi-detail-inner">
          <button className="sgi-back-btn" onClick={() => setPage("home")}>
            ← Back to Home
          </button>

          <p>Managed Services</p>

          <h1>
            Ongoing infrastructure management for modern business operations.
          </h1>

          <span>
            SGI supports organizations beyond deployment through proactive
            monitoring, lifecycle management, maintenance, optimization and
            operational support.
          </span>
        </div>
      </section>

      <section className="sgi-managed-visual">
        <div className="sgi-managed-grid">
          <div className="sgi-managed-left">
            <p>Managed Operations Model</p>

            <h2>
              Continuous support designed around uptime, visibility and response.
            </h2>

            <span>
              SGI combines IT support, network management, monitoring,
              documentation and operational continuity into one centralized
              managed service framework.
            </span>

            <div className="sgi-managed-mini-grid">
              <div>
                <strong>24/7</strong>
                <span>Monitoring</span>
              </div>

              <div>
                <strong>SLA</strong>
                <span>Response Model</span>
              </div>

              <div>
                <strong>Lifecycle</strong>
                <span>Optimization</span>
              </div>
            </div>
          </div>

          <div className="sgi-managed-right">
            <div className="sgi-managed-core">
              <span>SGI NOC</span>
            </div>

            <div className="sgi-managed-node node-a">
              Monitoring
            </div>

            <div className="sgi-managed-node node-b">
              Support
            </div>

            <div className="sgi-managed-node node-c">
              Security
            </div>

            <div className="sgi-managed-node node-d">
              Optimization
            </div>

            <div className="sgi-managed-line line-1"></div>
            <div className="sgi-managed-line line-2"></div>
            <div className="sgi-managed-line line-3"></div>
            <div className="sgi-managed-line line-4"></div>
          </div>
        </div>
      </section>

      <section className="sgi-content-section">
        <div className="sgi-section-heading">
          <p>Service Model</p>

          <h2>
            Managed operational support built for continuity and stability.
          </h2>
        </div>

        <div className="sgi-services-grid">
          {items.map((item) => (
            <div className="sgi-service-item" key={item}>
              <h3>{item}</h3>
              <span>Managed capability</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sgi-process-section">
        <div className="sgi-section-heading">
          <p>Support Workflow</p>

          <h2>
            A structured operational framework for proactive infrastructure
            management.
          </h2>
        </div>

        <div className="sgi-process-grid">
          {[
            [
              "01",
              "Monitor",
              "Track infrastructure health, alerts, connectivity and operational status.",
            ],
            [
              "02",
              "Respond",
              "Provide structured support, troubleshooting and escalation handling.",
            ],
            [
              "03",
              "Optimize",
              "Review performance, improve stability and maintain infrastructure efficiency.",
            ],
            [
              "04",
              "Report",
              "Maintain documentation, visibility and operational recommendations.",
            ],
          ].map(([number, title, text]) => (
            <div className="sgi-process-card" key={title}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sgi-final-cta">
        <div className="sgi-final-cta-inner">
          <p>Managed Infrastructure</p>

          <h2>
            Reduce operational stress with proactive technology management.
          </h2>

          <span>
            SGI helps organizations maintain reliable, secure and scalable
            infrastructure through long-term managed operational support.
          </span>

          <div className="sgi-final-cta-buttons">
            <button>Request Assessment</button>
            <button className="sgi-outline-btn">Talk to SGI</button>
          </div>
        </div>
      </section>
    </main>
  );
}