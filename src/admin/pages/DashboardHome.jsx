// Dashboard.js
import React, { useState } from "react";
import {
  faBars,
  faTimes,
  faHome,
  faEnvelope,
  faUsers,
  faChartBar,
  faCog,
  faSignOutAlt,
  faBell,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "../style//DashboardHome.css";
import ContactUs from "./ContactUs";

// Components
// import ContactUs from "./ContactUs";
import ContactView from "./ContactView";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: faHome },
    { id: "contacts", label: "Contact Us", icon: faEnvelope },
    { id: "users", label: "Users", icon: faUsers },
    { id: "analytics", label: "Analytics", icon: faChartBar },
    { id: "settings", label: "Settings", icon: faCog },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">ES</div>
            <div className="logo-text">
              <h2>Engineering</h2>
              <p>Solutions Admin</p>
            </div>
          </div>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(item.id);
                if (item.id === "contacts") {
                  navigate("/dashboard/contacts");
                } else {
                  navigate("/dashboard");
                }
              }}
            >
              <FontAwesomeIcon icon={item.icon} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1 className="page-title">
              {activeTab === "dashboard"
                ? "Dashboard"
                : activeTab === "contacts"
                  ? "Contact Management"
                  : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>

          <div className="header-right">
            <div className="search-bar">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" placeholder="Search..." />
            </div>

            <button className="notification-btn">
              <FontAwesomeIcon icon={faBell} />
              <span className="notification-badge">3</span>
            </button>

            <div className="user-profile">
              <div className="user-avatar">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="user-info">
                <span className="user-name">Admin User</span>
                <span className="user-role">Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="content-area">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            {/* <Route path="/contacts" element={<ContactUs />} />
            <Route path="/contacts/:id" element={<ContactView />} /> */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

const DashboardHome = () => (
  <div className="dashboard-home">
    <div className="welcome-section">
      <h2>Welcome back, Admin</h2>
      <p>
        Manage your engineering projects and user contacts from this dashboard.
      </p>
    </div>

    <div className="stats-grid">
      <div className="stat-card gold">
        <div className="stat-content">
          <h3>124</h3>
          <p>Total Contacts</p>
        </div>
        <FontAwesomeIcon icon={faEnvelope} className="stat-icon" />
      </div>

      <div className="stat-card blue">
        <div className="stat-content">
          <h3>24</h3>
          <p>New Today</p>
        </div>
        <FontAwesomeIcon icon={faBell} className="stat-icon" />
      </div>

      <div className="stat-card green">
        <div className="stat-content">
          <h3>89%</h3>
          <p>Response Rate</p>
        </div>
        <FontAwesomeIcon icon={faChartBar} className="stat-icon" />
      </div>

      <div className="stat-card purple">
        <div className="stat-content">
          <h3>15</h3>
          <p>Pending</p>
        </div>
        <FontAwesomeIcon icon={faUsers} className="stat-icon" />
      </div>
    </div>

    <div className="recent-contacts">
      <div className="section-header">
        <h3>Recent Contact Requests</h3>
        <button
          className="view-all"
          onClick={() => (window.location.href = "/dashboard/contacts")}
        >
          View All
        </button>
      </div>
      <div className="contacts-table">
        {/* Table will be populated by ContactUs component */}
        <p>Loading recent contacts...</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
