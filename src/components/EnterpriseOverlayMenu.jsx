import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./EnterpriseOverlayMenu.css";

export default function EnterpriseOverlayMenu({
  open,
  setOpen,
  setPage,
  initialSection = "solutions",
}) {

  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);

  useEffect(() => {

    if(open){
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
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          exit={{ opacity:0 }}
          transition={{ duration:.25 }}
        >

          <div
            className="sgi-overlay-backdrop"
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="sgi-overlay-panel"
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:40 }}
            transition={{ duration:.4 }}
          >

            <div className="sgi-overlay-top">

              <div>
                <span>SMARTGUARD INNOVATIONS</span>

                <h2>
                  Enterprise Infrastructure Platform
                </h2>
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
                  className={activeSection === "operations" ? "active" : ""}
                  onClick={() => setActiveSection("operations")}
                >
                  Managed Operations
                </div>

                <div
                  className={activeSection === "projects" ? "active" : ""}
                  onClick={() => setActiveSection("projects")}
                >
                  Case Studies
                </div>

                <div
                  className={activeSection === "company" ? "active" : ""}
                  onClick={() => setActiveSection("company")}
                >
                  Company
                </div>

              </div>

              <div className="sgi-overlay-content">

                {/* SOLUTIONS */}

                {activeSection === "solutions" && (

                  <div className="sgi-overlay-links">

                    <div onClick={() => navigate("protect")}>
                      <span>Security Infrastructure</span>

                      <h3>Protect</h3>

                      <p>
                        Surveillance, cybersecurity,
                        access control and operational
                        security ecosystems.
                      </p>
                    </div>

                    <div onClick={() => navigate("connect")}>
                      <span>Enterprise Networking</span>

                      <h3>Connect</h3>

                      <p>
                        Switching, routing, wireless,
                        VLAN architecture and multi-site
                        enterprise connectivity.
                      </p>
                    </div>

                    <div onClick={() => navigate("operate")}>
                      <span>Managed Operations</span>

                      <h3>Operate</h3>

                      <p>
                        Monitoring, infrastructure support,
                        operational continuity and lifecycle
                        management systems.
                      </p>
                    </div>

                    <div onClick={() => navigate("scale")}>
                      <span>Cloud Continuity</span>

                      <h3>Scale</h3>

                      <p>
                        Scalable operational infrastructure,
                        cloud continuity and resilience-focused
                        architecture.
                      </p>
                    </div>

                    <div onClick={() => navigate("automate")}>
                      <span>Integrated Automation</span>

                      <h3>Automate</h3>

                      <p>
                        Intelligent operational automation,
                        smart systems and connected environments.
                      </p>
                    </div>

                  </div>

                )}

                {/* INDUSTRIES */}

                {activeSection === "industries" && (

                  <div className="sgi-overlay-links">

                    <div>
                      <span>Commercial Infrastructure</span>

                      <h3>Commercial Offices</h3>

                      <p>
                        Enterprise networking, security,
                        operational visibility and managed
                        infrastructure support.
                      </p>
                    </div>

                    <div>
                      <span>Care Environments</span>

                      <h3>Retirement Residences</h3>

                      <p>
                        Secure operational ecosystems
                        for monitoring, communication
                        and controlled access.
                      </p>
                    </div>

                    <div>
                      <span>Retail Operations</span>

                      <h3>Retail & Restaurants</h3>

                      <p>
                        Multi-site visibility, connectivity,
                        surveillance and operational continuity.
                      </p>
                    </div>

                    <div>
                      <span>Industrial Infrastructure</span>

                      <h3>Warehousing</h3>

                      <p>
                        Connected infrastructure systems
                        for operational efficiency and
                        site-wide visibility.
                      </p>
                    </div>

                  </div>

                )}

                {/* OPERATIONS */}

                {activeSection === "operations" && (

                  <div className="sgi-overlay-placeholder">

                    <h3>
                      Managed Infrastructure Operations
                    </h3>

                    <p>
                      SGI provides operational visibility,
                      infrastructure lifecycle management,
                      monitoring systems, continuity planning
                      and enterprise support environments.
                    </p>

                  </div>

                )}

                {/* PROJECTS */}

                {activeSection === "projects" && (

                  <div className="sgi-overlay-placeholder">

                    <h3>
                      Enterprise Deployment Experience
                    </h3>

                    <p>
                      Multi-site infrastructure modernization,
                      enterprise wireless deployments,
                      surveillance ecosystems and operational
                      continuity projects.
                    </p>

                  </div>

                )}

                {/* COMPANY */}

                {activeSection === "company" && (

                  <div className="sgi-overlay-placeholder">

                    <h3>
                      Enterprise Infrastructure Partner
                    </h3>

                    <p>
                      SmartGuard Innovations delivers
                      integrated IT, networking,
                      cybersecurity, surveillance,
                      cloud continuity and managed
                      operational infrastructure.
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