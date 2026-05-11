import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import SolutionPage from "./pages/SolutionPage";
import ServicePage from "./pages/ServicePage";
import IndustryPage from "./pages/IndustryPage";
import ManagedServicesPage from "./pages/ManagedServicesPage";
import "./App.css";
import PageTransition from "./components/PageTransition";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  const [page, setPage] = useState("home");

  const solutionTitles = {
    protect: "Protect",
    connect: "Connect",
    operate: "Operate",
    scale: "Scale",
    automate: "Automate",
  };

  const industryPages = [
    "commercial-offices",
    "retirement-residences",
    "retail-restaurants",
    "transportation-logistics",
    "warehousing",
    "smart-homes",
  ];

  return (
    <>
    <CursorGlow />
      <Header setPage={setPage} />

      <AnimatePresence mode="wait">
        <PageTransition key={page}>
          {page === "home" && <Home setPage={setPage} />}

          {solutionTitles[page] && (
            <SolutionPage
              solutionKey={page}
              title={solutionTitles[page]}
              setPage={setPage}
            />
          )}

          {industryPages.includes(page) && (
            <IndustryPage industryKey={page} setPage={setPage} />
          )}

          {page === "managed-services" && (
            <ManagedServicesPage setPage={setPage} />
          )}

          {page !== "home" &&
            !solutionTitles[page] &&
            !industryPages.includes(page) &&
            page !== "managed-services" && (
              <ServicePage serviceKey={page} setPage={setPage} />
            )}
        </PageTransition>
      </AnimatePresence>
    </>
  );
}