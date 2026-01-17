import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <a href="#home" className="footer-logo">
              <div className="footer-logo-icon">AM</div>
              <div className="footer-logo-text">AI Mavarid</div>
            </a>
            <p>
              Providing reliable and quality-driven MEP and ELV solutions in
              Oman since 2018. We combine technical expertise with innovative
              solutions to deliver exceptional value.
            </p>

            <div className="social-links">
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li>
                <a href="#home">
                  <i className="fas fa-chevron-right"></i> Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fas fa-chevron-right"></i> About Us
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fas fa-chevron-right"></i> Services
                </a>
              </li>
              <li>
                <a href="#projects">
                  <i className="fas fa-chevron-right"></i> Projects
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fas fa-chevron-right"></i> Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Information</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <strong>Location</strong>
                  <p>
                    Building 1354, PO Box 134
                    <br />
                    Al Qurum, Muscat, Oman
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <strong>Phone Numbers</strong>
                  <p>
                    +968 99022277
                    <br />
                    +968 9809 2795
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <strong>Email Addresses</strong>
                  <p>
                    alyaqdhan@almawaridoman.com
                    <br />
                    vignesh.potti@almawaridoman.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; 2024 AI Mavarid Services & Maintenance SPC. All rights
            reserved. | Build By Brilliance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
