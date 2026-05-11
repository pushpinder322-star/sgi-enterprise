import React from "react";
import "./EnterprisePageHero.css";

export default function EnterprisePageHero({
  eyebrow,
  title,
  description,
  image,
}) {
  return (
    <section className="enterprise-page-hero">
      <div className="enterprise-page-bg">
        {image && <img src={image} alt={title} />}
      </div>

      <div className="enterprise-page-overlay"></div>

      <div className="enterprise-page-inner">
        <p>{eyebrow}</p>

        <h1>{title}</h1>

        <span>{description}</span>
      </div>
    </section>
  );
}