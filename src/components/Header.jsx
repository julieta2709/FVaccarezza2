import React from "react";
import TextureNavBar from "../assets/img/BG/TextureNavBar";
import "../styles/NavBar.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="Header-container">
      <TextureNavBar />
      <NavBar />
    </div>
  );
};
export default Header;
