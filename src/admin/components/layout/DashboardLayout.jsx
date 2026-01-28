import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./style/DashboardLayout.css";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState([]);

  const toggleMenu = (label) => {
    if (label === "close-mobile") {
      setMobileSidebarOpen(false);
      return;
    }

    if (expandedMenus.includes(label)) {
      setExpandedMenus(expandedMenus.filter((item) => item !== label));
    } else {
      setExpandedMenus([...expandedMenus, label]);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Header
      // onToggleSidebar={toggleSidebar}
      // onToggleMobileSidebar={toggleMobileSidebar}
      // mobileSidebarOpen={mobileSidebarOpen}
      />
      {/* 
      <Sidebar
      // sidebarOpen={sidebarOpen}
      // mobileSidebarOpen={mobileSidebarOpen}
      // expandedMenus={expandedMenus}
      // onToggleMenu={toggleMenu}
      /> */}

      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
