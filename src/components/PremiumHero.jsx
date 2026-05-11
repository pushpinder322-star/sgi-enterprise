import { motion } from "framer-motion";
import "./PremiumHero.css";

export default function PremiumHero() {
  return (
    <section className="premium-hero">
      <div className="sgi-hero-grid"></div>

      <div className="sgi-hero-orbs">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="premium-hero-content">
        <motion.p
          className="sgi-hero-label"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ENTERPRISE IT • NETWORK • SECURITY • OPERATIONS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Infrastructure built for operational resilience.
        </motion.h1>

        <motion.span
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SmartGuard Innovations delivers enterprise IT infrastructure,
          networking, cybersecurity, surveillance, access control, cloud
          continuity and managed operational support for modern businesses.
        </motion.span>

        <motion.div
          className="sgi-hero-buttons"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <button>Schedule Infrastructure Assessment</button>
          <button className="sgi-outline-btn">Explore Enterprise Solutions</button>
        </motion.div>
      </div>

      <motion.div
        className="sgi-hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
      >
        <div className="sgi-hero-visual-core">
          <div className="sgi-core-ring"></div>
          <div className="sgi-core-ring two"></div>
          <div className="sgi-core-ring three"></div>

          <div className="sgi-core-center">SGI</div>
        </div>

        <div className="sgi-hero-floating-card top">
          <strong>Network Operations</strong>
          <span>Enterprise visibility and connectivity.</span>
        </div>

        <div className="sgi-hero-floating-card middle">
          <strong>Security Infrastructure</strong>
          <span>Cybersecurity, surveillance and access control.</span>
        </div>

        <div className="sgi-hero-floating-card bottom">
          <strong>Managed Operations</strong>
          <span>Monitoring, support and lifecycle continuity.</span>
        </div>
      </motion.div>
    </section>
  );
}