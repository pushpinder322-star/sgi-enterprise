import "./InfrastructureTopology.css";

export default function InfrastructureTopology() {
  const nodes = [
    { className: "topology-node firewall", label: "Firewall", detail: "Security Edge" },
    { className: "topology-node cloud", label: "Cloud", detail: "Continuity" },
    { className: "topology-node network", label: "Network", detail: "Switching / VLANs" },
    { className: "topology-node cameras", label: "CCTV", detail: "Surveillance" },
    { className: "topology-node access", label: "Access", detail: "Controlled Entry" },
    { className: "topology-node monitoring", label: "Monitoring", detail: "24/7 Visibility" },
  ];

  return (
    <section className="sgi-topology-section">
      <div className="sgi-topology-copy">
        <span>INFRASTRUCTURE TOPOLOGY</span>
        <h2>Connected systems operating as one intelligent infrastructure layer.</h2>
        <p>
          SGI unifies IT, networking, security, cloud continuity and monitoring
          into a connected operational ecosystem designed for uptime, visibility
          and business resilience.
        </p>
      </div>

      <div className="sgi-topology-stage">
        <div className="topology-core">
          <strong>SGI</strong>
          <small>Operations Core</small>
        </div>

        <span className="topology-line line-a"></span>
        <span className="topology-line line-b"></span>
        <span className="topology-line line-c"></span>
        <span className="topology-line line-d"></span>
        <span className="topology-line line-e"></span>
        <span className="topology-line line-f"></span>

        {nodes.map((node) => (
          <div className={node.className} key={node.label}>
            <strong>{node.label}</strong>
            <span>{node.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}