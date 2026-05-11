import { useEffect } from "react";
import { servicesData } from "../data/servicesData";

export default function ServicePage({ serviceKey, setPage }) {
  const service = servicesData[serviceKey];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceKey]);

  if (!service) {
    return (
      <main className="sgi-page">
        <section className="sgi-detail-hero">
          <div className="sgi-detail-inner">
            <button className="sgi-back-btn" onClick={() => setPage("home")}>
              ← Back to Home
            </button>
            <h1>Service Coming Soon</h1>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="sgi-page">
      <section className="sgi-detail-hero">
        <div className="sgi-detail-overlay" />

        <div className="sgi-detail-inner">
          <button className="sgi-back-btn" onClick={() => setPage("home")}>
            ← Back to Home
          </button>

          <p>{service.category}</p>
          <h1>{service.title}</h1>
          <span>{service.intro}</span>
        </div>
      </section>

      <section className="sgi-service-visual">
        <div className="sgi-service-visual-grid">
          <div className="sgi-service-visual-copy">
            <p>Service Architecture</p>

            <h2>
              Built as part of a complete enterprise infrastructure strategy.
            </h2>

            <span>
              This service is not delivered as an isolated installation. SGI
              connects it with network design, security posture, monitoring,
              documentation and long-term managed support.
            </span>

            <div className="sgi-service-mini-grid">
              <div>
                <strong>Design</strong>
                <span>Structured planning</span>
              </div>

              <div>
                <strong>Deploy</strong>
                <span>Clean implementation</span>
              </div>

              <div>
                <strong>Manage</strong>
                <span>Ongoing support</span>
              </div>
            </div>
          </div>

          <div className="sgi-service-stack">
            <div className="sgi-stack-card stack-main">
              <span>01</span>
              <h3>{service.title}</h3>
              <p>Core capability</p>
            </div>

            <div className="sgi-stack-card stack-small stack-a">
              <span>02</span>
              <h3>Network</h3>
            </div>

            <div className="sgi-stack-card stack-small stack-b">
              <span>03</span>
              <h3>Security</h3>
            </div>

            <div className="sgi-stack-card stack-small stack-c">
              <span>04</span>
              <h3>Support</h3>
            </div>

            <div className="sgi-stack-glow"></div>
          </div>
        </div>
      </section>

      <section className="sgi-content-section">
        <div className="sgi-section-heading">
          <p>Business Outcomes</p>
          <h2>
            Built to improve reliability, visibility and operational performance.
          </h2>
        </div>

        <div className="sgi-challenge-grid">
          {service.outcomes.map((item) => (
            <div className="sgi-info-card" key={item}>
              <h3>{item}</h3>
              <p>
                SGI designs this capability to support stronger business
                operations, cleaner infrastructure and long-term scalability.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="sgi-process-section">
        <div className="sgi-section-heading">
          <p>Implementation Workflow</p>
          <h2>
            A structured delivery model from assessment to ongoing support.
          </h2>
        </div>

        <div className="sgi-process-grid">
          {[
            ["01", "Assess", "Review the environment, risks, requirements and business impact."],
            ["02", "Design", "Build the right architecture, equipment plan and integration path."],
            ["03", "Deploy", "Install, configure, test and document the complete solution."],
            ["04", "Support", "Provide monitoring, lifecycle support and optimization."],
          ].map(([number, title, text]) => (
            <div className="sgi-process-card" key={title}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sgi-content-section">
        <div className="sgi-section-heading">
          <p>Technologies Used</p>
          <h2>Practical systems selected for real business environments.</h2>
        </div>

        <div className="sgi-services-grid">
          {service.technologies.map((item) => (
            <div className="sgi-service-item" key={item}>
              <h3>{item}</h3>
              <span>Included capability</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sgi-final-cta">
        <div className="sgi-final-cta-inner">
          <p>Service Assessment</p>

          <h2>Need this service designed properly for your environment?</h2>

          <span>
            SGI can review your existing infrastructure and recommend a cleaner,
            more scalable and more secure implementation path.
          </span>

          <div className="sgi-final-cta-buttons">
            <button>Book Assessment</button>
            <button className="sgi-outline-btn">Contact SGI</button>
          </div>
        </div>
      </section>
    </main>
  );
}