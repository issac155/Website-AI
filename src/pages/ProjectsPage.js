import React from "react";
import "../styles/PageStyles.css";

const ProjectsPage = () => {
  const projects = [
    {
      category: "Government",
      title: "Ministry of Defense Facilities",
      description:
        "Complete MEP and ELV solutions for Adam Airbase, Khasab, and Mussannah Airbase.",
      features: [
        "Advanced Security Systems",
        "Integrated ELV Solutions",
        "High-Reliability MEP Systems",
      ],
    },
    {
      category: "Healthcare",
      title: "Sultan Qaboos Cancer Center",
      description:
        "State-of-the-art medical facility engineering with specialized MEP systems.",
      features: [
        "Medical Gas Systems",
        "Critical Power Systems",
        "Building Automation",
      ],
    },
    {
      category: "Commercial",
      title: "Royal Opera House & Malls",
      description:
        "Premium MEP and lighting solutions for cultural and commercial landmarks.",
      features: [
        "Architectural Lighting",
        "Energy Efficiency Systems",
        "Public Safety Integration",
      ],
    },
    {
      category: "Hospitality",
      title: "Beach Hotel - Shatti Qurum",
      description:
        "Comprehensive MEP solutions for luxury hospitality facilities.",
      features: ["HVAC Systems", "Electrical Distribution", "Plumbing Systems"],
    },
    {
      category: "Residential",
      title: "Luxury Villas - Qurum & Bowshar",
      description: "High-end residential MEP and ELV installations.",
      features: [
        "Smart Home Systems",
        "Energy Management",
        "Security Integration",
      ],
    },
    {
      category: "Retail",
      title: "Nizwa Grand Mall & Hyper Markets",
      description: "Large-scale commercial retail facilities engineering.",
      features: [
        "Fire Protection",
        "Public Address Systems",
        "Energy Conservation",
      ],
    },
  ];

  const facilityManagement = [
    "Starcare Medical Centre - Duqm",
    "Starcare Medical Centre - Samail",
    "Starcare Medical Centre - Mabelah",
    "Starcare Pharmacy - Seeb",
    "French Bakery - Al Qurum",
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
          <h1>Our Projects</h1>
          <p>Showcasing our diverse portfolio across multiple sectors</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">PORTFOLIO</div>
              <h2 className="section-title">Project Highlights</h2>
              <p className="section-desc">
                We have successfully completed numerous projects across various
                sectors, showcasing our capability to handle complex MEP and ELV
                installations with excellence.
              </p>
            </div>

            <div className="projects-grid-full">
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-header">
                    <span className="project-tag">{project.category}</span>
                    <h4>{project.title}</h4>
                  </div>
                  <div className="project-body">
                    <p>{project.description}</p>
                    <ul className="project-features">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section dark-bg">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div
                className="section-subtitle"
                style={{ color: "var(--accent-gold)" }}
              >
                CLIENT TESTIMONIALS
              </div>
              <h2 className="section-title" style={{ color: "white" }}>
                What Our Clients Say
              </h2>
            </div>

            <div className="testimonials">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <i className="fas fa-quote-left"></i>
                  <p>
                    AI Mavarid delivered exceptional MEP solutions for our
                    cancer center. Their attention to detail and technical
                    expertise ensured all medical systems function perfectly.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h5>Sultan Qaboos Cancer Center</h5>
                    <span>Healthcare Facility</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <i className="fas fa-quote-left"></i>
                  <p>
                    The team demonstrated professionalism and technical
                    excellence throughout our airbase project. Their solutions
                    were innovative and reliable.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h5>Ministry of Defense</h5>
                    <span>Government Project</span>
                  </div>
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
              <div className="section-subtitle">FACILITY MANAGEMENT</div>
              <h2 className="section-title">Ongoing Maintenance Services</h2>
              <p className="section-desc">
                Our comprehensive facility management services ensure reliable
                building operations and optimal performance.
              </p>
            </div>

            <div className="facility-list">
              <div className="facility-grid">
                {facilityManagement.map((facility, index) => (
                  <div className="facility-item" key={index}>
                    <i className="fas fa-building"></i>
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
