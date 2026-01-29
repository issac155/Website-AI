import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import "../../style/Header.css";
const Header = ({ activeTab }) => {
  return (
    <header className="header-dashboard-header">
      <div className="header-left"></div>

      <div className="header-right">
        <div className="header-user-profile">
          <div className="header-user-avatar">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="header-user-info">
            <span className="header-user-name">Admin User</span>
            <span className="header-user-role">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
