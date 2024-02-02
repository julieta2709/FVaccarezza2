import React from "react";
import RedCircle from "../assets/img/icons/RedCircle.svg";
import "../styles/Home.css";

const Home = () => {
  
  return (
      <div className="Home-container">
        <div className="HomePF-Container">
        <img src={RedCircle} alt="RedCircle" className="redCircle" />
          <h1 className="portfolio">PORTFOLIO.</h1>
          <h2 className="year">2024</h2>
          <p className="fv">FEDERICO VACCAREZZA</p>
      <img src={RedCircle} alt="RedCircle" className="redCircle" />
        </div>
      </div>
  );
};
export default Home;