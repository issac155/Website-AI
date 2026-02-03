import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faEnvelope,
  faUsers,
  faChartBar,
  faCog,
  faSignOutAlt,
  faKey, // Add this icon
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../../style/Sidebar.css";

const Sidebar = ({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: faHome },
    { id: "contacts", label: "Contact Us", icon: faEnvelope },
    { id: "change-password", label: "Change Password", icon: faKey }, // New item
  ];

  return (
    <aside className={`sidebar "open"`}>
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
            className={`sidebar-nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => {
              setActiveTab(item.id);
              if (item.id === "contacts") {
                navigate("/contacts");
              } else if (item.id === "change-password") {
                navigate("/change-password"); // New navigation
              } else {
                navigate("/dashboard");
              }
            }}
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
