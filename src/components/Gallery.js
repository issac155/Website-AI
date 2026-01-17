import React, { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      category: "government",
      title: "Ministry of Defense Projects",
      description: "MEP installations at defense facilities",
      tags: ["Security", "MEP", "Government"],
    },
    {
      id: 2,
      category: "healthcare",
      title: "Sultan Qaboos Cancer Center",
      description: "Medical facility engineering",
      tags: ["Healthcare", "Medical Gas", "Critical Systems"],
    },
    {
      id: 3,
      category: "commercial",
      title: "The Ship Mall Installation",
      description: "Commercial MEP systems",
      tags: ["Commercial", "HVAC", "Lighting"],
    },
    {
      id: 4,
      category: "hospitality",
      title: "Beach Hotel Projects",
      description: "Hospitality engineering solutions",
      tags: ["Hotel", "Hospitality", "Entertainment"],
    },
    {
      id: 5,
      category: "industrial",
      title: "Industrial Facility Setup",
      description: "Industrial MEP installations",
      tags: ["Industrial", "Process Control", "Safety"],
    },
    {
      id: 6,
      category: "lighting",
      title: "Architectural Lighting",
      description: "Innovative lighting designs",
      tags: ["Lighting", "Design", "Architectural"],
    },
    {
      id: 7,
      category: "solar",
      title: "Solar PV Installations",
      description: "Renewable energy solutions",
      tags: ["Solar", "Renewable", "Energy"],
    },
    {
      id: 8,
      category: "elv",
      title: "ELV System Integration",
      description: "Advanced control systems",
      tags: ["ELV", "Automation", "Security"],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: galleryItems.length },
    {
      id: "government",
      name: "Government",
      count: galleryItems.filter((item) => item.category === "government")
        .length,
    },
    {
      id: "healthcare",
      name: "Healthcare",
      count: galleryItems.filter((item) => item.category === "healthcare")
        .length,
    },
    {
      id: "commercial",
      name: "Commercial",
      count: galleryItems.filter((item) => item.category === "commercial")
        .length,
    },
    {
      id: "hospitality",
      name: "Hospitality",
      count: galleryItems.filter((item) => item.category === "hospitality")
        .length,
    },
    {
      id: "lighting",
      name: "Lighting",
      count: galleryItems.filter((item) => item.category === "lighting").length,
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">PROJECT SHOWCASE</div>
          <h2 className="section-title">Project Gallery</h2>
          <p className="section-desc">
            Explore our portfolio of completed projects across various sectors
            and services.
          </p>
        </div>

        <div className="gallery-controls">
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}{" "}
                <span className="category-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div className="gallery-item animate-on-scroll" key={item.id}>
              <div className="gallery-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <i className="fas fa-image"></i>
                    <span>Project Image</span>
                  </div>
                </div>
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="gallery-tags">
                      {item.tags.map((tag, idx) => (
                        <span className="gallery-tag" key={idx}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="view-details">
                      <i className="fas fa-eye"></i> View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <div className="gallery-category">
                  <i className="fas fa-folder"></i>{" "}
                  {categories.find((c) => c.id === item.category)?.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="case-studies animate-on-scroll">
          <h3>Featured Case Studies</h3>
          <div className="case-studies-grid">
            <div className="case-study">
              <div className="case-study-icon">
                <i className="fas fa-hospital"></i>
              </div>
              <h4>Healthcare Excellence</h4>
              <p>
                Complete MEP solution for Sultan Qaboos Cancer Center with
                medical gas and critical power systems
              </p>
              <a href="#" className="case-study-link">
                Read Case Study <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="case-study">
              <div className="case-study-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Government Security</h4>
              <p>
                Integrated ELV and security systems for Ministry of Defense
                facilities with redundant systems
              </p>
              <a href="#" className="case-study-link">
                Read Case Study <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="case-study">
              <div className="case-study-icon">
                <i className="fas fa-sun"></i>
              </div>
              <h4>Sustainable Solutions</h4>
              <p>
                Solar PV installation and energy management system reducing
                operational costs by 40%
              </p>
              <a href="#" className="case-study-link">
                Read Case Study <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
