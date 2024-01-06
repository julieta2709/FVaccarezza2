import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import NavBar from "./NavBar";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".Header-container");
      const scrollPosition = window.scrollY;

      if (navbar) {
        if (scrollPosition > 110) {
          navbar.classList.add("blur");
        } else {
          navbar.classList.remove("blur");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();
  const shouldHideHeader = location.pathname === "/photography";
  if (shouldHideHeader) {
    return null;
  }
  return (
    <div className="Header-container">
      <NavBar />
    </div>
  );
};
export default Header;
