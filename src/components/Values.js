import React from "react";
import { FaShieldAlt, FaMedal, FaLeaf } from "react-icons/fa";

const Values = () => {
  const values = [
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our dealings, ensuring transparency and trust with every client.",
    },
    {
      icon: FaMedal,
      title: "Excellence",
      description:
        "We pursue technical perfection and innovation in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: FaLeaf,
      title: "Sustainability",
      description:
        "We incorporate eco-friendly practices and energy-efficient solutions to reduce environmental impact.",
    },
    // {
    //   icon: "fas fa-users-cog",
    //   title: "Professionalism",
    //   description:
    //     "Our team combines expertise with dedication to deliver reliable, timely, and cost-effective solutions.",
    // },
  ];

  return (
    <section className="values" id="values">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">OUR COMMITMENT</div>
          <h2 className="section-title">Core Values That Drive Us</h2>
          <p className="section-desc">
            We are driven by principles that ensure excellence in every project
            and lasting relationships with our clients.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card animate-on-scroll" key={index}>
              <div className="value-icon">
                <value.icon size={34} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
