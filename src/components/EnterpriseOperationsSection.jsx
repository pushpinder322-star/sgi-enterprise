import "./EnterpriseOperationsSection.css";

export default function EnterpriseOperationsSection() {
  const metrics = [
    {
      title: "24/7 Monitoring",
      text: "Continuous operational visibility across infrastructure and security systems.",
    },
    {
      title: "Multi-Site Support",
      text: "Centralized management for distributed business environments.",
    },
    {
      title: "Infrastructure Visibility",
      text: "Real-time awareness across network, IT and operational layers.",
    },
    {
      title: "Business Continuity",
      text: "Resilience-focused operational planning and uptime strategy.",
    },
  ];

  return (
    <section className="sgi-ops-section">

      <div className="sgi-ops-copy">

        <span>LIVE ENTERPRISE OPERATIONS</span>

        <h2>
          Operational visibility across infrastructure,
          security and business systems.
        </h2>

        <p>
          SGI combines networking, security, cloud continuity,
          monitoring and managed support into one connected
          operational environment designed for reliability.
        </p>

      </div>

      <div className="sgi-ops-grid">

        {metrics.map((item, index) => (
          <div className="sgi-ops-card" key={index}>

            <div className="sgi-ops-pulse">
              <span></span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

            <div className="sgi-ops-line"></div>

          </div>
        ))}

      </div>

    </section>
  );
}