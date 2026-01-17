import React from "react";

const Industries = () => {
  const industries = [
    {
      title: "Government & Defense",
      icon: "fas fa-landmark",
      projects: [
        "Ministry of Defense - Adam Airbase",
        "Ministry of Defense - Khasab",
        "Mussannah Airbase",
        "Hisn A Shumookh Palace",
        "Turkish Embassy",
      ],
      description:
        "Secure, reliable MEP and ELV solutions for critical government infrastructure and defense facilities",
      expertise: [
        "High-security systems",
        "Redundant power systems",
        "Advanced surveillance",
        "Access control",
      ],
    },
    {
      title: "Healthcare",
      icon: "fas fa-hospital",
      projects: [
        "Sultan Qaboos Cancer Center - RCA",
        "Starcare Medical Centre - Duqm",
        "Starcare Medical Centre - Samail",
        "Starcare Medical Centre - Mabelah",
        "Starcare Pharmacy - Seeb",
      ],
      description:
        "Specialized medical facility engineering with critical systems for patient care and safety",
      expertise: [
        "Medical gas systems",
        "Critical power",
        "Hospital automation",
        "Infection control",
      ],
    },
    {
      title: "Commercial & Retail",
      icon: "fas fa-shopping-cart",
      projects: [
        "The Ship Mall",
        "Nizwa Grand Mall",
        "Royal Opera House",
        "Millenium Hyper Market",
        "Al Mouj - The Wave",
      ],
      description:
        "Energy-efficient commercial solutions enhancing customer experience and operational efficiency",
      expertise: [
        "HVAC optimization",
        "Lighting design",
        "Energy management",
        "Building automation",
      ],
    },
    {
      title: "Hospitality",
      icon: "fas fa-hotel",
      projects: [
        "Beach Hotel - Shatti Qurum",
        "Intercity Hotel - Nizwa",
        "Beach Hotel - Al Qurum",
        "Qurum Luxury Villa",
        "Bowshar Luxury Villa",
      ],
      description:
        "Luxury hospitality engineering creating comfortable, efficient, and memorable guest experiences",
      expertise: [
        "Guest room controls",
        "Energy management",
        "Pool systems",
        "Entertainment systems",
      ],
    },
    {
      title: "Industrial",
      icon: "fas fa-industry",
      projects: [
        "Salalah Freezone",
        "Green Farms - RCA",
        "ADC Accommodation - Seeb Palace",
        "French Bakery - Al Qurum",
        "Nasser Al Serkal Group",
      ],
      description:
        "Robust industrial solutions for manufacturing, processing, and industrial facilities",
      expertise: [
        "Process control",
        "Power distribution",
        "Industrial lighting",
        "Safety systems",
      ],
    },
    {
      title: "Education & Cultural",
      icon: "fas fa-graduation-cap",
      projects: [
        "Royal Opera House",
        "Educational Institutions",
        "Cultural Centers",
        "Public Libraries",
        "Museums",
      ],
      description:
        "Specialized solutions for educational and cultural institutions focusing on learning environments",
      expertise: [
        "Acoustic design",
        "Theatrical lighting",
        "AV systems",
        "Climate control",
      ],
    },
  ];

  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">SECTOR EXPERTISE</div>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-desc">
            With diverse experience across multiple sectors, we deliver
            specialized engineering solutions tailored to each industry's unique
            requirements.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card animate-on-scroll" key={index}>
              <div className="industry-icon">
                <i className={industry.icon}></i>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>

              <div className="industry-projects">
                <h4>Notable Projects:</h4>
                <ul>
                  {industry.projects.slice(0, 3).map((project, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i> {project}
                    </li>
                  ))}
                  {industry.projects.length > 3 && (
                    <li className="more-projects">
                      <i className="fas fa-ellipsis-h"></i> +
                      {industry.projects.length - 3} more projects
                    </li>
                  )}
                </ul>
              </div>

              <div className="industry-expertise">
                <h4>Our Expertise:</h4>
                <div className="expertise-tags">
                  {industry.expertise.map((exp, idx) => (
                    <span className="expertise-tag" key={idx}>
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#contact" className="industry-cta">
                <i className="fas fa-envelope"></i> Discuss {industry.title}{" "}
                Project
              </a>
            </div>
          ))}
        </div>

        <div className="industry-stats animate-on-scroll">
          <div className="industry-stat">
            <div className="stat-icon">
              <i className="fas fa-building"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">6+</div>
              <div className="stat-text">Industry Sectors</div>
            </div>
          </div>
          <div className="industry-stat">
            <div className="stat-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">50+</div>
              <div className="stat-text">Completed Projects</div>
            </div>
          </div>
          <div className="industry-stat">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">100%</div>
              <div className="stat-text">Client Retention</div>
            </div>
          </div>
          <div className="industry-stat">
            <div className="stat-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">18+</div>
              <div className="stat-text">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
