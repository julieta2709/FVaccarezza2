import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

function Links({ section, scrollToSection, children }) {
  const handleClick = () => {
    scrollToSection(section);
  };

  const displayText = section === "about" ? "ABOUT ME" : children.toUpperCase();

  return (
    <Link to={`/#${section}`} className="nav-link" onClick={handleClick}>
      {displayText}
    </Link>
  );
}

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const location = useLocation();

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

  const shouldHideNavBar = location.pathname === "/photography";

  if (shouldHideNavBar) {
    return null;
  }

  const handleScroll = () => {
    const offset = window.scrollY;
    // Cambiar la clase o el estado de isNavSticky cuando el scroll sea superior a cierto punto
    if (offset > 200) {
      setIsNavSticky(true);
    } else {
      setIsNavSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClassName = isNavSticky ? 'navbar navbar-fixed' : 'navbar';

  return (
    <nav className={navClassName}>
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
          <Link to="/" className="nav-link">
            HOME
          </Link>
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
