import { useEffect, useState } from "react";
import sgiLogo from "../assets/logo/sgi-logo.png";
import EnterpriseOverlayMenu from "./EnterpriseOverlayMenu";

export default function Header({ setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSection, setMenuSection] = useState("main");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = (section = "main") => {
    setMenuSection(section);
    setMenuOpen(true);
  };

  return (
    <>
      <header className={`sgi-header ${scrolled ? "sgi-header-scrolled" : ""}`}>
        <div className="sgi-header-inner">
          <div className="sgi-logo" onClick={() => setPage("home")}>
            <img src={sgiLogo} alt="SmartGuard Innovations SGI logo" />
          </div>

          <nav className="sgi-nav">
            <div className="sgi-nav-item" onClick={() => setPage("home")}>
              Home
            </div>

            <div className="sgi-nav-item" onClick={() => openMenu("solutions")}>
              Solutions
            </div>

            <div className="sgi-nav-item" onClick={() => openMenu("industries")}>
              Industries
            </div>

            <div
              className="sgi-nav-item"
              onClick={() => setPage("managed-services")}
            >
              Managed Services
            </div>

            <div className="sgi-nav-item" onClick={() => openMenu("projects")}>
              Projects
            </div>

            <div className="sgi-nav-item" onClick={() => openMenu("about")}>
              About
            </div>
          </nav>

          <div className="sgi-header-cta">
            <button onClick={() => openMenu("assessment")}>
              Schedule Assessment
            </button>

            <button className="sgi-menu-btn" onClick={() => openMenu("main")}>
              Menu
            </button>
          </div>
        </div>
      </header>

      <EnterpriseOverlayMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        setPage={setPage}
        initialSection={menuSection}
      />
    </>
  );
}