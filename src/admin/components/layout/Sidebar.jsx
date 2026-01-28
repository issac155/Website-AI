import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEnvelope,
  faUsers,
  faChartLine,
  faCogs,
  faUserShield,
  faProjectDiagram,
  faFileAlt,
  faCog,
  faTachometerAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "../../style/DashboardLayout.css";

const Sidebar = () => {
  const location = useLocation();

  const navigationItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: faTachometerAlt,
    },
    {
      path: "/dashboard/contacts",
      label: "Contact Management",
      icon: faEnvelope,
    },
    {
      path: "/dashboard/projects",
      label: "Projects",
      icon: faProjectDiagram,
    },
    {
      label: "Team",
      icon: faUsers,
      submenu: [
        {
          path: "/dashboard/team/engineers",
          label: "Engineers",
          icon: faUserShield,
        },
        { path: "/dashboard/team/managers", label: "Managers", icon: faUsers },
        {
          path: "/dashboard/team/contractors",
          label: "Contractors",
          icon: faUsers,
        },
      ],
    },
    {
      label: "Reports",
      icon: faChartLine,
      submenu: [
        {
          path: "/dashboard/reports/analytics",
          label: "Analytics",
          icon: faChartLine,
        },
        {
          path: "/dashboard/reports/financial",
          label: "Financial",
          icon: faFileAlt,
        },
        {
          path: "/dashboard/reports/projects",
          label: "Project Reports",
          icon: faProjectDiagram,
        },
      ],
    },
    {
      label: "Engineering",
      icon: faCogs,
      submenu: [
        {
          path: "/dashboard/engineering/mep",
          label: "MEP Systems",
          icon: faCog,
        },
        {
          path: "/dashboard/engineering/elv",
          label: "ELV Systems",
          icon: faCog,
        },
        {
          path: "/dashboard/engineering/lighting",
          label: "Lighting Design",
          icon: faCog,
        },
      ],
    },
    {
      label: "Settings",
      icon: faCogs,
      submenu: [
        { path: "/dashboard/settings/general", label: "General", icon: faCog },
        {
          path: "/dashboard/settings/notifications",
          label: "Notifications",
          icon: faBell,
        },
        {
          path: "/dashboard/settings/security",
          label: "Security",
          icon: faUserShield,
        },
      ],
    },
  ];

  return (
    <aside className="dashboard-sidebar open">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <div className="logo-text">
            <span className="logo-main">ENG</span>
            <span className="logo-sub">Admin</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-menu">
          {navigationItems.map((item, index) => (
            <li key={index} className="nav-item">
              {item.path && (
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </Link>
              )}

              {item.submenu && (
                <ul className="submenu expanded">
                  <li className="submenu-title">
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.label}</span>
                  </li>
                  {item.submenu.map((subItem) => (
                    <li key={subItem.path}>
                      <Link
                        to={subItem.path}
                        className={`subnav-link ${location.pathname === subItem.path ? "active" : ""}`}
                      >
                        <FontAwesomeIcon
                          icon={subItem.icon}
                          className="subnav-icon"
                        />
                        <span>{subItem.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
