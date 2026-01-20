import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";
import {
  FaTools,
  FaBuilding,
  FaMicrochip,
  FaLightbulb,
  FaSun,
  FaTasks,
  FaCheck,
  FaArrowRight,
  FaAward,
  FaClock,
  FaHandshake,
  FaLeaf,
  FaCalendarCheck,
  FaCertificate,
  FaFileDownload,
} from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      title: "MEP Engineering",
      icon: <FaTools />,
      description: "Complete mechanical, electrical, and plumbing solutions",
      features: [
        "HVAC Systems Design",
        "Electrical Power Distribution",
        "Plumbing & Fire Protection",
        "Sustainable Design Integration",
      ],
      link: "/services/mep",
    },
    {
      title: "Facility Management",
      icon: <FaBuilding />,
      description: "Comprehensive MEP & ELV facility management services",
      features: [
        "Preventive Maintenance",
        "24/7 Emergency Support",
        "Asset Life Optimization",
        "Regulatory Compliance",
      ],
      link: "/facility-management",
    },
    {
      title: "ELV System Integration",
      icon: <FaMicrochip />,
      description: "Seamless integration of ELV systems for enhanced safety",
      features: [
        "Security Systems Integration",
        "Building Automation",
        "ICT Infrastructure",
        "Smart Building Solutions",
      ],
      link: "/services/elv",
    },
    {
      title: "Lighting Solutions",
      icon: <FaLightbulb />,
      description: "Innovative lighting design and control systems",
      features: [
        "Architectural Lighting",
        "LED Solutions",
        "Smart Lighting Controls",
        "Energy-Efficient Designs",
      ],
      link: "/lighting-solar-solutions",
    },
    {
      title: "Solar Solutions",
      icon: <FaSun />,
      description: "Comprehensive solar PV and heating options",
      features: [
        "Solar Panel Installation",
        "Solar Heating Systems",
        "Energy Storage Solutions",
        "Grid Integration",
      ],
      link: "/lighting-solar-solutions",
    },
    {
      title: "Project Management",
      icon: <FaTasks />,
      description: "End-to-end project management services",
      features: [
        "Project Planning",
        "Cost Control",
        "Quality Assurance",
        "Timely Delivery",
      ],
      link: "/services/project-management",
    },
    {
      title: "ELV Services",
      icon: <FaTasks />,
      description: "Advanced integration systems.",
      features: [
        "Honeywell - USA",
        "Alerton - USA",
        "Process Measuring Instruments & Controls CBRO - India",
        "HIKVISION",
      ],
      link: "/services/project-management",
    },
    {
      title: "EV Stations",
      icon: <FaTasks />,
      description: "Charging stations with Payment Gateways",
      features: ["Sino - China", "YoCharge - India"],
      link: "/services/project-management",
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "SME Registration Certificate",
      issuer: "SME Development Authority - Oman",
      issueDate: "2023",
      expiryDate: "2024",
      description: "Registered Small and Medium Enterprise (SME) with Riyada",
      registrationNo: "CR & Riyada Copy",
      holderName: "Al Mawarid Services and Maintenance",
      holderPerson: "Safiya Nasser Al Busaidiyah",
      fileUrl: "/certificates/cr_riyada_copy.pdf", // Path to your PDF file
      icon: <FaCertificate />,
    },
    // Add more certificates here if needed
  ];

  const handleDownload = (fileUrl, fileName) => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName || "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Comprehensive engineering solutions for residential, commercial, and
            industrial projects
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">OUR EXPERTISE</div>
              <h2 className="section-title">
                Comprehensive Engineering Services
              </h2>
              <p className="section-desc">
                We offer end-to-end engineering solutions from concept design to
                project execution, ensuring efficiency, safety, and
                sustainability in every project.
              </p>
            </div>

            <div className="services-grid-full">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>

                  {/* <Link to={service.link} className="service-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Certificates Section */}
      <section className="certificates-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">
                CREDENTIALS & REGISTRATIONS
              </div>
              <h2 className="section-title">Certificates & Accreditations</h2>
              <p className="section-desc">
                Official certifications and registrations demonstrating our
                compliance and commitment to quality standards.
              </p>
            </div>

            <div className="certificates-grid">
              {certificates.map((cert) => (
                <div className="certificate-card" key={cert.id}>
                  <div className="certificate-header">
                    <div className="certificate-icon">{cert.icon}</div>
                    <div className="certificate-title">
                      <h3>{cert.title}</h3>
                      <span className="certificate-issuer">
                        <i className="fas fa-building"></i> {cert.issuer}
                      </span>
                    </div>
                  </div>

                  <div className="certificate-details">
                    <div className="detail-row">
                      <div className="detail-label">
                        <i className="fas fa-file-alt"></i> Registration No:
                      </div>
                      <div className="detail-value">{cert.registrationNo}</div>
                    </div>

                    <div className="detail-row">
                      <div className="detail-label">
                        <i className="fas fa-user"></i> Company:
                      </div>
                      <div className="detail-value">{cert.holderName}</div>
                    </div>

                    <div className="detail-row">
                      <div className="detail-label">
                        <i className="fas fa-user-tie"></i> Holder:
                      </div>
                      <div className="detail-value">{cert.holderPerson}</div>
                    </div>

                    <div className="detail-row">
                      <div className="detail-label">
                        <i className="fas fa-calendar-alt"></i> Issue Date:
                      </div>
                      <div className="detail-value">{cert.issueDate}</div>
                    </div>

                    <div className="detail-row">
                      <div className="detail-label">
                        <i className="fas fa-calendar-times"></i> Expiry Date:
                      </div>
                      <div className="detail-value">{cert.expiryDate}</div>
                    </div>
                  </div>

                  <div className="certificate-description">
                    <p>{cert.description}</p>
                  </div>

                  <div className="certificate-actions">
                    <button
                      className="download-btn"
                      onClick={() => handleDownload(cert.fileUrl, cert.title)}
                    >
                      <FaFileDownload /> Download Certificate
                    </button>
                    <button
                      className="view-btn"
                      onClick={() => window.open(cert.fileUrl, "_blank")}
                    >
                      <i className="fas fa-eye"></i> View Online
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="certificates-note">
              <div className="note-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="note-content">
                <h4>Compliance & Quality Assurance</h4>
                <p>
                  Our certifications demonstrate compliance with local
                  regulations and international quality standards. We maintain
                  all necessary registrations to operate legally and deliver
                  professional services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section light-bg">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">WHY CHOOSE US</div>
              <h2 className="section-title">Our Service Advantages</h2>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaAward />
                </div>
                <h4>Quality Assurance</h4>
                <p>
                  Strict quality control measures meeting international
                  standards
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <FaClock />
                </div>
                <h4>Timely Delivery</h4>
                <p>Efficient project management ensuring on-time completion</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <FaHandshake />
                </div>
                <h4>Client Collaboration</h4>
                <p>Close communication throughout the project lifecycle</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <FaLeaf />
                </div>
                <h4>Sustainable Solutions</h4>
                <p>Eco-friendly designs reducing environmental impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Solution?</h2>
            <p>Contact us for tailored engineering services</p>
            <Link to="/contact" className="cta-button cta-primary">
              <i className="fas fa-calendar-check"></i> Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
