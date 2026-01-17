import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";

const EngineeringApproach = () => {
  const approaches = [
    {
      title: "Value Engineering",
      description:
        "Our designs focus on simplicity, functionality, and lifecycle efficiency—reducing cost, complexity, and operational risk for clients with respect to international and local standards.",
      icon: "fas fa-cogs",
    },
    {
      title: "Client Customization",
      description:
        "Every design is customized to meet the specific needs of our clients, taking into account their unique project requirements and environmental considerations.",
      icon: "fas fa-user-cog",
    },
    {
      title: "Sustainability Focus",
      description:
        "We incorporate sustainable practices into our designs, reducing environmental impact and enhancing energy efficiency through innovative technologies and solutions.",
      icon: "fas fa-leaf",
    },
    {
      title: "Collaborative Design",
      description:
        "We maintain close communication with clients throughout the design process to ensure their vision is realized, achieving a collaborative approach to engineering design.",
      icon: "fas fa-handshake",
    },
    {
      title: "Quality Assurance",
      description:
        "Strict quality control measures at every stage, ensuring all installations meet local and international compliance standards.",
      icon: "fas fa-award",
    },
    {
      title: "Technology Integration",
      description:
        "Leveraging advanced engineering software and tools for precise design and planning, enabling successful project execution with minimized risks.",
      icon: "fas fa-laptop-code",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Engineering Design Approach</h1>
          <p>
            Our methodology for delivering exceptional engineering solutions
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">OUR METHODOLOGY</div>
              <h2 className="section-title">Design Philosophy</h2>
              <p className="section-desc">
                We combine technical expertise with innovative thinking to
                create solutions that are efficient, sustainable, and tailored
                to client needs.
              </p>
            </div>

            <div className="approaches-grid">
              {approaches.map((approach, index) => (
                <div className="approach-card" key={index}>
                  <div className="approach-icon">
                    <i className={approach.icon}></i>
                  </div>
                  <h3>{approach.title}</h3>
                  <p>{approach.description}</p>
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
              <div className="section-subtitle">PROCESS</div>
              <h2 className="section-title">Our Design Process</h2>
            </div>

            <div className="process-timeline">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Consultation & Analysis</h4>
                  <p>
                    Understanding client requirements and project constraints
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Concept Design</h4>
                  <p>Developing preliminary designs and engineering concepts</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Detailed Engineering</h4>
                  <p>
                    Creating comprehensive engineering drawings and
                    specifications
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Implementation Planning</h4>
                  <p>Developing project schedules and resource plans</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Quality Review</h4>
                  <p>Conducting thorough reviews and compliance checks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringApproach;
