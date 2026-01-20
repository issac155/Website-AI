import React, { useState, useEffect, useRef } from "react";

// Import logos - You'll need to add actual logo files to your project
// For now, I'll use placeholder SVG logos with brand colors
const Partners = () => {
  const partners = [
    {
      name: "Honeywell",
      logo: (
        <svg viewBox="0 0 100 40" className="logo-svg">
          <text x="10" y="25" className="logo-text honeywell">
            Honeywell
          </text>
        </svg>
      ),
      color: "#0033a0",
    },
    {
      name: "LG Solar",
      logo: (
        <svg viewBox="0 0 100 40" className="logo-svg">
          <text x="10" y="25" className="logo-text lg">
            LG Solar
          </text>
        </svg>
      ),
      color: "#a50034",
    },
    {
      name: "Schneider Electric",
      logo: (
        <svg viewBox="0 0 100 40" className="logo-svg">
          <text x="10" y="25" className="logo-text schneider">
            Schneider
          </text>
        </svg>
      ),
      color: "#3dcd58",
    },
    {
      name: "ABB",
      logo: (
        <svg viewBox="0 0 100 40" className="logo-svg">
          <text x="30" y="25" className="logo-text abb">
            ABB
          </text>
        </svg>
      ),
      color: "#ff0000",
    },
    {
      name: "HIKVISION",
      logo: (
        <svg viewBox="0 0 100 40" className="logo-svg">
          <text x="10" y="25" className="logo-text hikvision">
            HIKVISION
          </text>
        </svg>
      ),
      color: "#00a0e9",
    },
    {
      name: "Siemens",
      logo: (
        <svg viewBox="0 0 100 40" className="logo-svg">
          <text x="15" y="25" className="logo-text siemens">
            Siemens
          </text>
        </svg>
      ),
      color: "#009999",
    },
    {
      name: "Delta",
      logo: (
        <svg viewBox="0 0 100 40" className="logo-svg">
          <text x="25" y="25" className="logo-text delta">
            Delta
          </text>
        </svg>
      ),
      color: "#003366",
    },
    {
      name: "Castaldi",
      logo: (
        <svg viewBox="0 0 100 40" className="logo-svg">
          <text x="25" y="25" className="logo-text tesla">
            Castaldi
          </text>
        </svg>
      ),
      color: "#e82127",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= partners.length - 5 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, partners.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partners.length - 5 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= partners.length - 5 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">TRUSTED PARTNERSHIPS</div>
          <h2 className="section-title">Strategic Alliances & Brands</h2>
          <p className="section-desc">
            We partner with leading global brands to deliver premium solutions
            and stay at the forefront of technology.
          </p>
        </div>

        <div className="partners-slider-container">
          <div
            className="partners-slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / 5)}%)`,
            }}
            ref={containerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {partners.map((partner, index) => (
              <div
                className="partner-logo-wrapper animate-on-scroll"
                key={index}
              >
                <div className="partner-logo-card">
                  <div className="logo-container">{partner.logo}</div>
                  <div className="partner-name">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button
            className="slider-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous partners"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="slider-dots">
            {Array.from({
              length: Math.max(1, partners.length - 4),
            }).map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            className="slider-btn next-btn"
            onClick={handleNext}
            aria-label="Next partners"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="partners-note">
          <p>
            <i className="fas fa-handshake"></i> Our partnerships ensure
            high-quality components, technical support, and continuous
            innovation in every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
