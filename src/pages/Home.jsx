import React from "react";
import RedCircle from "../assets/img/icons/RedCircle";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="HomePF-Container">
        <div className="redCircle">
          <RedCircle />
        </div>
        <h1 className="portfolio">PORTFOLIO.</h1>
        <h2 className="year">2024</h2>
        <p className="fv">FEDERICO VACCAREZZA</p>
        <div className="redCircle">
          <RedCircle />
        </div>
      </div>
    </div>
  );
};
export default Home;
