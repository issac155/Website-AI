import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";
import {
  FaCalendarAlt,
  FaUsers,
  FaProjectDiagram,
  FaEye,
  FaBullseye,
  FaStar,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Company Overview</h1>
          <p>
            Learn about our foundation, growth, and commitment to engineering
            excellence
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">OUR STORY</div>
              <h2 className="section-title">Foundation and Growth</h2>
            </div>

            <div className="about-content">
              <div className="about-text">
                <p>
                  Founded in 2018, we are an SME Riyada-registered company
                  recognized for providing reliable and quality-driven MEP and
                  ELV solutions in Oman.
                </p>
                <p>
                  We pride ourselves on being technology-driven in delivering
                  ideas and engineered lighting solutions that redefine modern
                  spaces. Our team of experts combines creativity and technical
                  precision to design and deliver MEP, ELV and LED lighting
                  systems tailored to meet your unique needs.
                </p>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaCalendarAlt />
                  </div>
                  <span className="stat-number">8+</span>
                  <span className="stat-text">Years of Excellence</span>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <FaUsers />
                  </div>
                  <span className="stat-number">50+</span>
                  <span className="stat-text">Expert Team</span>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <FaProjectDiagram />
                  </div>
                  <span className="stat-number">100+</span>
                  <span className="stat-text">Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section light-bg">
        <div className="container">
          <div className="page-content">
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <FaEye />
                </div>
                <h3>Vision</h3>
                <p>
                  To be a trusted engineering partner delivering intelligent,
                  sustainable, and value-driven MEP & ELV solutions across Oman.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaBullseye />
                </div>
                <h3>Mission</h3>
                <p>
                  To engineer reliable systems through innovation, technical
                  excellence, and result-oriented delivery—ensuring long-term
                  value for every client.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaStar />
                </div>
                <h3>Core Values</h3>
                <p>
                  We are driven by integrity, professionalism, excellence, and
                  sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">LEADERSHIP</div>
              <h2 className="section-title">Our Leadership Team</h2>
            </div>

            <div className="team-grid">
              <div className="team-card">
                <div className="team-img"></div>
                <div className="team-info">
                  <h4>Al Yaqdhan</h4>
                  <p className="team-role">Managing Director</p>
                  <p className="team-desc">
                    18+ years of industry experience in MEP and ELV solutions
                  </p>
                </div>
              </div>

              <div className="team-card">
                <div className="team-img"></div>
                <div className="team-info">
                  <h4>Vignesh Potti</h4>
                  <p className="team-role">Technical Director</p>
                  <p className="team-desc">
                    Expert in engineering design and project management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>Contact our team to discuss your project requirements</p>
            <Link to="/contact" className="cta-button cta-primary">
              <i className="fas fa-envelope"></i> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
