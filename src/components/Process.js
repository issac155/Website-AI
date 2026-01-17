import React from "react";

const Process = () => {
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Analysis",
      icon: "fas fa-comments",
      description:
        "We begin with understanding your requirements, project scope, and objectives through detailed consultations.",
      activities: [
        "Needs assessment",
        "Site evaluation",
        "Budget analysis",
        "Technical feasibility study",
      ],
    },
    {
      step: "02",
      title: "Design & Engineering",
      icon: "fas fa-drafting-compass",
      description:
        "Our engineering team creates detailed designs using advanced software, focusing on efficiency and compliance.",
      activities: [
        "Conceptual design",
        "Detailed engineering",
        "Value engineering",
        "Sustainability integration",
      ],
    },
    {
      step: "03",
      title: "Approval & Planning",
      icon: "fas fa-clipboard-check",
      description:
        "We obtain necessary approvals and develop comprehensive project execution plans.",
      activities: [
        "Regulatory approvals",
        "Resource planning",
        "Timeline development",
        "Risk assessment",
      ],
    },
    {
      step: "04",
      title: "Execution & Installation",
      icon: "fas fa-hard-hat",
      description:
        "Skilled technicians execute the project with strict quality control and safety protocols.",
      activities: [
        "Material procurement",
        "Skilled installation",
        "Quality inspections",
        "Progress monitoring",
      ],
    },
    {
      step: "05",
      title: "Testing & Commissioning",
      icon: "fas fa-vial",
      description:
        "All systems undergo rigorous testing and commissioning to ensure optimal performance.",
      activities: [
        "System testing",
        "Performance verification",
        "Documentation",
        "Client training",
      ],
    },
    {
      step: "06",
      title: "Support & Maintenance",
      icon: "fas fa-headset",
      description:
        "We provide ongoing support and maintenance to ensure long-term system reliability.",
      activities: [
        "Preventive maintenance",
        "24/7 support",
        "Performance monitoring",
        "System optimization",
      ],
    },
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">OUR METHODOLOGY</div>
          <h2 className="section-title">Project Delivery Process</h2>
          <p className="section-desc">
            Our systematic approach ensures every project is delivered on time,
            within budget, and to the highest quality standards.
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div
              className={`process-step animate-on-scroll ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={index}
            >
              <div className="step-marker">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">
                  <i className={step.icon}></i>
                </div>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-activities">
                  <h4>Key Activities:</h4>
                  <ul>
                    {step.activities.map((activity, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i> {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="process-principles animate-on-scroll">
          <h3>Our Engineering Principles</h3>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h4>Value Engineering</h4>
              <p>
                Optimizing designs for cost, performance, and lifecycle
                efficiency
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h4>Sustainability</h4>
              <p>
                Incorporating eco-friendly practices and energy-efficient
                solutions
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Quality Assurance</h4>
              <p>Stringent quality checks at every stage of project delivery</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Client Collaboration</h4>
              <p>
                Transparent communication and partnership throughout the process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
