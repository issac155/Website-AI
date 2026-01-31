import React, { useEffect, useState } from "react";
import "../styles/PageStyles.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { saveContact } from "../services/contactservice";

const Contact = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear any previous errors when user starts typing
    if (error) setError("");
  };
  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 5000); // Hide success message after 5 seconds
    }

    // Cleanup function
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [success]); // Re-run when success state changes

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError("Please fill in all required fields (*)");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Phone validation (basic - adjust as needed)
    const phoneRegex = /^[+]?[\d\s\-()]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid phone number");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Call the API function
      const response = await saveContact(formData);

      // Handle successful submission
      setSuccess(true);
      console.log("Contact saved successfully:", response);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Show success message
    } catch (err) {
      // Handle API errors
      console.error("Error saving contact:", err);

      // Use error message from API or default message
      if (err.message) {
        setError(err.message);
      } else if (typeof err === "string") {
        setError(err);
      } else if (err.error) {
        setError(err.error);
      } else {
        setError("Failed to submit form. Please try again.");
      }
    } finally {
      setLoading(false);
    }
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
              {error && (
                <div
                  className="error-message"
                  style={{
                    backgroundColor: "#f8d7da",
                    color: "#721c24",
                    padding: "10px",
                    borderRadius: "4px",
                    marginBottom: "20px",
                    border: "1px solid #f5c6cb",
                  }}
                >
                  {error}
                </div>
              )}

              {/* Display success message */}
              {success && (
                <div
                  className="success-message"
                  style={{
                    backgroundColor: "#d4edda",
                    color: "#155724",
                    padding: "10px",
                    borderRadius: "4px",
                    marginBottom: "20px",
                    border: "1px solid #c3e6cb",
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </div>
              )}
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
                      disabled={loading}
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
                      disabled={loading}
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
                      disabled={loading}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={loading}
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
                    disabled={loading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="cta-button cta-primary full-width"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane style={{ marginRight: "8px" }} /> Send
                      Message
                    </>
                  )}{" "}
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
