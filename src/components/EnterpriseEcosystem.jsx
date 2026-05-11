import "./EnterpriseEcosystem.css";

export default function EnterpriseEcosystem() {
  const items = [
    "Microsoft 365",
    "UniFi Networks",
    "Enterprise Switching",
    "VLAN Architecture",
    "CCTV Systems",
    "Access Control",
    "Cloud Continuity",
    "Monitoring",
  ];

  return (
    <section className="sgi-ecosystem-section">
      <div className="sgi-ecosystem-copy">
        <span>TECHNOLOGY ECOSYSTEM</span>
        <h2>Integrated platforms, infrastructure and operational systems.</h2>
        <p>
          SGI connects business technology across IT, networking, physical security,
          cloud continuity and managed operations.
        </p>
      </div>

      <div className="sgi-ecosystem-grid">
        {items.map((item) => (
          <div className="sgi-ecosystem-card" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}