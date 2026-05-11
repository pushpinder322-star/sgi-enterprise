import Reveal from "../components/Reveal";

export default function SolutionPage({
  title,
  category,
  description,
  image,
}) {
  const outcomes = [
    "Operational continuity",
    "Infrastructure visibility",
    "Reduced downtime",
    "Unified systems",
  ];

  const architecture = [
    "Core Infrastructure",
    "Security Layer",
    "Cloud Integration",
    "Monitoring Systems",
    "Operational Visibility",
    "Lifecycle Management",
  ];

  const capabilities = [
    "Assessment & Planning",
    "Enterprise Deployment",
    "Infrastructure Integration",
    "Operational Monitoring",
    "Maintenance & Support",
    "Lifecycle Optimization",
  ];

  const industries = [
    "Commercial Offices",
    "Healthcare",
    "Transportation",
    "Retail Operations",
    "Warehousing",
    "Multi-Site Environments",
  ];

  return (
    <main className="sgi-solution-page">

      {/* HERO */}

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
                <button>
                  Schedule Assessment
                </button>

                <button className="sgi-outline-btn">
                  Explore Architecture
                </button>
              </div>

            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="sgi-solution-hero-visual">

              <img src={image} alt={title} />

              <div className="sgi-visual-card">
                <strong>Operational Visibility</strong>

                <p>
                  Enterprise-grade infrastructure ecosystems designed
                  for resilience, monitoring and long-term scalability.
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* BUSINESS OUTCOMES */}

      <section className="sgi-solution-section">

        <div className="sgi-section-heading">
          <p>Business Outcomes</p>

          <h2>
            Infrastructure designed for operational performance.
          </h2>
        </div>

        <div className="sgi-outcomes-grid">
          {outcomes.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <div className="sgi-outcome-card">
                <h3>{item}</h3>

                <span>
                  Enterprise infrastructure aligned with operational
                  continuity, scalability and infrastructure resilience.
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      {/* ARCHITECTURE */}

      <section className="sgi-solution-section">

        <div className="sgi-section-heading">
          <p>Architecture Layer</p>

          <h2>
            Integrated enterprise infrastructure ecosystem.
          </h2>
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

      {/* CAPABILITIES */}

      <section className="sgi-solution-section">

        <div className="sgi-section-heading">
          <p>Enterprise Capabilities</p>

          <h2>
            End-to-end deployment and operational support.
          </h2>
        </div>

        <div className="sgi-capabilities-grid">
          {capabilities.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="sgi-capability-card">

                <h3>{item}</h3>

                <p>
                  Structured enterprise delivery methodology
                  designed for reliability and long-term lifecycle support.
                </p>

              </div>
            </Reveal>
          ))}
        </div>

      </section>

      {/* INDUSTRIES */}

      <section className="sgi-solution-section">

        <div className="sgi-section-heading">
          <p>Industry Applications</p>

          <h2>
            Infrastructure ecosystems across operational environments.
          </h2>
        </div>

        <div className="sgi-industries-grid">
          {industries.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="sgi-industry-card">
                {item}
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      {/* MANAGED SERVICES */}

      <section className="sgi-managed-layer">

        <Reveal>
          <div className="sgi-managed-layer-inner">

            <p>Managed Operations</p>

            <h2>
              SGI supports long-term operational continuity.
            </h2>

            <span>
              Beyond deployment, SGI helps businesses maintain,
              monitor and optimize enterprise infrastructure
              environments through structured operational support.
            </span>

          </div>
        </Reveal>

      </section>

      {/* FINAL CTA */}

      <section className="sgi-final-cta">

        <Reveal>
          <div className="sgi-final-cta-inner">

            <p>Enterprise Consultation</p>

            <h2>
              Build resilient infrastructure ecosystems.
            </h2>

            <span>
              Modern enterprise infrastructure requires visibility,
              operational continuity and scalable architecture.
            </span>

            <div className="sgi-final-cta-buttons">

              <button>
                Schedule Assessment
              </button>

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