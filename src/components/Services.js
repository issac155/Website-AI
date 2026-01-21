import React from "react";
import {
  FaTools,
  FaBuilding,
  FaMicrochip,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaTools,
      title: "MEP Engineering",
      description:
        "Complete mechanical, electrical, and plumbing solutions for residential, commercial, and industrial projects with focus on efficiency and regulatory compliance.",
      features: [
        "HVAC Systems Design",
        "Electrical Power Distribution",
        "Plumbing & Fire Protection",
        "Sustainable Design Integration",
      ],
    },
    {
      icon: FaBuilding,
      title: "Facility Management",
      description:
        "Comprehensive MEP & ELV facility management ensuring reliable building operations, preventive maintenance, and guaranteed 24/7 support with SLA-driven response.",
      features: [
        "Preventive Maintenance",
        "24/7 Emergency Support",
        "Asset Life Optimization",
        "Regulatory Compliance",
      ],
    },
    {
      icon: FaMicrochip,
      title: "ELV System Integration",
      description:
        "Seamless integration of Extra Low Voltage systems for enhanced safety, security, and operational efficiency with centralized control and interoperability.",
      features: [
        "Security Systems Integration",
        "Building Automation",
        "ICT Infrastructure",
        "Smart Building Solutions",
      ],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">OUR EXPERTISE</div>
          <h2 className="section-title">Comprehensive Engineering Services</h2>
          <p className="section-desc">
            We offer end-to-end engineering solutions from concept design to
            project execution, ensuring efficiency, safety, and sustainability
            in every project.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card animate-on-scroll" key={index}>
              <div className="service-icon">
                <service.icon size={36} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>

              {/* <a href="#" className="service-link">
                Explore Service <i className="fas fa-arrow-right"></i>
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
