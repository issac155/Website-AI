import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Riyada SME Registration",
      number: "CR 1354280",
      issuer: "SMEs Development Authority, Oman",
      validity: "Valid until 2026",
      description:
        "Officially registered Small and Medium Enterprise with the Omani government",
    },
    {
      title: "ISO 9001:2015",
      issuer: "Quality Management Systems",
      validity: "Certified",
      description:
        "International standard for quality management systems ensuring consistent service delivery",
    },
    {
      title: "ISO 14001:2015",
      issuer: "Environmental Management Systems",
      validity: "Certified",
      description:
        "Environmental management certification demonstrating commitment to sustainable practices",
    },
    {
      title: "OHSAS 18001",
      issuer: "Occupational Health & Safety",
      validity: "Certified",
      description:
        "Health and safety management system certification for workplace safety",
    },
    {
      title: "CIDB Grade",
      issuer: "Construction Industry Development Board",
      validity: "Grade G6",
      description:
        "Registered contractor for MEP works in government and private sectors",
    },
    {
      title: "TASNEEF Certified",
      issuer: "Emirates Classification Society",
      validity: "Marine & Offshore",
      description: "Certification for marine and offshore engineering services",
    },
  ];

  const partnerships = [
    {
      name: "Frequency International LLC",
      type: "Technology Partnership",
      focus: "Advanced ELV Solutions",
    },
    {
      name: "Kauther Energy & Services LLC",
      type: "Joint Venture",
      focus: "Solar & Renewable Energy",
    },
    {
      name: "Core Vision International SPC",
      type: "Strategic Alliance",
      focus: "Security Systems Integration",
    },
    {
      name: "Towards AI",
      type: "Technology Partner",
      focus: "Smart Building Solutions",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">QUALITY ASSURANCE</div>
          <h2 className="section-title">Certifications & Partnerships</h2>
          <p className="section-desc">
            Our credentials and strategic alliances ensure we deliver
            world-class engineering solutions that meet international standards.
          </p>
        </div>

        <div className="certifications-grid">
          <div className="certifications-content">
            <h3>Official Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div
                  className="certification-card animate-on-scroll"
                  key={index}
                >
                  <div className="certification-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="certification-details">
                    <h4>{cert.title}</h4>
                    <div className="certification-meta">
                      <span>
                        <i className="fas fa-building"></i> {cert.issuer}
                      </span>
                      {cert.number && (
                        <span>
                          <i className="fas fa-hashtag"></i> {cert.number}
                        </span>
                      )}
                      <span>
                        <i className="fas fa-calendar-check"></i>{" "}
                        {cert.validity}
                      </span>
                    </div>
                    <p>{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="partnerships-content">
            <h3>Strategic Alliances & Joint Ventures</h3>
            <div className="partnerships-list">
              {partnerships.map((partner, index) => (
                <div className="partnership-card animate-on-scroll" key={index}>
                  <h4>{partner.name}</h4>
                  <div className="partnership-type">{partner.type}</div>
                  <div className="partnership-focus">
                    <i className="fas fa-bullseye"></i> {partner.focus}
                  </div>
                  <div className="partnership-benefits">
                    <ul>
                      <li>
                        <i className="fas fa-check"></i> Enhanced Technology
                        Access
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Specialized Expertise
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Strengthened Delivery
                        Capabilities
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="quality-statement animate-on-scroll">
          <div className="quality-icon">
            <i className="fas fa-award"></i>
          </div>
          <div className="quality-content">
            <h3>Our Quality Commitment</h3>
            <p>
              We implement strict quality control measures at every stage of our
              services, ensuring all installations meet both local Omani
              regulations and international compliance standards. Our commitment
              to excellence is reflected in our certifications and the trust
              placed in us by our clients.
            </p>
            <div className="quality-badges">
              <span className="quality-badge">Omani Standards Compliance</span>
              <span className="quality-badge">
                International Best Practices
              </span>
              <span className="quality-badge">Regular Audits & Reviews</span>
              <span className="quality-badge">Continuous Improvement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
