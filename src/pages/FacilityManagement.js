import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";

const FacilityManagement = () => {
  const services = [
    {
      title: "Preventive Maintenance",
      description:
        "Regular maintenance to prevent equipment failure and extend asset life",
      features: [
        "Scheduled inspections",
        "Predictive maintenance",
        "Equipment calibration",
      ],
    },
    {
      title: "Corrective Maintenance",
      description: "Prompt response to equipment failures and system issues",
      features: [
        "24/7 emergency support",
        "Rapid response teams",
        "Spare parts management",
      ],
    },
    {
      title: "Energy Management",
      description:
        "Optimizing energy consumption and reducing operational costs",
      features: [
        "Energy audits",
        "Efficiency improvements",
        "Monitoring systems",
      ],
    },
    {
      title: "Compliance Management",
      description: "Ensuring all systems meet regulatory requirements",
      features: [
        "Regulatory compliance",
        "Safety inspections",
        "Documentation management",
      ],
    },
  ];

  const clients = [
    "Starcare Medical Centres (Multiple Locations)",
    "Intercity Hotel - Nizwa",
    "Nasser Al Serkal Group - Ruwi",
    "Mega mart - Musanah",
    "Beach Hotel - Al Qurum",
    "Turkish Embassy",
    "Salalah Freezone - Al Qurum",
    "ESO Engineering Consultants - Al Qurum",
  ];

  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Facility Management</h1>
          <p>Ensuring reliable building operations and optimal performance</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">OUR SERVICES</div>
              <h2 className="section-title">
                Comprehensive Facility Management
              </h2>
              <p className="section-desc">
                We provide comprehensive MEP & ELV facility management services
                ensuring reliable building operations, preventive maintenance,
                and 24/7 support.
              </p>
            </div>

            <div className="facility-services">
              {services.map((service, index) => (
                <div className="facility-service-card" key={index}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
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
              <div className="section-subtitle">OUR APPROACH</div>
              <h2 className="section-title">SLA-Driven Service Delivery</h2>
            </div>

            <div className="sla-features">
              <div className="sla-feature">
                <div className="sla-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="sla-content">
                  <h4>Response Time Guarantee</h4>
                  <p>Guaranteed response times for emergency calls</p>
                </div>
              </div>

              <div className="sla-feature">
                <div className="sla-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="sla-content">
                  <h4>Performance Monitoring</h4>
                  <p>
                    Continuous monitoring of system performance and efficiency
                  </p>
                </div>
              </div>

              <div className="sla-feature">
                <div className="sla-icon">
                  <i className="fas fa-file-contract"></i>
                </div>
                <div className="sla-content">
                  <h4>Transparent Reporting</h4>
                  <p>
                    Regular reports on maintenance activities and system status
                  </p>
                </div>
              </div>

              <div className="sla-feature">
                <div className="sla-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="sla-content">
                  <h4>Dedicated Account Manager</h4>
                  <p>
                    Single point of contact for all facility management needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">CLIENT PORTFOLIO</div>
              <h2 className="section-title">Facility Management Clients</h2>
            </div>

            <div className="facility-clients">
              <div className="clients-grid">
                {clients.map((client, index) => (
                  <div className="client-item" key={index}>
                    <i className="fas fa-building"></i>
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Facility Management Services?</h2>
            <p>Contact us for a customized facility management proposal</p>
            <Link to="/contact" className="cta-button cta-primary">
              <i className="fas fa-calendar-check"></i> Request Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilityManagement;
