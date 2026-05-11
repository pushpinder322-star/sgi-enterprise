import "./EnterpriseInfrastructureVisual.css";

export default function EnterpriseInfrastructureVisual() {
  return (
    <section className="sgi-infra-visual-section">
      <div className="sgi-infra-copy">
        <span>ENTERPRISE INFRASTRUCTURE SYSTEM</span>
        <h2>One connected operational layer across IT, network and security.</h2>
        <p>
          SGI designs infrastructure as a connected ecosystem — linking users,
          devices, networks, cloud systems, security platforms and monitoring
          into one operational framework.
        </p>
      </div>

      <div className="sgi-infra-map">
        <div className="sgi-infra-core">SGI</div>

        <div className="sgi-node node-it">IT Core</div>
        <div className="sgi-node node-net">Network</div>
        <div className="sgi-node node-sec">Security</div>
        <div className="sgi-node node-cloud">Cloud</div>
        <div className="sgi-node node-monitor">Monitoring</div>

        <span className="sgi-line line-1"></span>
        <span className="sgi-line line-2"></span>
        <span className="sgi-line line-3"></span>
        <span className="sgi-line line-4"></span>
        <span className="sgi-line line-5"></span>
      </div>
    </section>
  );
}