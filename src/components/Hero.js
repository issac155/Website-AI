import React from "react";
import mainImage from "../Images/Hero2.jpg";
import electricalImage from "../../src/Images/Hero4.jpg";
import lightingImage from "../Images/Hero1.jpg";
import smartBuildingImage from "../Images/Hero3.jpg";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            {/* <div className="hero-badge">
              <i className="fas fa-award"></i>
              <span>Riyada-Registered SME Since 2018</span>
            </div> */}

            <h1>
              <span className="hero-highlight">Build By Brilliance</span>
              <br />
              Intelligent Engineering Solutions for Modern Oman
            </h1>

            <p>
              We are a technology-driven engineering firm specializing in MEP,
              ELV, and lighting solutions that redefine modern spaces across
              Oman. Combining creativity with technical precision to deliver
              sustainable, value-driven projects.
            </p>

            <div className="cta-buttons">
              <a href="#contact" className="cta-button cta-primary">
                <i className="fas fa-calendar-check"></i> Schedule Consultation
              </a>
              <a href="#projects" className="cta-button cta-secondary">
                <i className="fas fa-chart-line"></i> View Our Projects
              </a>
            </div>

            {/* Stats Section */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Expert Engineers</span>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              {/* Main Engineering Image */}
              <img
                src={mainImage}
                alt="Modern MEP Engineering Solutions in Oman"
                className="hero-main-image"
              />

              {/* Secondary Images - Grid */}
              <div className="image-grid">
                <div className="grid-item grid-item-1">
                  <img
                    src={electricalImage}
                    alt="Electrical Systems Installation"
                  />
                  <div className="grid-overlay">
                    <i className="fas fa-bolt"></i>
                    <span>Electrical</span>
                  </div>
                </div>
                <div className="grid-item grid-item-2">
                  <img src={electricalImage} alt="HVAC Engineering" />
                  <div className="grid-overlay">
                    <i className="fas fa-wind"></i>
                    <span>HVAC</span>
                  </div>
                </div>
                <div className="grid-item grid-item-3">
                  <img src={lightingImage} alt="Lighting Design" />
                  <div className="grid-overlay">
                    <i className="fas fa-lightbulb"></i>
                    <span>Lighting</span>
                  </div>
                </div>
                <div className="grid-item grid-item-4">
                  <img
                    src={smartBuildingImage}
                    alt="Smart Building Solutions"
                  />
                  <div className="grid-overlay">
                    <i className="fas fa-building"></i>
                    <span>Smart Building</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              {/* <div className="floating-badge">
                <i className="fas fa-check-circle"></i>
                <span>ISO 9001 Certified</span>
              </div> */}

              {/* Project Award Badge */}
              {/* <div className="award-badge">
                <i className="fas fa-trophy"></i>
                <div className="award-text">
                  <span className="award-title">Best MEP Contractor 2023</span>
                  <span className="award-subtitle">
                    Oman Construction Awards
                  </span>
                </div>
              </div> */}
            </div>

            {/* Engineering Team Card */}
            {/* <div className="team-card-floating">
              <div className="team-avatar">
                <i className="fas fa-user-hard-hat"></i>
              </div>
              <div className="team-info">
                <h4>Ali Al-Siyabi</h4>
                <p>Senior Project Manager</p>
                <div className="team-experience">
                  <i className="fas fa-star"></i>
                  <span>15 Years Experience</span>
                </div>
              </div>
            </div> */}

            {/* Ongoing Project Card */}
            {/* <div className="project-card-floating">
              <div className="project-icon">
                <i className="fas fa-city"></i>
              </div>
              <div className="project-info">
                <h4>Muscat Grand Mall</h4>
                <p>MEP Installation • 85% Complete</p>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span>85%</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
