import React, { useEffect } from "react";
import RedCircle from "../assets/img/icons/RedCircle";
import "../styles/Home.css";

const Home = React.memo(() => {
  useEffect(() => {
    const handleScroll = () => {
      const portfolioElement = document.querySelector(".portfolio");
      const scrollPosition = window.scrollY;
      const triggerOffset = portfolioElement.offsetTop - window.innerHeight / 2;

      if (
        scrollPosition > triggerOffset &&
        !portfolioElement.classList.contains("animate-portfolio")
      ) {
        portfolioElement.classList.add("animate-portfolio");
        // Escuchar el final de la animación y eliminar la clase
        portfolioElement.addEventListener(
          "animationend",
          () => {
            portfolioElement.classList.remove("animate-portfolio");
          },
          { once: true }
        ); // Escuchar el evento solo una vez
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
});
export default Home;
