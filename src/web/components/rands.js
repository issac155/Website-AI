import React from "react";

const Brands = () => {
  const brandCategories = [
    {
      category: "Lighting Solutions",
      description: "Innovative lighting design and control systems",
      brands: [
        { name: "Castaldi", country: "Italy", logo: "C" },
        { name: "Enlight", country: "UK", logo: "E" },
        { name: "Auralis", country: "Italy", logo: "A" },
        { name: "Exor", country: "UK", logo: "X" },
        { name: "Tridonic", country: "Austria", logo: "T" },
      ],
    },
    {
      category: "Solar Solutions",
      description: "Comprehensive solar PV and heating systems",
      brands: [
        { name: "LG Solar", country: "South Korea", logo: "LG" },
        { name: "First Solar", country: "USA", logo: "FS" },
        { name: "Sun Power", country: "USA", logo: "SP" },
        { name: "Fronius", country: "Austria", logo: "F" },
        { name: "ABB", country: "Switzerland", logo: "ABB" },
        { name: "Schneider", country: "France", logo: "S" },
      ],
    },
    {
      category: "ELV Systems",
      description: "Advanced integration and control systems",
      brands: [
        { name: "Honeywell", country: "USA", logo: "H" },
        { name: "Alerton", country: "USA", logo: "A" },
        { name: "PMI Controls", country: "USA", logo: "PMI" },
        { name: "CBRO", country: "India", logo: "C" },
        { name: "HIKVISION", country: "China", logo: "H" },
      ],
    },
    {
      category: "EV Charging",
      description: "Electric vehicle charging infrastructure",
      brands: [
        { name: "Sino", country: "China", logo: "S" },
        { name: "YoCharge", country: "India", logo: "Y" },
      ],
    },
  ];

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">PREMIUM PARTNERSHIPS</div>
          <h2 className="section-title">Brands & Products Portfolio</h2>
          <p className="section-desc">
            We partner with world-leading manufacturers to deliver premium
            solutions across all our service domains.
          </p>
        </div>

        {brandCategories.map((category, catIndex) => (
          <div className="brand-category animate-on-scroll" key={catIndex}>
            <div className="category-header">
              <h3>{category.category}</h3>
              <p>{category.description}</p>
            </div>
            <div className="brands-grid">
              {category.brands.map((brand, brandIndex) => (
                <div className="brand-card" key={brandIndex}>
                  <div className="brand-logo">
                    <div className="brand-logo-circle">{brand.logo}</div>
                  </div>
                  <div className="brand-details">
                    <h4>{brand.name}</h4>
                    <div className="brand-country">
                      <i className="fas fa-globe"></i> {brand.country}
                    </div>
                    <div className="brand-expertise">
                      <i className="fas fa-star"></i> Authorized Partner
                    </div>
                  </div>
                  <div className="brand-products">
                    <span className="product-tag">Original Equipment</span>
                    <span className="product-tag">Technical Support</span>
                    <span className="product-tag">Warranty Coverage</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="brand-benefits animate-on-scroll">
          <h3>Benefits of Our Brand Partnerships</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Genuine Products</h4>
              <p>
                All products are genuine with manufacturer warranties and
                technical support
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h4>Technical Expertise</h4>
              <p>
                Factory-trained technicians for installation, maintenance, and
                troubleshooting
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h4>Regular Updates</h4>
              <p>
                Access to latest product versions, firmware updates, and
                technical bulletins
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h4>Direct Support</h4>
              <p>
                Direct access to manufacturer support teams for complex issues
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
