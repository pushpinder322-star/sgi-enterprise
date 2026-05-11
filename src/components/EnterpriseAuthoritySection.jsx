import "./EnterpriseAuthoritySection.css";

export default function EnterpriseAuthoritySection() {
  const items = [
    {
      title: "Infrastructure Assessment",
      text: "Structured evaluation of operational risks, infrastructure readiness and business requirements.",
    },
    {
      title: "Deployment Methodology",
      text: "Standardized installation, integration, validation and infrastructure configuration workflow.",
    },
    {
      title: "Operational Continuity",
      text: "Monitoring, lifecycle management and resilience-focused support systems.",
    },
    {
      title: "Managed Support",
      text: "Ongoing operational visibility, troubleshooting and infrastructure optimization.",
    },
  ];

  return (
    <section className="sgi-authority-section">

      <div className="sgi-authority-copy">

        <span>ENTERPRISE STANDARDS</span>

        <h2>
          Structured operational delivery built around reliability.
        </h2>

        <p>
          SGI follows a deployment and support framework designed
          for operational consistency, infrastructure resilience
          and long-term business continuity.
        </p>

      </div>

      <div className="sgi-authority-grid">

        {items.map((item, index) => (
          <div className="sgi-authority-card" key={index}>

            <strong>0{index + 1}</strong>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}