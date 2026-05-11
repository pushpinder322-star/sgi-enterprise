import "./ProtectSecurityTopology.css";

export default function ProtectSecurityTopology() {
  const nodes = [
    "Cybersecurity",
    "CCTV",
    "Access Control",
    "Monitoring",
    "Incident Visibility",
    "Operational Response",
  ];

  return (
    <section className="protect-topology-section">
      <div className="protect-topology-copy">
        <span>SECURITY ARCHITECTURE</span>

        <h2>Layered protection across cyber, physical and operational systems.</h2>

        <p>
          SGI designs protection as an integrated security ecosystem — connecting
          cameras, access control, network security, monitoring and operational
          response into one visibility layer.
        </p>
      </div>

      <div className="protect-topology-map">
        <div className="protect-core">
          <strong>PROTECT</strong>
          <small>Security Core</small>
        </div>

        {nodes.map((node, index) => (
          <div className={`protect-node protect-node-${index + 1}`} key={node}>
            {node}
          </div>
        ))}

        <span className="protect-line protect-line-1"></span>
        <span className="protect-line protect-line-2"></span>
        <span className="protect-line protect-line-3"></span>
        <span className="protect-line protect-line-4"></span>
        <span className="protect-line protect-line-5"></span>
        <span className="protect-line protect-line-6"></span>
      </div>
    </section>
  );
}