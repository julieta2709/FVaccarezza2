import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Eclipse from "../../assets/img/BG/Eclipse.svg";
import EstudioBgBottomL from "../../assets/img/BG/EstudioBgBottomL.svg";
import EstudioBgVectorR from "../../assets/img/BG/EstudioBgVectorR.svg";
import Estudio1 from "../../assets/img/Estudio/Estudio1.png";
import Estudio2 from "../../assets/img/Estudio/Estudio2.png";
import Estudio3 from "../../assets/img/Estudio/Estudio3.png";
import Estudio4 from "../../assets/img/Estudio/Estudio4.png";
import carro from "../../assets/img/Estudio/carro.gif";
import "../../styles/Estudio.css";
import "../../styles/Work.css";
import AnimaIpad2 from "../Animations/Estudio/AnimaIpad2";
import BeLink from "../Buttons/BeLink";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import EstudioCelAnimation from "./EstudioCelAnimation";
import { WorkDataContext } from "./WorkContext";

const Estudio = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  const { index, title, description, date, url } = WorkData[1];
  const sentences = description.split("\n");

  function easeInOutExpo(t) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  const handlePrevClick = () => {
    const nextElement = document.getElementById("frog");
    if (nextElement) {
      let offset = 200;
      if (window.innerWidth <= 767) {
        offset = 40;
      }
      const elementPosition =
        nextElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
        easing: easeInOutExpo,
      });
    }
  };
  const handleNextClick = () => {
    const nextElement = document.getElementById("moreno");
    if (nextElement) {
      let offset = 200;
      if (window.innerWidth <= 767) {
        offset = 40;
      }
      const elementPosition =
        nextElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
        easing: easeInOutExpo,
      });
    }
  };
  return (
    <div className="Work-EstudioContainer">
      <img src={Eclipse} alt="eclipse" className="eclipse" />
      <div className="Work-TitleIndivCont">
        <div className="Work-TitleIndividual">
          <div className="Prev" onClick={handlePrevClick}>
            <Prev />
          </div>
          <div className="Work-TitleIndivContainer">
            <span className="Work-NumberIndividual">{index}</span>
            <span className="Work-TextIndividual">{title}</span>
          </div>
          <div className="Next" onClick={handleNextClick}>
            <Next />
          </div>
          <div className="Work-DescriptionContainer">
            {sentences.map((sentence, index) => (
              <p className="WorkTitleDescription" key={index}>
                {sentence}
              </p>
            ))}
          </div>
          <p className="WorkTitleDate">{date}</p>
        </div>
      </div>
      <img src={EstudioBgVectorR} alt="Estudiobg" className="EstudioBgR"></img>
      <div className="WorkIndividualphoto-container">
        <img src={Estudio1} alt="Estudio1" className="Estudio1" />
        <img src={Estudio2} alt="Estudio2" className="Estudio2" />
        <img src={Estudio3} alt="Estudio3" className="Estudio3" />
        <div className="carroContainer">
          <img src={Estudio4} alt="Estudio4" className="Estudio4" />
          <img src={carro} alt="carroGif" className="carroGif" />
          <div className="Belink-container">
            <BeLink link={url} />
          </div>
        </div>
        <div className="EstudioCel-animationContainer">
          <EstudioCelAnimation />
        </div>
        <div className="Ipad-container">
          <AnimaIpad2 />
        </div>
      </div>
      <img
        src={EstudioBgBottomL}
        alt="EstudioBgBottomL"
        className="EstudioBgBottomL"
      ></img>
    </div>
  );
};

export default Estudio;
