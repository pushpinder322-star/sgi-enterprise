import "./CommandCenter.css";

export default function CommandCenter() {
  const systems = [
    "Network Core",
    "Security Layer",
    "Cloud Continuity",
    "Access Control",
  ];

  return (
    <section className="sgi-command-section">
      <div className="sgi-command-copy">
        <span>COMMAND CENTER VISIBILITY</span>
        <h2>Operational monitoring across infrastructure, security and support.</h2>
        <p>
          A connected infrastructure environment gives businesses visibility
          into network health, security posture, system continuity and support
          readiness.
        </p>
      </div>

      <div className="sgi-command-dashboard">
        <div className="command-status-row">
          <div>
            <strong>99.9%</strong>
            <span>Continuity Target</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Monitoring Ready</span>
          </div>
          <div>
            <strong>Live</strong>
            <span>System Visibility</span>
          </div>
        </div>

        <div className="command-system-grid">
          {systems.map((item) => (
            <div className="command-system-card" key={item}>
              <div className="command-pulse"></div>
              <h3>{item}</h3>
              <p>Operational status active</p>
              <div className="command-bar">
                <span></span>
              </div>
            </div>
          ))}
        </div>

        <div className="command-alert-panel">
          <span>Operational Event Stream</span>
          <p>Infrastructure check completed • Monitoring layer active • Support workflow ready</p>
        </div>
      </div>
    </section>
  );
}