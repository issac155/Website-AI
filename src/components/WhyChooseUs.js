import React, { useState, useRef, useEffect } from "react";

const WhyChooseUs = () => {
  const [activePoint, setActivePoint] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const reasons = [
    {
      id: 1,
      title: "Experience and Expertise",
      description:
        "Founded in 2018, backed by leadership with 18+ years of industry experience, we possess the knowledge and technical proficiency to manage projects of any scale and complexity.",
      icon: "fas fa-chart-line",
      color: "var(--primary-green)",
      stat: "18+ Years",
      statLabel: "Industry Experience",
    },
    {
      id: 2,
      title: "Technological Advancements",
      description:
        "We leverage advanced engineering software and tools for precise design and planning, enabling the successful execution of projects with minimised risks.",
      icon: "fas fa-microchip",
      color: "var(--accent-gold)",
      stat: "100%",
      statLabel: "Digital Planning",
    },
    {
      id: 3,
      title: "Quality Assurance",
      description:
        "We implement strict quality control measures at every stage of our services, ensuring that all installations meet local and international compliance standards.",
      icon: "fas fa-award",
      color: "var(--accent-copper)",
      stat: "99.8%",
      statLabel: "Quality Score",
    },
    {
      id: 4,
      title: "Cost-Effective Solutions",
      description:
        "Our focus on delivering value engineered solutions competitively priced services without compromising on quality or performance, making us a preferred choice for clients.",
      icon: "fas fa-hand-holding-usd",
      color: "var(--primary-dark)",
      stat: "30%",
      statLabel: "Cost Savings",
    },
  ];

  const diagramPoints = [
    { id: 1, x: 30, y: 20, reason: "Experience and Expertise" },
    { id: 2, x: 70, y: 15, reason: "Quality Focus" },
    { id: 3, x: 85, y: 50, reason: "Cost-Effective" },
    { id: 4, x: 70, y: 85, reason: "Technology" },
    { id: 5, x: 30, y: 80, reason: "Expert Team" },
    { id: 6, x: 15, y: 50, reason: "Reliability" },
    { id: 7, x: 40, y: 40, reason: "Innovation" },
    { id: 8, x: 60, y: 40, reason: "Precision" },
    { id: 9, x: 50, y: 60, reason: "Efficiency" },
    { id: 10, x: 50, y: 20, reason: "Leadership" },
  ];

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto rotate active point
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <section className="why-choose-us" id="why-choose-us" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">OUR DIFFERENTIATORS</div>
          <h2 className="section-title">Why Choose Energeia?</h2>
          <p className="section-desc">
            Discover the unique advantages that make us the preferred partner
            for sustainable energy solutions and electrical projects.
          </p>
        </div>

        <div className="why-content">
          {/* Left side - Interactive Diagram */}
          <div className="diagram-section">
            <div className={`diagram-container ${isVisible ? "animated" : ""}`}>
              {/* Center Circle */}
              <div className="center-circle">
                <div className="center-content">
                  <div className="center-icon">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <h3>Core Strengths</h3>
                </div>
                <div className="pulse-ring"></div>
                <div className="pulse-ring delay-1"></div>
                <div className="pulse-ring delay-2"></div>
              </div>

              {/* Connection Lines */}
              <svg className="connection-lines" width="100%" height="100%">
                {diagramPoints.map((point, index) => {
                  const nextPoint =
                    diagramPoints[(index + 1) % diagramPoints.length];
                  return (
                    <line
                      key={`line-${index}`}
                      x1={`${point.x}%`}
                      y1={`${point.y}%`}
                      x2={`${nextPoint.x}%`}
                      y2={`${nextPoint.y}%`}
                      className="connection-line"
                    />
                  );
                })}
              </svg>

              {/* Points */}
              {diagramPoints.map((point) => (
                <div
                  key={point.id}
                  className={`diagram-point ${
                    point.id <= 4 ? "main-point" : "sub-point"
                  }`}
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    animationDelay: `${point.id * 0.1}s`,
                  }}
                  onMouseEnter={() =>
                    setActivePoint(point.id <= 4 ? point.id - 1 : 0)
                  }
                >
                  <div className="point-ring"></div>
                  <div className="point-center">
                    <span className="point-number">{point.id}</span>
                  </div>
                  <div className="point-tooltip">
                    <span>{point.reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Reasons */}
          <div className="reasons-section">
            <div className="reasons-grid">
              {reasons.map((reason, index) => (
                <div
                  key={reason.id}
                  className={`reason-card ${
                    activePoint === index ? "active" : ""
                  }`}
                  onMouseEnter={() => setActivePoint(index)}
                >
                  <div className="reason-card-header">
                    <div
                      className="reason-icon"
                      style={{ backgroundColor: `${reason.color}15` }}
                    >
                      <i
                        className={reason.icon}
                        style={{ color: reason.color }}
                      ></i>
                    </div>
                    <div className="reason-stats">
                      <div className="reason-stat-number">{reason.stat}</div>
                      <div className="reason-stat-label">
                        {reason.statLabel}
                      </div>
                    </div>
                  </div>

                  <div className="reason-card-body">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>

                  <div className="reason-indicator">
                    <div
                      className="indicator-bar"
                      style={{
                        width: activePoint === index ? "100%" : "0%",
                        backgroundColor: reason.color,
                      }}
                    ></div>
                  </div>

                  <div className="reason-hover-effect"></div>
                </div>
              ))}
            </div>

            {/* Stats Banner */}
            <div className="stats-banner">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">250+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-user-check"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="why-cta">
          <div className="cta-content">
            <h3>Ready to Experience the Difference?</h3>
            <p>
              Contact us today for a personalized consultation and discover how
              we can transform your energy vision into reality.
            </p>
            <a href="#contact" className="cta-button">
              <span className="button-content">
                <i className="fas fa-calendar-check"></i>
                Schedule Consultation
                <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
