import React from "react";
import "./LogoWall.css";

import cisco from "../assets/logos/cisco.png";
import crestron from "../assets/logos/crestron.png";
import dahua from "../assets/logos/dahua.png";
import fortinet from "../assets/logos/fortinet.png";
import hikvision from "../assets/logos/Hikvision.png";
import honeywell from "../assets/logos/honeywell.png";
import leviton from "../assets/logos/leviton.png";
import lorex from "../assets/logos/lorex.png";
import ubiquiti from "../assets/logos/ubiquiti.png";

export default function LogoWall() {
  const logos = [
    cisco,
    crestron,
    dahua,
    fortinet,
    hikvision,
    honeywell,
    leviton,
    lorex,
    ubiquiti,
  ];

  return (
    <section className="sgi-logo-wall">
      <div className="logo-wall-inner">

        <div className="logo-wall-heading">
          <p>Technology Ecosystem</p>

          <h2>
            Trusted platforms powering modern infrastructure.
          </h2>
        </div>

        <div className="logo-marquee">

          <div className="logo-track">

            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-card" key={index}>
                <img
                  src={logo}
                  alt="Enterprise technology partner"
                />
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}