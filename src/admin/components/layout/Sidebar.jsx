import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faSignOutAlt,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import "../../style/Sidebar.css";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin", { replace: true });
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

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">ES</div>
          <div className="sidebar-logo-text">
            <h2>Engineering</h2>
            <p>Solutions Admin</p>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => navigate(item.path)}
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
};

export default Sidebar;
