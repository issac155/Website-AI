import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/LOGO.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/partners", label: "Partners" },
  ];

  return (
    <header id="header" className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="header-content">
          {/* <Link to="/" className="logo">
            <div className="logo-icon">AM</div>
            <div className="logo-text">
              <span className="logo-main">AI Mavarid</span>
              <span className="logo-tagline">Engineering Excellence</span>
            </div>
          </Link> */}
          <Link to="/" className="logo">
            <img src={logo} alt="AL Mawarid Logo" className="logo-image" />
            {/* <div className="logo-text">
              <span className="logo-main">AL Mawarid</span>
              <span className="logo-tagline">Engineering Excellence</span>
            </div> */}
          </Link>

          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <Link to="/contact" className="nav-cta" onClick={closeMenu}>
              Get Quote
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
