import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faKey,
  faSignOutAlt,
  faTimes,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import "../../style/Sidebar.css";
import Companylogo from "../../../Images/LOGO.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Update active tab based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/contacts")) {
      setActiveTab("contacts");
    } else if (path.includes("/change-password")) {
      setActiveTab("change-password");
    } else if (path.includes("/dashboard")) {
      setActiveTab("dashboard");
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/admin");
    if (isMobile) {
      setMobileSidebarOpen(false);
    }
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: faHome, path: "/dashboard" },
    {
      id: "contacts",
      label: "Contact Us",
      icon: faEnvelope,
      path: "/contacts",
    },
    {
      id: "change-password",
      label: "Change Password",
      icon: faKey,
      path: "/change-password",
    },
  ];

  const handleNavigation = (item) => {
    setActiveTab(item.id);
    navigate(item.path);

    // Close sidebar on mobile after click
    if (isMobile) {
      setMobileSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  };

  // Mobile Sidebar Component
  const MobileSidebar = () => (
    <div
      className={`mobile-sidebar ${mobileSidebarOpen ? "mobile-open" : "mobile-closed"}`}
    >
      <div
        className="mobile-sidebar-overlay"
        onClick={() => setMobileSidebarOpen(false)}
      />
      <div className="mobile-sidebar-content">
        <div className="mobile-sidebar-header">
          <div className="mobile-user-info">
            <div className="mobile-user-avatar">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="mobile-user-details">
              <h3>Admin</h3>
              <p>Engineering Solutions</p>
            </div>
          </div>
          <button
            className="mobile-sidebar-close"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <nav className="mobile-sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-sidebar-item ${activeTab === item.id ? "mobile-active" : ""}`}
              onClick={() => handleNavigation(item)}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="mobile-sidebar-icon"
              />
              <span className="mobile-sidebar-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mobile-sidebar-footer">
          <button className="mobile-logout-btn" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Desktop Sidebar Component
  const DesktopSidebar = () => (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={Companylogo} />
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => handleNavigation(item)}
          >
            <FontAwesomeIcon icon={item.icon} className="sidebar-nav-icon" />
            <span className="sidebar-nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-logout-btn" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );

  // Mobile Header with Hamburger Menu
  const MobileHeader = () => (
    <div className="mobile-header">
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileSidebarOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="mobile-header-title">
        <img src={Companylogo} alt="img" />
      </div>
      <div className="mobile-header-user">
        <div className="mobile-header-avatar">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <>
          <MobileHeader />
          <MobileSidebar />
        </>
      ) : (
        <DesktopSidebar />
      )}
    </>
  );
};

export default Sidebar;
