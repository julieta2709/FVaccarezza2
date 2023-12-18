import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    }
  };
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" >
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
          <Link
            to="/"
            className="nav-link"
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#about"
            className="nav-link"
            onClick={() => scrollToSection("about")}
          >
            ABOUT ME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#work"
            className="nav-link"
            onClick={() => scrollToSection("work")}
          >
            WORK
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#contact"
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/photography" className="nav-link">
            PHOTOGRAPHY
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
