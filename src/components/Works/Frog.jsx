import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FrogBgVectorL from "../../assets/img/BG/FrogBgVectorL.svg";
import FrogBgVectorR from "../../assets/img/BG/FrogBgVectorR.svg";
import Frog1 from "../../assets/img/Frog/Frog1.png";
import Frog2 from "../../assets/img/Frog/Frog2.png";
import Frog3 from "../../assets/img/Frog/Frog3.png";
import Frog4 from "../../assets/img/Frog/Frog4.png";
import Frog5 from "../../assets/img/Frog/Frog5.png";
import Frog6 from "../../assets/img/Frog/Frog6.png";
import Frogcel1 from "../../assets/img/Frog/Frogcel1.png";
import Frogcel2 from "../../assets/img/Frog/Frogcel2.png";
import Frogcel4 from "../../assets/img/Frog/Frogcel4.png";
import "../../styles/Frog.css";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import Next from "../Buttons/Next";
import ImageSequence from "./FrogCelanimation";
import { WorkDataContext } from "./WorkContext";

const Frog = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  /*uso de la informacion del contexto*/
  const { index, title, description, date, url } = WorkData[0];
  const sentences = description.split("\n");

  /*Navegación en la página a través de los botones*/
  function easeInOutExpo(t) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }
  const handleNextClick = () => {
    const nextElement = document.getElementById("estudio");
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
    <div className="Work-FrogContainer">
      <div className="Work-TitleIndivCont">
        <div className="Work-TitleIndividual">
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
      <img src={FrogBgVectorL} alt="FrogBgL" className="FrogBgL" />
      <img src={FrogBgVectorR} alt="FrogBgR" className="FrogBgR" />
      <div className="WorkIndividualphoto-container">
        <img src={Frog1} alt="FrogBazar1" className="Frog1" />
        <img src={Frog2} alt="FrogBazar2" className="Frog2" />
        <img src={Frog3} alt="FrogBazar3" className="Frog3" />
        <img src={Frog4} alt="FrogBazar4" className="Frog4" />
        <img src={Frog5} alt="FrogBazar5" className="Frog5" />
        <img src={Frog6} alt="FrogBazar6" className="Frog6" />
        <div className="FrogCel-container1">
          <img src={Frogcel1} alt="FrogBazarcel1" className="Frogcel1" />
        </div>
        <div className="FrogCel-container2">
          <img src={Frogcel2} alt="FrogBazarcel2" className="Frogcel2" />
        </div>
        <div className="FrogCel-container4">
          <img src={Frogcel4} alt="FrogBazarcel4" className="Frogcel4" />
        </div>
        {/*imagenes de la animación*/}
        <div className="FrogCelanimation-container">
          <ImageSequence />
        </div>
        <div className="Belink-container">
          <BeLink link={url} />
        </div>
      </div>
      {/* <img src={eclipse} alt="eclipse" className="eclipse" /> */}
    </div>
  );
};

export default Frog;
