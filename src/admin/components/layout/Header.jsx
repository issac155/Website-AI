import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBuilding,
  faBell,
  faQuestionCircle,
  faChevronDown,
  faUserShield,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
// import "./style/DashboardLayout.css";

const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/dashboard") return "Dashboard";
    if (path.includes("/dashboard/contacts")) return "Contact Management";
    if (path.includes("/dashboard/projects")) return "Projects";
    if (path.includes("/dashboard/team")) return "Team Management";
    if (path.includes("/dashboard/reports")) return "Reports";
    if (path.includes("/dashboard/engineering")) return "Engineering Tools";
    if (path.includes("/dashboard/settings")) return "Settings";
    return "Dashboard";
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header className="dashboard-header">
      <div className="header-left">
        {/* <button
          className="sidebar-toggle mobile-toggle"
          onClick={onToggleMobileSidebar}
        >
          <FontAwesomeIcon icon={mobileSidebarOpen ? faTimes : faBars} />
        </button> */}

        {/* <button
          className="sidebar-toggle desktop-toggle"
          onClick={onToggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </button> */}

        <div className="company-brand">
          <div className="brand-icon">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <div className="brand-text">
            <h1>
              Engineering<span>Solutions</span>
            </h1>
            <p className="brand-subtitle">Admin Panel</p>
          </div>
        </div>
      </div>

      <div className="header-center">
        <div className="page-title">
          <h2>{getPageTitle()}</h2>
          <div className="breadcrumb">
            <span>Home</span>
            <span className="separator">/</span>
            <span className="current">{getPageTitle()}</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="header-actions">
          <button className="action-btn notification-btn">
            <FontAwesomeIcon icon={faBell} />
            <span className="notification-badge">3</span>
          </button>

          <button className="action-btn help-btn">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </button>

          <div className="user-profile">
            <button
              className="user-toggle"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <div className="user-avatar">
                <FontAwesomeIcon icon={faUserShield} />
              </div>
              <div className="user-info">
                <span className="user-name">System Admin</span>
                <span className="user-role">Administrator</span>
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`dropdown-arrow ${userMenuOpen ? "open" : ""}`}
              />
            </button>

            {userMenuOpen && (
              <div className="user-dropdown">
                <div className="dropdown-header">
                  <div className="dropdown-avatar">
                    <FontAwesomeIcon icon={faUserShield} />
                  </div>
                  <div className="dropdown-user-info">
                    <div className="dropdown-name">System Administrator</div>
                    <div className="dropdown-email">admin@engineering.com</div>
                  </div>
                </div>

                <div className="dropdown-divider"></div>

                <Link to="/dashboard/profile" className="dropdown-item">
                  <FontAwesomeIcon icon={faUserShield} />
                  <span>My Profile</span>
                </Link>

                <Link to="/dashboard/settings" className="dropdown-item">
                  <FontAwesomeIcon icon={faCog} />
                  <span>Account Settings</span>
                </Link>

                <div className="dropdown-divider"></div>

                <button
                  className="dropdown-item logout-btn"
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
