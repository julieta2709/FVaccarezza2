import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

function Links({ section, scrollToSection, children, className }) {
  const handleClick = () => {
    scrollToSection(section);
  };

  const displayText = section === "about" ? "ABOUT ME" : children.toUpperCase();

  return (
    <Link
      to={`/#${section}`}
      className={`nav-link ${className}`}
      onClick={handleClick}
    >
      {displayText}
    </Link>
  );
}

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  function easeInOutExpo(t) {
    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 200;
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
        easing: easeInOutExpo,
      });
      setShowMenu(false);
    }
  };

  //para que no se vea la NavBar cuando está en photography
  const location = useLocation();
  const shouldHideNavBar = location.pathname === "/photography";
  if (shouldHideNavBar) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Links
          section="home"
          className="logo"
          scrollToSection={scrollToSection}
        >
          PF 2024 FV
        </Links>
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
          <Links
            section="home"
            className="nav-link"
            scrollToSection={scrollToSection}
          >
            HOME
          </Links>
        </li>
        <li className="nav-item">
          <Links
            section="about"
            className="nav-link"
            scrollToSection={scrollToSection}
          >
            ABOUT ME
          </Links>
        </li>
        <li className="nav-item">
          <Links
            section="work"
            className="nav-link"
            scrollToSection={scrollToSection}
          >
            WORK
          </Links>
        </li>
        <li className="nav-item">
          <Links
            section="contact"
            className="nav-link"
            scrollToSection={scrollToSection}
          >
            CONTACT
          </Links>
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
