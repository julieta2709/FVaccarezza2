import React from "react";
import HomeLeft from "../assets/img/BG/HomeLeft.svg";
import RedCircle from "../assets/img/icons/RedCircle.svg";
import "../styles/Home.css";

const Home = () => {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Home-container">
      <img src={HomeLeft} alt="HomeLeftBg" className="HomeBg" />
      <div className="Home-WidthContainer">
          <div className="HomePF-Container" onClick={scrollToAbout}>
            <img src={RedCircle} alt="RedCircle" className="redCircle" />
            <h1 className="portfolio">PORTFOLIO.</h1>
            <h2 className="year">2024</h2>
            <p className="fv">FEDERICO VACCAREZZA</p>
            <img src={RedCircle} alt="RedCircle" className="redCircle" />
          </div>
      </div>
    </div>
  );
};
export default Home;
