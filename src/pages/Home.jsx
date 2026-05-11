import architecture1 from "../assets/architecture/architecture-1.jpg";
import network1 from "../assets/networking/network-1.jpg";
import security1 from "../assets/security/security-1.jpg";
import cloud1 from "../assets/cloud/cloud-1.jpg";
import industry1 from "../assets/industries/industry-1.jpg";

import PremiumHero from "../components/PremiumHero";
import EnterpriseTrustBar from "../components/EnterpriseTrustBar";
import Reveal from "../components/Reveal";

export default function Home({ setPage }) {
  const solutions = [
    {
      title: "Protect",
      description:
        "Cybersecurity, CCTV, access control and monitoring systems for business protection.",
      image: security1,
      page: "protect",
    },
    {
      title: "Connect",
      description:
        "Switching, routing, managed Wi-Fi and multi-site network connectivity.",
      image: network1,
      page: "connect",
    },
    {
      title: "Operate",
      description:
        "Managed IT operations, monitoring, support and infrastructure lifecycle management.",
      image: architecture1,
      page: "operate",
    },
    {
      title: "Scale",
      description:
        "Cloud readiness, backup, continuity and scalable infrastructure for growth.",
      image: cloud1,
      page: "scale",
    },
    {
      title: "Automate",
      description:
        "Smart automation, integrated control systems and connected environments.",
      image: industry1,
      page: "automate",
    },
  ];

  const capabilities = [
    "Managed IT Support",
    "Network Infrastructure",
    "Cybersecurity",
    "CCTV & Surveillance",
    "Access Control",
    "Cloud Continuity",
    "Microsoft 365",
    "Monitoring & Support",
  ];

  const technologies = [
    "Switching",
    "Routing",
    "VLANs",
    "Firewalls",
    "Wireless",
    "Cameras",
    "Intercom",
    "Automation",
  ];

  const industries = [
    "Commercial Offices",
    "Retirement Residences",
    "Retail & Restaurants",
    "Transportation",
    "Warehousing",
    "Smart Homes",
  ];

  const whyItems = [
    [
      "Operational Continuity",
      "Systems designed to reduce downtime, improve visibility and support daily operations.",
    ],
    [
      "Unified Systems",
      "One partner for IT, networking, cybersecurity, security systems, cloud and automation.",
    ],
    [
      "Enterprise Deployment",
      "Structured assessment, design, installation, configuration and support methodology.",
    ],
    [
      "Scalable Architecture",
      "Infrastructure planned for growth, multi-site expansion and long-term lifecycle.",
    ],
  ];

  const process = [
    ["01", "Assess", "Review risks, infrastructure, business needs and operational priorities."],
    ["02", "Design", "Create resilient architecture for networking, security and operations."],
    ["03", "Deploy", "Install, configure, integrate and validate systems professionally."],
    ["04", "Manage", "Monitor, support, optimize and maintain infrastructure long term."],
  ];

  return (
    <main className="sgi-page">
      <div className="enterprise-lines">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <PremiumHero />
      <EnterpriseTrustBar />

      <section className="sgi-status-strip">
        <div className="sgi-status-track">
          <span>24/7 Managed Operations</span>
          <span>Multi-Site Infrastructure</span>
          <span>Enterprise Security</span>
          <span>Network Visibility</span>
          <span>Canada-Wide Support</span>
          <span>Business Continuity</span>
          <span>Cloud Infrastructure</span>
          <span>Operational Reliability</span>
        </div>
      </section>

      <section className="sgi-solutions-section">
        <div className="sgi-section-heading">
          <p>Enterprise Solutions</p>
          <h2>One infrastructure partner for protection, connectivity and operations.</h2>
        </div>

        <div className="sgi-solutions-grid">
          {solutions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <button className="sgi-solution-card" onClick={() => setPage(item.page)}>
                <div
                  className="sgi-solution-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="sgi-media-scan"></div>
                </div>

                <div className="sgi-solution-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>Explore Solution →</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-why-section">
        <div className="sgi-section-heading">
          <p>Enterprise Capabilities</p>
          <h2>Integrated IT, network, security and operational infrastructure.</h2>
        </div>

        <div className="sgi-industries-grid">
          {capabilities.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="sgi-industry-card">{item}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-home-process">
        <div className="sgi-section-heading">
          <p>Technology Ecosystem</p>
          <h2>Designed around the systems businesses actually depend on.</h2>
        </div>

        <div className="sgi-industries-grid">
          {technologies.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="sgi-industry-card">{item}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-why-section">
        <div className="sgi-section-heading">
          <p>Industries Served</p>
          <h2>Infrastructure support across commercial and operational environments.</h2>
        </div>

        <div className="sgi-industries-grid">
          {industries.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="sgi-industry-card">{item}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-why-section">
        <div className="sgi-section-heading">
          <p>Why Businesses Choose SGI</p>
          <h2>Reliable systems, unified delivery and long-term operational support.</h2>
        </div>

        <div className="sgi-why-grid">
          {whyItems.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.06}>
              <div className="sgi-why-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-home-process">
        <div className="sgi-section-heading">
          <p>Operational Workflow</p>
          <h2>From assessment to managed operations.</h2>
        </div>

        <div className="sgi-home-process-grid">
          {process.map(([num, title, text], index) => (
            <Reveal key={num} delay={index * 0.08}>
              <div className="sgi-home-process-card">
                <strong>{num}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sgi-final-cta">
        <Reveal>
          <div className="sgi-final-cta-inner">
            <p>Enterprise Consultation</p>
            <h2>Build resilient infrastructure with SGI.</h2>
            <span>
              SmartGuard Innovations helps businesses modernize IT, networking,
              cybersecurity, surveillance, access control, cloud continuity and
              managed operations.
            </span>

            <div className="sgi-final-cta-buttons">
              <button onClick={() => setPage("contact")}>
                Schedule Infrastructure Assessment
              </button>
              <button className="sgi-outline-btn" onClick={() => setPage("protect")}>
                Explore Enterprise Solutions
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}