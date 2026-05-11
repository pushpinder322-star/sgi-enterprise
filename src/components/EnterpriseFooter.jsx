import "./EnterpriseFooter.css";

export default function EnterpriseFooter() {
  return (
    <footer className="sgi-enterprise-footer">
      <div className="sgi-footer-glow"></div>

      <div className="sgi-enterprise-footer-inner">
        <div className="sgi-footer-main">
          <span>SMARTGUARD INNOVATIONS</span>

          <h2>
            Secure. Connected. Managed.
          </h2>

          <p>
            Enterprise IT, network, security, cloud continuity and managed
            operational infrastructure across Canada.
          </p>

          <div className="sgi-footer-contact-row">
            <a href="mailto:info@smartguardinnovations.ca">
              info@smartguardinnovations.ca
            </a>

            <a href="tel:14379221449">
              437-922-1449
            </a>

            <a href="tel:12898925694">
              289-892-5694
            </a>
          </div>
        </div>

        <div className="sgi-footer-columns">
          <div>
            <h4>Solutions</h4>
            <p>Protect</p>
            <p>Connect</p>
            <p>Operate</p>
            <p>Scale</p>
            <p>Automate</p>
          </div>

          <div>
            <h4>Services</h4>
            <p>Managed IT</p>
            <p>Networking</p>
            <p>Cybersecurity</p>
            <p>Surveillance</p>
            <p>Access Control</p>
          </div>

          <div>
            <h4>Operations</h4>
            <p>Monitoring</p>
            <p>Lifecycle Support</p>
            <p>Infrastructure Design</p>
            <p>Business Continuity</p>
            <p>Canada-Wide Support</p>
          </div>
        </div>
      </div>

      <div className="sgi-footer-bottom-bar">
        <p>© SmartGuard Innovations Inc.</p>
        <p>Enterprise Infrastructure • IT • Network • Security • Cloud</p>
      </div>
    </footer>
  );
}