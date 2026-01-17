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
            <a href="tel:+96899022277" className="cta-button cta-primary">
              <i className="fas fa-phone-alt"></i> Call +968 99022277
            </a>
            <a
              href="mailto:alyaqdhan@almawaridoman.com"
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
