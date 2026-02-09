import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import "./style/DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
