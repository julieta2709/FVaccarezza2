import React from "react";
import "../../../styles/NavBar.css";
import TextureNavBarSVG from "../BG/TextureNavBarSVG.svg";

const TextureNavBar = () => {
  return (
    <div className="texture-navbar">
      <img src={TextureNavBarSVG} alt="TexturaNavBar" />
    </div>
  );
};

export default TextureNavBar;
