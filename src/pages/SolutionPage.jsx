import Reveal from "../components/Reveal";
import ProtectSecurityTopology from "../components/ProtectSecurityTopology";

export default function SolutionPage({
  title,
  category,
  description,
  image,
}) {
  const pageData = {
    Protect: {
      outcomes: [
        "Operational Security",
        "Threat Visibility",
        "Access Governance",
        "Infrastructure Protection",
      ],
      architecture: [
        "Cybersecurity Layer",
        "Surveillance Systems",
        "Access Control",
        "Monitoring Infrastructure",
        "Incident Visibility",
        "Operational Security",
      ],
      capabilities: [
        "Threat Assessment",
        "Surveillance Deployment",
        "Access Integration",
        "Monitoring Systems",
        "Incident Visibility",
        "Security Lifecycle Support",
      ],
      industries: [
        "Commercial Offices",
        "Healthcare",
        "Transportation",
        "Retail Operations",
        "Warehousing",
        "Multi-Site Environments",
      ],
    },

    Connect: {
      outcomes: [
        "Network Reliability",
        "Enterprise Connectivity",
        "Wireless Coverage",
        "Operational Uptime",
      ],
      architecture: [
        "Switching Infrastructure",
        "Routing Architecture",
        "Wireless Systems",
        "VLAN Segmentation",
        "Multi-Site Connectivity",
        "Network Monitoring",
      ],
      capabilities: [
        "Infrastructure Planning",
        "Enterprise Switching",
        "Wireless Deployment",
        "VLAN Architecture",
        "Network Visibility",
        "Operational Support",
      ],
      industries: [
        "Commercial Offices",
        "Warehousing",
        "Transportation",
        "Retail Operations",
        "Industrial Environments",
        "Enterprise Facilities",
      ],
    },

    Operate: {
      outcomes: [
        "Operational Visibility",
        "Managed Support",
        "Business Continuity",
        "Infrastructure Stability",
      ],
      architecture: [
        "Managed IT",
        "Monitoring Systems",
        "Lifecycle Support",
        "Operational Continuity",
        "Cloud Integration",
        "Infrastructure Management",
      ],
      capabilities: [
        "Monitoring & Support",
        "Microsoft 365",
        "Infrastructure Management",
        "Issue Response",
        "Operational Reporting",
        "Lifecycle Optimization",
      ],
      industries: [
        "Commercial Offices",
        "Healthcare",
        "Transportation",
        "Retail",
        "Multi-Site Businesses",
        "Operational Facilities",
      ],
    },

    Scale: {
      outcomes: [
        "Infrastructure Growth",
        "Cloud Continuity",
        "Operational Scalability",
        "Business Resilience",
      ],
      architecture: [
        "Cloud Infrastructure",
        "Backup Systems",
        "Continuity Planning",
        "Scalable Architecture",
        "Hybrid Operations",
        "Operational Resilience",
      ],
      capabilities: [
        "Cloud Migration",
        "Continuity Planning",
        "Backup Strategy",
        "Infrastructure Scaling",
        "Operational Redundancy",
        "Lifecycle Planning",
      ],
      industries: [
        "Commercial Offices",
        "Retail Operations",
        "Healthcare",
        "Warehousing",
        "Enterprise Operations",
        "Distributed Businesses",
      ],
    },

    Automate: {
      outcomes: [
        "Connected Operations",
        "Smart Automation",
        "System Integration",
        "Operational Efficiency",
      ],
      architecture: [
        "Automation Systems",
        "Integrated Controls",
        "Smart Infrastructure",
        "Operational Intelligence",
        "Connected Devices",
        "Unified Management",
      ],
      capabilities: [
        "Automation Design",
        "Integrated Systems",
        "Smart Controls",
        "Workflow Automation",
        "Connected Infrastructure",
        "Operational Optimization",
      ],
      industries: [
        "Smart Buildings",
        "Commercial Offices",
        "Retail",
        "Residential Automation",
        "Warehousing",
        "Enterprise Facilities",
      ],
    },
  };

  const current = pageData[title] || pageData.Protect;

  const outcomes = current.outcomes;
  const architecture = current.architecture;
  const capabilities = current.capabilities;
  const industries = current.industries;

  return (
    <main className="sgi-solution-page">
      <section className="sgi-solution-hero">
        <div className="sgi-solution-hero-bg"></div>

        <div className="sgi-solution-hero-grid">
          <Reveal>
            <div className="sgi-solution-hero-content">
              <p>{category}</p>

              <h1>{title}</h1>

              <span>{description}</span>

              <div className="sgi-solution-chips">
                {outcomes.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>

              <div className="sgi-solution-hero-buttons">
                <button>Schedule Assessment</button>
                <button className="sgi-outline-btn">Explore Architecture</button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="sgi-solution-hero-visual">
              <img src={image} alt={title} />

              <div className="sgi-visual-card">
                <strong>{title} Architecture</strong>
                <p>
                  Enterprise-grade ecosystems designed for visibility,
                  resilience, security and long-term operational continuity.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
{title === "Protect" && <ProtectSecurityTopology />}
      <section className="sgi-solution-section">
        <div className="sgi-section-heading">
          <p>Business Outcomes</p>
          <h2>Infrastructure designed for measurable operational performance.</h2>
        </div>

        <div className="sgi-outcomes-grid">
          {outcomes.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <div className="sgi-outcome-card">
                <h3>{item}</h3>
                <span>
                  Enterprise infrastructure aligned with operational continuity,
                  visibility, scalability and business resilience.
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-solution-section">
        <div className="sgi-section-heading">
          <p>Architecture Layer</p>
          <h2>{title} systems built as an integrated enterprise ecosystem.</h2>
        </div>

        <div className="sgi-architecture-grid">
          {architecture.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="sgi-architecture-card">
                <strong>0{index + 1}</strong>
                <h3>{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-solution-section">
        <div className="sgi-section-heading">
          <p>Enterprise Capabilities</p>
          <h2>End-to-end delivery, integration and operational support.</h2>
        </div>

        <div className="sgi-capabilities-grid">
          {capabilities.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="sgi-capability-card">
                <h3>{item}</h3>
                <p>
                  Structured enterprise delivery methodology designed for
                  reliability, visibility and long-term lifecycle support.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-solution-section">
        <div className="sgi-section-heading">
          <p>Industry Applications</p>
          <h2>{title} infrastructure across operational environments.</h2>
        </div>

        <div className="sgi-industries-grid">
          {industries.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="sgi-industry-card">{item}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-managed-layer">
        <Reveal>
          <div className="sgi-managed-layer-inner">
            <p>Managed Operations</p>

            <h2>SGI supports long-term operational continuity.</h2>

            <span>
              Beyond deployment, SGI helps businesses maintain, monitor and
              optimize enterprise infrastructure environments through structured
              operational support.
            </span>
          </div>
        </Reveal>
      </section>

      <section className="sgi-final-cta">
        <Reveal>
          <div className="sgi-final-cta-inner">
            <p>Enterprise Consultation</p>

            <h2>Build resilient infrastructure ecosystems.</h2>

            <span>
              Modern enterprise infrastructure requires visibility, operational
              continuity and scalable architecture.
            </span>

            <div className="sgi-final-cta-buttons">
              <button>Schedule Assessment</button>
              <button className="sgi-outline-btn">
                Discuss Infrastructure Strategy
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}