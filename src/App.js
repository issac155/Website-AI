import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
import "./styles/App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company-overview" element={<CompanyOverview />} />
            <Route
              path="/engineering-approach"
              element={<EngineeringApproach />}
            />
            <Route
              path="/facility-management"
              element={<FacilityManagement />}
            />
            <Route
              path="/lighting-solar-solutions"
              element={<LightingSolarSolutions />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
