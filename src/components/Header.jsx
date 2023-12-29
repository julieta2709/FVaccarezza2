import React, { useEffect } from "react";
import "../styles/NavBar.css";
import NavBar from "./NavBar";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".Header-container");
      const scrollPosition = window.scrollY;

      if (scrollPosition > 110) {
        navbar.classList.add("blur");
      } else {
        navbar.classList.remove("blur");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Header-container">
      <NavBar />
    </div>
  );
};
export default Header;
