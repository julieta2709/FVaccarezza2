import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
         <span className="logo">PF 2024 FV</span>
        </Link>
      </div>
      <div className="navbar-menu" onClick={handleToggleMenu}>
        {showMenu ? (
          <FaTimes className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
      <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
      <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleToggleMenu}>
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/AboutMe" className="nav-link" onClick={handleToggleMenu}>
            ABOUT ME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Work" className="nav-link" onClick={handleToggleMenu}>
            WORK
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link" onClick={handleToggleMenu}>
            CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Photography"
            className="nav-link"
            onClick={handleToggleMenu}
          >
            PHOTOGRAPHY
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
