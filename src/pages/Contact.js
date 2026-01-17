import React, { useState } from "react";
import "../styles/PageStyles.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We will contact you soon!");
  };

  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for engineering solutions tailored to your needs</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <FaMapMarkerAlt />{" "}
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Building No - 1354, PO Box- 134</p>
                  <p>Way/Street no- 2818, Near to Opera House</p>
                  <p>Al Qurum, Muscat, Sultanate of Oman</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div className="contact-details">
                  <h4>Phone Numbers</h4>
                  <p>+968 99022277</p>
                  <p>+968 9809 2795</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h4>Email Addresses</h4>
                  <p>alyaqdhan@almawaridoman.com</p>
                  <p>vignesh.potti@almawaridoman.com</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                  <p>Friday: Closed</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>
                  Fill out the form below and our team will contact you within
                  24 hours
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="mep">MEP Engineering</option>
                    <option value="facility">Facility Management</option>
                    <option value="elv">ELV System Integration</option>
                    <option value="lighting">Lighting Solutions</option>
                    <option value="solar">Solar Solutions</option>
                    <option value="project">Project Management</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="cta-button cta-primary full-width"
                >
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="page-section light-bg">
        <div className="container">
          <div className="page-content">
            <div className="page-header">
              <div className="section-subtitle">GET IN TOUCH</div>
              <h2 className="section-title">Other Ways to Connect</h2>
            </div>

            <div className="contact-options">
              <div className="contact-option">
                <div className="option-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h4>Live Chat</h4>
                <p>Chat with our support team during business hours</p>
                <a href="#" className="option-link">
                  Start Chat
                </a>
              </div>

              <div className="contact-option">
                <div className="option-icon">
                  <i className="fas fa-video"></i>
                </div>
                <h4>Video Consultation</h4>
                <p>Schedule a virtual meeting with our experts</p>
                <a href="#" className="option-link">
                  Schedule Now
                </a>
              </div>

              <div className="contact-option">
                <div className="option-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h4>Request Quote</h4>
                <p>Get a detailed quote for your project</p>
                <a href="#" className="option-link">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
