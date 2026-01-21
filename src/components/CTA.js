import React from "react";

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2>Transform Your Vision into Reality</h2>
          <p>
            Partner with us for intelligent, sustainable, and value-driven
            engineering solutions tailored to your unique requirements.
          </p>

          <div className="cta-buttons">
            <a href="tel:+96898092795" className="cta-button cta-primary">
              <i className="fas fa-phone-alt"></i> Call +96898092795
            </a>
            <a
              href="mailto:Vignesh.potti@almawaridoman.com"
              className="cta-button cta-secondary"
            >
              <i className="fas fa-envelope"></i> Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
