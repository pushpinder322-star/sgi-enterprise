import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./EnterpriseOverlayMenu.css";

export default function EnterpriseOverlayMenu({
  open,
  setOpen,
  setPage,
  initialSection = "main",
}) {
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navigate = (page) => {
    setPage(page);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="sgi-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="sgi-overlay-backdrop"
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="sgi-overlay-panel"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="sgi-overlay-top">
              <div>
                <h2>SmartGuard Innovations</h2>
                <p>
                  Enterprise IT • Network • Security • Automation
                </p>
              </div>

              <button onClick={() => setOpen(false)}>
                Close
              </button>
            </div>

            <div className="sgi-overlay-grid">
              <div className="sgi-overlay-sidebar">
                <div
                  className={activeSection === "solutions" ? "active" : ""}
                  onClick={() => setActiveSection("solutions")}
                >
                  Solutions
                </div>

                <div
                  className={activeSection === "industries" ? "active" : ""}
                  onClick={() => setActiveSection("industries")}
                >
                  Industries
                </div>

                <div
                  className={activeSection === "projects" ? "active" : ""}
                  onClick={() => setActiveSection("projects")}
                >
                  Projects
                </div>

                <div
                  className={activeSection === "about" ? "active" : ""}
                  onClick={() => setActiveSection("about")}
                >
                  About
                </div>
              </div>

              <div className="sgi-overlay-content">

                {activeSection === "solutions" && (
                  <div className="sgi-overlay-links">

                    <div onClick={() => navigate("protect")}>
                      <span>Security Infrastructure</span>
                      <h3>Protect</h3>

                      <p>
                        Integrated surveillance, access control,
                        cybersecurity and operational protection systems.
                      </p>
                    </div>

                    <div onClick={() => navigate("connect")}>
                      <span>Enterprise Networking</span>
                      <h3>Connect</h3>

                      <p>
                        Enterprise switching, routing, wireless
                        infrastructure and multi-site connectivity.
                      </p>
                    </div>

                    <div onClick={() => navigate("operate")}>
                      <span>Managed Operations</span>
                      <h3>Operate</h3>

                      <p>
                        Monitoring, IT support, infrastructure visibility
                        and operational continuity management.
                      </p>
                    </div>

                    <div onClick={() => navigate("scale")}>
                      <span>Cloud & Growth</span>
                      <h3>Scale</h3>

                      <p>
                        Scalable infrastructure architecture designed
                        for business expansion and resilience.
                      </p>
                    </div>

                    <div onClick={() => navigate("automate")}>
                      <span>Automation Systems</span>
                      <h3>Automate</h3>

                      <p>
                        Smart automation, integrated control systems
                        and intelligent operational workflows.
                      </p>
                    </div>

                  </div>
                )}

                {activeSection === "industries" && (
                  <div className="sgi-overlay-links">

                    <div onClick={() => navigate("healthcare")}>
                      <span>Healthcare Systems</span>
                      <h3>Healthcare</h3>

                      <p>
                        Secure infrastructure for clinics,
                        healthcare facilities and operational compliance.
                      </p>
                    </div>

                    <div onClick={() => navigate("transportation")}>
                      <span>Fleet & Logistics</span>
                      <h3>Transportation</h3>

                      <p>
                        Infrastructure visibility, connectivity and
                        operational security for transportation businesses.
                      </p>
                    </div>

                    <div onClick={() => navigate("retail")}>
                      <span>Retail Infrastructure</span>
                      <h3>Retail</h3>

                      <p>
                        Multi-location networking, surveillance and
                        business continuity for retail environments.
                      </p>
                    </div>

                    <div onClick={() => navigate("enterprise")}>
                      <span>Corporate Infrastructure</span>
                      <h3>Enterprise</h3>

                      <p>
                        Enterprise-grade infrastructure modernization
                        and managed operational ecosystems.
                      </p>
                    </div>

                  </div>
                )}

                {activeSection === "projects" && (
                  <div className="sgi-overlay-placeholder">

                    <h3>Enterprise Infrastructure Projects</h3>

                    <p>
                      SGI delivers enterprise-grade IT, networking,
                      surveillance and operational modernization
                      projects across commercial environments.
                    </p>

                  </div>
                )}

                {activeSection === "about" && (
                  <div className="sgi-overlay-placeholder">

                    <h3>Enterprise Technology Partner</h3>

                    <p>
                      SmartGuard Innovations provides integrated
                      enterprise infrastructure solutions focused on
                      networking, security, operational continuity
                      and managed technology services.
                    </p>

                  </div>
                )}

              </div>
            </div>
                    </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}