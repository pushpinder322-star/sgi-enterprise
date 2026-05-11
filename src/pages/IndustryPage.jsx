import { useEffect } from "react";
import { industriesData } from "../data/industriesData";

export default function IndustryPage({ industryKey, setPage }) {
  const industry = industriesData[industryKey];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryKey]);

  if (!industry) {
    return (
      <main className="sgi-page">
        <section className="sgi-detail-hero">
          <div className="sgi-detail-inner">
            <button className="sgi-back-btn" onClick={() => setPage("home")}>
              ← Back to Home
            </button>

            <h1>Industry Coming Soon</h1>
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

          <p>Industry Solutions</p>
          <h1>{industry.title}</h1>
          <span>{industry.intro}</span>
        </div>
      </section>

      <section className="sgi-industry-visual">
        <div className="sgi-industry-visual-grid">
          <div className="sgi-industry-map">
            <div className="sgi-industry-core">
              <span>SGI</span>
            </div>

            <div className="sgi-industry-node industry-node-1">Network</div>
            <div className="sgi-industry-node industry-node-2">Security</div>
            <div className="sgi-industry-node industry-node-3">IT Support</div>
            <div className="sgi-industry-node industry-node-4">Monitoring</div>

            <div className="sgi-industry-line industry-line-1"></div>
            <div className="sgi-industry-line industry-line-2"></div>
            <div className="sgi-industry-line industry-line-3"></div>
            <div className="sgi-industry-line industry-line-4"></div>
          </div>

          <div className="sgi-industry-copy">
            <p>Industry Architecture</p>

            <h2>
              Technology environments designed around real operational needs.
            </h2>

            <span>
              SGI helps this sector strengthen connectivity, security,
              visibility and support through integrated infrastructure planning
              and managed technology delivery.
            </span>

            <div className="sgi-industry-points">
              <div>
                <strong>Reliable</strong>
                <span>Business operations</span>
              </div>

              <div>
                <strong>Visible</strong>
                <span>Security and systems</span>
              </div>

              <div>
                <strong>Managed</strong>
                <span>Long-term support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sgi-content-section">
        <div className="sgi-section-heading">
          <p>Systems We Deploy</p>
          <h2>Integrated technology for this environment.</h2>
        </div>

        <div className="sgi-services-grid">
          {industry.systems.map((item) => (
            <div className="sgi-service-item" key={item}>
              <h3>{item}</h3>
              <span>SGI capability</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sgi-process-section">
        <div className="sgi-section-heading">
          <p>Industry Delivery Model</p>

          <h2>
            A practical framework for secure, connected and supported
            operations.
          </h2>
        </div>

        <div className="sgi-process-grid">
          {[
            ["01", "Assess", "Review site operations, infrastructure risks and technology gaps."],
            ["02", "Design", "Build a connected technology plan aligned with the environment."],
            ["03", "Deploy", "Install, configure and integrate systems with clean documentation."],
            ["04", "Support", "Monitor, maintain and optimize infrastructure for long-term stability."],
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
          <p>Industry Infrastructure</p>

          <h2>Build a safer, smarter and more connected environment.</h2>

          <span>
            SGI helps organizations modernize their technology foundation with
            practical infrastructure, security and managed support.
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