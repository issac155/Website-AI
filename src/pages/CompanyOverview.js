import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";

const CompanyOverview = () => {
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Company Overview</h1>
          <p>Building excellence since 2018</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="company-overview">
            <div className="overview-content">
              <h2>Riyada-Registered SME Since 2018</h2>
              <p>
                AL Mawarid Services & Maintenance SPC is a technology-driven
                engineering firm specializing in MEP, ELV, and lighting
                solutions that redefine modern spaces across Oman.
              </p>

              <div className="overview-points">
                <div className="overview-point">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Founded in 2018</h4>
                    <p>
                      Riyada-registered company providing reliable MEP and ELV
                      solutions
                    </p>
                  </div>
                </div>

                <div className="overview-point">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Technology-Driven</h4>
                    <p>
                      Delivering innovative engineering solutions with technical
                      precision
                    </p>
                  </div>
                </div>

                <div className="overview-point">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Expert Team</h4>
                    <p>
                      Combining creativity and technical expertise for unique
                      solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overview-image">
              {/* Add company image here */}
              <div className="image-placeholder">
                <i className="fas fa-building"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section light-bg">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">OUR CREDENTIALS</div>
              <h2 className="section-title">Certifications & Registrations</h2>
            </div>

            <div className="certifications">
              <div className="certification-card">
                <div className="cert-icon">
                  <i className="fas fa-id-card"></i>
                </div>
                <h4>Riyada Registration</h4>
                <p>Registered SME with SMEs Development Authority since 2018</p>
              </div>

              <div className="certification-card">
                <div className="cert-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4>Quality Standards</h4>
                <p>
                  Compliance with international quality and safety standards
                </p>
              </div>

              <div className="certification-card">
                <div className="cert-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Industry Certifications</h4>
                <p>
                  Trained and certified technical team for specialized services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyOverview;
