import React from "react";

const Projects = () => {
  const projects = [
    {
      tag: "Government",
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
      tag: "Healthcare",
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
      tag: "Commercial",
      title: "Royal Opera House & Malls",
      description:
        "Premium MEP and lighting solutions for cultural and commercial landmarks.",
      features: [
        "Architectural Lighting",
        "Energy Efficiency Systems",
        "Public Safety Integration",
      ],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">PORTFOLIO</div>
          <h2 className="section-title section-title-light">
            Notable Project Highlights
          </h2>
          <p
            className="section-desc"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            We have successfully completed projects across diverse sectors,
            showcasing our versatility and engineering excellence.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card animate-on-scroll" key={index}>
              <div className="project-header">
                <span className="project-tag">{project.tag}</span>
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
    </section>
  );
};

export default Projects;
