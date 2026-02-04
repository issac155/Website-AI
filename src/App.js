import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import PartnersPage from "./pages/PartnersPage";
import Contact from "./pages/Contact";
import CompanyOverview from "./pages/CompanyOverview";
import EngineeringApproach from "./pages/EngineeringApproach";
import FacilityManagement from "./pages/FacilityManagement";
import LightingSolarSolutions from "./pages/LightingSolarSolutions";

import LoginPage from "./admin/pages/Login";

import "./styles/App.css";
import WebLayout from "./layouts/WebLayout";
import DashboardHome from "./admin/pages/DashboardHome";
import ContactUs from "./admin/pages/ContactUs";
import ContactView from "./admin/pages/ContactView";
import ChangePassword from "./admin/pages/ChangePassword";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 PUBLIC WEBSITE */}
        <Route
          path="/"
          element={
            <WebLayout>
              <Home />
            </WebLayout>
          }
        />
        <Route
          path="/about"
          element={
            <WebLayout>
              <About />
            </WebLayout>
          }
        />
        <Route
          path="/services"
          element={
            <WebLayout>
              <ServicesPage />
            </WebLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <WebLayout>
              <ProjectsPage />
            </WebLayout>
          }
        />
        <Route
          path="/partners"
          element={
            <WebLayout>
              <PartnersPage />
            </WebLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <WebLayout>
              <Contact />
            </WebLayout>
          }
        />
        <Route
          path="/company-overview"
          element={
            <WebLayout>
              <CompanyOverview />
            </WebLayout>
          }
        />
        <Route
          path="/engineering-approach"
          element={
            <WebLayout>
              <EngineeringApproach />
            </WebLayout>
          }
        />
        <Route
          path="/facility-management"
          element={
            <WebLayout>
              <FacilityManagement />
            </WebLayout>
          }
        />
        <Route
          path="/lighting-solar-solutions"
          element={
            <WebLayout>
              <LightingSolarSolutions />
            </WebLayout>
          }
        />
        {/* 🔐 ADMIN PANEL (NO HEADER / FOOTER) DashboardHome*/}
        <Route path="/admin" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardHome />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
