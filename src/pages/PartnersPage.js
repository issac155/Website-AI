import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";
import {
  FaGlobe,
  FaTag,
  FaHandshake,
  FaSun,
  FaLightbulb,
  FaMicrochip,
  FaChargingStation,
} from "react-icons/fa";

const PartnersPage = () => {
  const partners = [
    { name: "Honeywell", country: "USA", category: "ELV Systems" },
    { name: "LG Solar", country: "South Korea", category: "Solar Solutions" },
    { name: "Schneider Electric", country: "France", category: "Electrical" },
    { name: "ABB", country: "Switzerland", category: "Automation" },
    { name: "HIKVISION", country: "China", category: "Security Systems" },
    { name: "Castaldi", country: "Italy", category: "Lighting" },
    { name: "Alerton", country: "USA", category: "Building Automation" },
    { name: "Fronius", country: "Austria", category: "Solar Inverters" },
    { name: "Tridonic", country: "Austria", category: "Lighting Controls" },
    { name: "YoCharge", country: "India", category: "EV Charging" },
    { name: "First Solar", country: "USA", category: "Solar Panels" },
    { name: "SunPower", country: "USA", category: "Solar Solutions" },
  ];

  const strategicAlliances = [
    { name: "Frequency International LLC", type: "Technology Partner" },
    { name: "Kauther Energy & Services LLC", type: "Energy Solutions" },
    { name: "Core Vision International SPC", type: "Towards AI" },
    // { name: "Towards AI", type: "Technology Innovation" },
  ];

  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Our Partners</h1>
          <p>Strategic alliances with global technology leaders</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">BRAND PARTNERSHIPS</div>
              <h2 className="section-title">Global Technology Partners</h2>
              <p className="section-desc">
                We partner with leading global brands to deliver premium
                solutions and stay at the forefront of technology.
              </p>
            </div>

            <div className="partners-grid-full">
              {partners.map((partner, index) => (
                <div className="partner-card" key={index}>
                  <div className="partner-logo">
                    <span className="partner-name">{partner.name}</span>
                  </div>
                  <div className="partner-info">
                    <div className="partner-country">
                      <FaGlobe /> {partner.country}
                    </div>
                    <div className="partner-category">
                      <FaTag /> {partner.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section light-bg">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">STRATEGIC ALLIANCES</div>
              <h2 className="section-title">Joint Ventures & Collaborations</h2>
              <p className="section-desc">
                Strategic alliances established to strengthen delivery
                capabilities, technology access, and specialized expertise.
              </p>
            </div>

            <div className="alliances-grid">
              {strategicAlliances.map((alliance, index) => (
                <div className="alliance-card" key={index}>
                  <div className="alliance-icon">
                    <FaHandshake />
                  </div>
                  <div className="alliance-info">
                    <h4>{alliance.name}</h4>
                    <p>{alliance.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">SOLUTIONS BY CATEGORY</div>
              <h2 className="section-title">Our Technology Stack</h2>
            </div>

            <div className="solutions-categories">
              <div className="category-card">
                <div className="category-icon">
                  <FaSun />{" "}
                </div>
                <h4>Solar Solutions</h4>
                <ul>
                  <li>LG Solar Panels</li>
                  <li>First Solar</li>
                  <li>Sun Power</li>
                  <li>Fronius Inverters</li>
                </ul>
              </div>

              <div className="category-card">
                <div className="category-icon">
                  <FaLightbulb />{" "}
                </div>
                <h4>Lighting Solutions</h4>
                <ul>
                  <li>Castaldi - Italy</li>
                  <li>Enlight - UK</li>
                  <li>Auralis - Italy</li>
                  <li>Exor - UK</li>
                </ul>
              </div>

              <div className="category-card">
                <div className="category-icon">
                  <FaMicrochip />
                </div>
                <h4>ELV Systems</h4>
                <ul>
                  <li>Honeywell - USA</li>
                  <li>Alerton - USA</li>
                  <li>CBRO - India</li>
                  <li>HIKVISION</li>
                </ul>
              </div>

              <div className="category-card">
                <div className="category-icon">
                  <FaChargingStation />
                </div>
                <h4>EV Charging</h4>
                <ul>
                  <li>Sino - China</li>
                  <li>YoCharge - India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Become Our Partner</h2>
            <p>
              Interested in partnering with us? Contact our partnership team
            </p>
            <Link to="/contact" className="cta-button cta-primary">
              <i className="fas fa-handshake"></i> Partnership Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
