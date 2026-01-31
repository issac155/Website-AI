// Dashboard.js
import React, { useEffect, useState } from "react";
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

const ShimmerLoader = ({ count = 5 }) => {
  return (
    <div className="contacts-table shimmer-container">
      <div className="shimmer-header">
        <div className="shimmer-line shimmer-line-wide"></div>
        <div className="shimmer-line shimmer-line-narrow"></div>
      </div>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="shimmer-row">
          <div className="shimmer-cell shimmer-cell-name"></div>
          <div className="shimmer-cell shimmer-cell-email"></div>
          <div className="shimmer-cell shimmer-cell-date"></div>
          <div className="shimmer-cell shimmer-cell-status"></div>
          <div className="shimmer-cell shimmer-cell-action"></div>
        </div>
      ))}
    </div>
  );
};
// Dashboard Home Component
const DashboardHome = () => {
  const navigate = useNavigate(); // Fixed: useNavigate hook
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalContacts: 0,
    newToday: 0,
    responseRate: 0,
    pending: 0,
  });
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Replace with your actual credentials
      const credentials = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const data = "";
      setDashboardData(data);

      // Extract and format stats from the data await getDashboard(credentials)
      if (data) {
        // Assuming the API returns data in a format we can use
        // Adjust these based on your actual API response structure
        setStats({
          totalContacts: data.totalContacts || 0,
          newToday: data.newToday || 0,
          responseRate: data.responseRate || 0,
          pending: data.pending || 0,
        });
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
      setError(err.message || "Failed to fetch dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
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
            <h3>{loading ? "..." : stats.totalContacts}</h3>
            <p>Total Contacts</p>
          </div>
          <FontAwesomeIcon icon={faEnvelope} className="dashboard-stat-icon" />
        </div>

        <div className="dashboard-stat-card blue">
          <div className="dashboard-stat-content">
            <h3>{loading ? "..." : stats.newToday}</h3>
            <p>New Today</p>
          </div>
          <FontAwesomeIcon icon={faBell} className="dashboard-stat-icon" />
        </div>

        <div className="dashboard-stat-card green">
          <div className="dashboard-stat-content">
            <h3>{loading ? "..." : `${stats.responseRate}%`}</h3>
            <p>Response Rate</p>
          </div>
          <FontAwesomeIcon icon={faChartBar} className="dashboard-stat-icon" />
        </div>

        <div className="dashboard-stat-card purple">
          <div className="dashboard-stat-content">
            <h3>{loading ? "..." : stats.pending}</h3>
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
        {loading ? (
          <ShimmerLoader count={5} />
        ) : error ? (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={fetchDashboardData} className="retry-button">
              Retry
            </button>
          </div>
        ) : dashboardData &&
          dashboardData.recentContacts &&
          dashboardData.recentContacts.length > 0 ? (
          <div className="contacts-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.recentContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name || "N/A"}</td>
                    <td>{contact.email || "N/A"}</td>
                    <td>{formatDate(contact.createdAt)}</td>
                    <td>
                      <span
                        className={`status-badge status-${contact.status || "pending"}`}
                      >
                        {contact.status || "Pending"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="view-details-btn"
                        onClick={() =>
                          navigate(`/dashboard/contacts/${contact.id}`)
                        }
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-contacts">
            <p>No recent contacts found.</p>
          </div>
        )}
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
