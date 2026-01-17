import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";

const LightingSolarSolutions = () => {
  const lightingBrands = [
    { name: "Castaldi", country: "Italy", category: "Architectural Lighting" },
    { name: "Enlight", country: "UK", category: "Commercial Lighting" },
    { name: "Auralis", country: "Italy", category: "Decorative Lighting" },
    { name: "Exor", country: "UK", category: "Lighting Controls" },
    { name: "Tridonic", country: "Austria", category: "LED Drivers" },
  ];

  const solarBrands = [
    { name: "LG Solar", country: "South Korea", category: "Solar Panels" },
    { name: "First Solar", country: "USA", category: "Thin Film Panels" },
    { name: "SunPower", country: "USA", category: "High-Efficiency Panels" },
    { name: "Fronius", country: "Austria", category: "Solar Inverters" },
    { name: "ABB", country: "Switzerland", category: "Power Electronics" },
    { name: "Schneider", country: "France", category: "Electrical Components" },
  ];

  const evBrands = [
    { name: "Sino", country: "China", category: "EV Charging Stations" },
    { name: "YoCharge", country: "India", category: "Smart Charging" },
  ];

  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Lighting & Solar Solutions</h1>
          <p>Innovative sustainable energy and lighting solutions</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">LIGHTING SOLUTIONS</div>
              <h2 className="section-title">Innovative Lighting Design</h2>
              <p className="section-desc">
                We provide cutting-edge lighting solutions that combine
                aesthetics with energy efficiency and smart control systems.
              </p>
            </div>

            <div className="solutions-categories">
              <div className="solution-category">
                <h3>Architectural Lighting</h3>
                <p>Custom lighting designs for buildings and structures</p>
              </div>

              <div className="solution-category">
                <h3>Commercial Lighting</h3>
                <p>Energy-efficient lighting for commercial spaces</p>
              </div>

              <div className="solution-category">
                <h3>Smart Lighting Controls</h3>
                <p>Automated and programmable lighting systems</p>
              </div>

              <div className="solution-category">
                <h3>LED Solutions</h3>
                <p>Energy-saving LED installations and retrofits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section light-bg">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">SOLAR ENERGY</div>
              <h2 className="section-title">Solar Power Solutions</h2>
              <p className="section-desc">
                Comprehensive solar PV and heating systems for residential,
                commercial, and industrial applications.
              </p>
            </div>

            <div className="solar-solutions">
              <div className="solar-solution">
                <div className="solar-icon">
                  <i className="fas fa-solar-panel"></i>
                </div>
                <div className="solar-content">
                  <h4>Solar PV Systems</h4>
                  <p>Grid-tied and off-grid solar power generation systems</p>
                </div>
              </div>

              <div className="solar-solution">
                <div className="solar-icon">
                  <i className="fas fa-water"></i>
                </div>
                <div className="solar-content">
                  <h4>Solar Water Heating</h4>
                  <p>
                    Energy-efficient solar thermal systems for water heating
                  </p>
                </div>
              </div>

              <div className="solar-solution">
                <div className="solar-icon">
                  <i className="fas fa-battery-full"></i>
                </div>
                <div className="solar-content">
                  <h4>Energy Storage</h4>
                  <p>Battery storage solutions for energy independence</p>
                </div>
              </div>

              <div className="solar-solution">
                <div className="solar-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="solar-content">
                  <h4>Energy Monitoring</h4>
                  <p>Real-time monitoring and energy management systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">BRAND PARTNERS</div>
              <h2 className="section-title">Premium Technology Partners</h2>
            </div>

            <div className="brands-section">
              <div className="brand-category">
                <h3>Lighting Brands</h3>
                <div className="brands-grid">
                  {lightingBrands.map((brand, index) => (
                    <div className="brand-card" key={index}>
                      <h4>{brand.name}</h4>
                      <p>{brand.country}</p>
                      <small>{brand.category}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className="brand-category">
                <h3>Solar Brands</h3>
                <div className="brands-grid">
                  {solarBrands.map((brand, index) => (
                    <div className="brand-card" key={index}>
                      <h4>{brand.name}</h4>
                      <p>{brand.country}</p>
                      <small>{brand.category}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className="brand-category">
                <h3>EV Charging Brands</h3>
                <div className="brands-grid">
                  {evBrands.map((brand, index) => (
                    <div className="brand-card" key={index}>
                      <h4>{brand.name}</h4>
                      <p>{brand.country}</p>
                      <small>{brand.category}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Sustainable Solutions?</h2>
            <p>Contact us for energy-efficient lighting and solar solutions</p>
            <Link to="/contact" className="cta-button cta-primary">
              <i className="fas fa-sun"></i> Get Energy Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightingSolarSolutions;
