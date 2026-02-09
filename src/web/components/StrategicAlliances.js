import React from "react";
// import "./StrategicAlliances.css";
import {
  FaWaveSquare,
  FaSolarPanel,
  FaRobot,
  FaLayerGroup,
  FaMicrochip,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";

const StrategicAlliances = () => {
  const alliances = [
    {
      name: "Frequency International LLC",

      benefits: [
        "Strategic alliance for ELV Integrations with International Clients",
        "Custom built Turnkey solutions for security systems & IT solutions",
        // "Real-time monitoring",
      ],
      icon: FaWaveSquare,
    },
    {
      name: "Kauther Energy & Services LLC",

      benefits: [
        "Strategic alliance for Solar and Energy Management Solutions",
        "Floating Solar, MMS Providers",
      ],
      icon: FaSolarPanel,
    },
    {
      name: "Core Vision International SPC",

      benefits: ["Strategic alliance for AI Implementation & Automation"],
      icon: FaRobot,
    },
  ];

  const advantages = [
    {
      title: "Enhanced Capabilities",
      description:
        "Combine strengths and resources for expanded service offerings.",
      icon: FaLayerGroup,
    },
    {
      title: "Technology Access",
      description: "Access cutting-edge technologies and proprietary systems.",
      icon: FaMicrochip,
    },
    {
      title: "Specialized Expertise",
      description: "Domain expertise for complex projects with precision.",
      icon: FaUserGraduate,
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
                  <alliance.icon size={32} />
                </div>
                <h3>{alliance.name}</h3>
              </div>

              {/* <p className="alliance-description">{alliance.description}</p> */}

              <div className="benefits-list">
                {/* <h4>Key Benefits:</h4> */}
                <ul>
                  {alliance.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      {/* <FaCheckCircle className="check-icon" /> */}
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
                  <advantage.icon size={28} />
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
