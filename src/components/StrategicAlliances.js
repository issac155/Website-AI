import React from "react";
// import "./StrategicAlliances.css";

const StrategicAlliances = () => {
  const alliances = [
    {
      name: "Frequency International LLC",
      description:
        "Strategic alliance for frequency management and power stability solutions.",
      benefits: [
        "Advanced frequency control",
        "International compliance",
        "Real-time monitoring",
      ],
      icon: "fas fa-wave-square",
    },
    {
      name: "Kauther Energy & Services LLC",
      description:
        "JV specializing in renewable energy integration and sustainable power solutions.",
      benefits: [
        "Solar-wind hybrid systems",
        "Energy storage",
        "Grid integration",
      ],
      icon: "fas fa-solar-panel",
    },
    {
      name: "Core Vision International SPC",
      description:
        "AI integration for smart grid optimization and energy management.",
      benefits: ["AI analytics", "Smart automation", "IoT platforms"],
      icon: "fas fa-robot",
    },
  ];

  const advantages = [
    {
      title: "Enhanced Capabilities",
      description:
        "Combine strengths and resources for expanded service offerings.",
      icon: "fas fa-layer-group",
    },
    {
      title: "Technology Access",
      description: "Access cutting-edge technologies and proprietary systems.",
      icon: "fas fa-microchip",
    },
    {
      title: "Specialized Expertise",
      description: "Domain expertise for complex projects with precision.",
      icon: "fas fa-user-graduate",
    },
  ];

  return (
    <section className="strategic-alliances" id="alliances">
      <div className="container">
        <div className="section-header">
          <h2>Strategic Alliances & JV's</h2>
          <p>
            Strengthening delivery capabilities, technology access, and
            specialized expertise.
          </p>
        </div>

        {/* Alliance Cards */}
        <div className="alliance-cards">
          {alliances.map((alliance, index) => (
            <div key={index} className="alliance-card">
              <div className="card-header">
                <div className="alliance-icon">
                  <i className={alliance.icon}></i>
                </div>
                <h3>{alliance.name}</h3>
              </div>

              <p className="alliance-description">{alliance.description}</p>

              <div className="benefits-list">
                <h4>Key Benefits:</h4>
                <ul>
                  {alliance.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="advantages-section">
          <h2 className="section-title">Why Choose Our Alliances?</h2>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">
                  <i className={advantage.icon}></i>
                </div>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicAlliances;
