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
import "../style/DashboardHome.css";

// Components
import ContactUs from "./ContactUs";
import ContactView from "./ContactView";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

// Dashboard Home Component
const DashboardHome = () => {
  const navigate = useNavigate(); // Fixed: useNavigate hook

  return (
    <div className="dashboard-home">
      <div className="dashboard-welcome-section">
        <h2>Welcome back, Admin</h2>
        <p>
          Manage your engineering projects and user contacts from this
          dashboard.
        </p>
      </div>

      <div className="dashboard-stats-grid">
        <div className="dashboard-stat-card gold">
          <div className="dashboard-stat-content">
            <h3>124</h3>
            <p>Total Contacts</p>
          </div>
          <FontAwesomeIcon icon={faEnvelope} className="dashboard-stat-icon" />
        </div>

        <div className="dashboard-stat-card blue">
          <div className="dashboard-stat-content">
            <h3>24</h3>
            <p>New Today</p>
          </div>
          <FontAwesomeIcon icon={faBell} className="dashboard-stat-icon" />
        </div>

        <div className="dashboard-stat-card green">
          <div className="dashboard-stat-content">
            <h3>89%</h3>
            <p>Response Rate</p>
          </div>
          <FontAwesomeIcon icon={faChartBar} className="dashboard-stat-icon" />
        </div>

        <div className="dashboard-stat-card purple">
          <div className="dashboard-stat-content">
            <h3>15</h3>
            <p>Pending</p>
          </div>
          <FontAwesomeIcon icon={faUsers} className="dashboard-stat-icon" />
        </div>
      </div>

      <div className="dashboard-recent-contacts">
        <div className="dashboard-section-header">
          <h3>Recent Contact Requests</h3>
          <button
            className="dashboard-view-all"
            onClick={() => navigate("/dashboard/contacts")} // Fixed: use navigate function
          >
            View All
          </button>
        </div>
        <div className="contacts-table">
          <p>Loading recent contacts...</p>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="dashboard-layout">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="dashboard-main-content">
        <Header activeTab={activeTab} />

        <div className="dashboard-content-area">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/contacts" element={<ContactUs />} />
            <Route path="/contacts/:id" element={<ContactView />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
