import architecture1 from "../assets/architecture/architecture-1.jpg";
import network1 from "../assets/networking/network-1.jpg";
import security1 from "../assets/security/security-1.jpg";
import cloud1 from "../assets/cloud/cloud-1.jpg";
import industry1 from "../assets/industries/industry-1.jpg";

import EnterpriseInfrastructureVisual from "../components/EnterpriseInfrastructureVisual";
import EnterpriseOperationsSection from "../components/EnterpriseOperationsSection";
import PremiumHero from "../components/PremiumHero";
import EnterpriseTrustBar from "../components/EnterpriseTrustBar";
import Reveal from "../components/Reveal";
import EnterpriseAuthoritySection from "../components/EnterpriseAuthoritySection";
import CaseStudies from "../components/CaseStudies";
import EnterpriseEcosystem from "../components/EnterpriseEcosystem";
import EnterpriseFooter from "../components/EnterpriseFooter";
import EnterpriseTrustCenter from "../components/EnterpriseTrustCenter";
import InfrastructureTopology from "../components/InfrastructureTopology";
import CommandCenter from "../components/CommandCenter";

export default function Home({ setPage }) {
  const solutions = [
    { title: "Protect", description: "Cybersecurity, CCTV, access control and monitoring systems for business protection.", image: security1, page: "protect" },
    { title: "Connect", description: "Switching, routing, managed Wi-Fi and multi-site network connectivity.", image: network1, page: "connect" },
    { title: "Operate", description: "Managed IT operations, monitoring, support and infrastructure lifecycle management.", image: architecture1, page: "operate" },
    { title: "Scale", description: "Cloud readiness, backup, continuity and scalable infrastructure for growth.", image: cloud1, page: "scale" },
    { title: "Automate", description: "Smart automation, integrated control systems and connected environments.", image: industry1, page: "automate" },
  ];

  const enterpriseServices = [
    { title: "Managed IT Support", description: "End-to-end IT operations, device management, Microsoft 365 administration and enterprise user support.", tag: "OPERATIONS" },
    { title: "Network Infrastructure", description: "Enterprise switching, routing, VLAN architecture, wireless deployment and multi-site connectivity.", tag: "NETWORKING" },
    { title: "Cybersecurity", description: "Infrastructure hardening, endpoint protection, access governance and operational security visibility.", tag: "SECURITY" },
    { title: "CCTV & Surveillance", description: "Commercial surveillance ecosystems with centralized monitoring and intelligent operational visibility.", tag: "SURVEILLANCE" },
    { title: "Access Control", description: "Integrated access management systems designed for controlled environments and operational safety.", tag: "PHYSICAL SECURITY" },
    { title: "Cloud Continuity", description: "Business continuity, cloud integration, backup systems and resilient operational infrastructure.", tag: "CLOUD" },
    { title: "Microsoft 365", description: "Enterprise productivity deployment, account administration and collaborative infrastructure systems.", tag: "PRODUCTIVITY" },
    { title: "Monitoring & Support", description: "24/7 operational visibility, proactive issue response and infrastructure monitoring services.", tag: "MANAGED SERVICES" },
  ];

  const technologies = ["Switching", "Routing", "VLANs", "Firewalls", "Wireless", "Cameras", "Intercom", "Automation"];

  const industries = [
    {
      title: "Commercial Offices",
      label: "Workplace Infrastructure",
      text: "Secure IT, network, access control and surveillance systems for modern office environments.",
      metric: "Business Continuity",
    },
    {
      title: "Retirement Residences",
      label: "Care Environment",
      text: "Operational security, monitoring, access control and communication systems for sensitive facilities.",
      metric: "Safety & Visibility",
    },
    {
      title: "Retail & Restaurants",
      label: "Customer Operations",
      text: "Multi-location surveillance, network uptime and managed technology support.",
      metric: "Multi-Site Ready",
    },
    {
      title: "Transportation",
      label: "Fleet & Logistics",
      text: "Infrastructure visibility, connectivity and security for transportation operations.",
      metric: "Operational Control",
    },
    {
      title: "Warehousing",
      label: "Industrial Operations",
      text: "Connected surveillance, access control, Wi-Fi and operational infrastructure.",
      metric: "Site Reliability",
    },
    {
      title: "Smart Homes",
      label: "Connected Living",
      text: "Integrated automation, networking, security and smart technology ecosystems.",
      metric: "Connected Systems",
    },
  ];

  const whyItems = [
    ["Operational Continuity", "Systems designed to reduce downtime, improve visibility and support daily operations."],
    ["Unified Systems", "One partner for IT, networking, cybersecurity, security systems, cloud and automation."],
    ["Enterprise Deployment", "Structured assessment, design, installation, configuration and support methodology."],
    ["Scalable Architecture", "Infrastructure planned for growth, multi-site expansion and long-term lifecycle."],
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
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
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
                <div className="sgi-solution-image" style={{ backgroundImage: `url(${item.image})` }}>
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

        <div className="enterprise-services-grid">
          {enterpriseServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <div className="enterprise-service-card">
                <span className="enterprise-service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="enterprise-service-line"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <EnterpriseInfrastructureVisual />
      <InfrastructureTopology />
      <CommandCenter />

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

      <EnterpriseOperationsSection />

      <section className="sgi-why-section">
        <div className="sgi-section-heading">
          <p>Industries Served</p>
          <h2>Infrastructure support across commercial and operational environments.</h2>
        </div>

        <div className="sgi-premium-industries-grid">
          {industries.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="sgi-premium-industry-card">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.metric}</strong>
              </div>
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
      <CaseStudies />
      <EnterpriseEcosystem />

      <EnterpriseAuthoritySection />

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
      <EnterpriseTrustCenter />

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
              <button onClick={() => setPage("contact")}>Schedule Infrastructure Assessment</button>
              <button className="sgi-outline-btn" onClick={() => setPage("protect")}>Explore Enterprise Solutions</button>
            </div>
          </div>
        </Reveal>
      </section>
      <EnterpriseFooter />
    </main>
  );
}