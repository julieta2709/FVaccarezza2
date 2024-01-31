import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Moreno1 from "../../assets/img/Moreno/Moreno1.png";
import Moreno2 from "../../assets/img/Moreno/Moreno2.png";
import Moreno3 from "../../assets/img/Moreno/Moreno3.png";
import Moreno4 from "../../assets/img/Moreno/Moreno4.png";
import "../../styles/Moreno.css";
import "../../styles/Work.css";
import Countdown from "../Animations/Moreno/CountDown";
import FuViews from "../Animations/Moreno/FuViews";
import Nmp1 from "../Animations/Moreno/Nmp1";
import CircleAnimation from "../Animations/Moreno/circleAnimation";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import { WorkDataContext } from "./WorkContext";

const Moreno = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  /*información del contexto*/
  const { index, title, description, date } = WorkData[2];
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
    const nextElement = document.getElementById("estudio");
    if (nextElement) {
      const offset = 200;
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
    const nextElement = document.getElementById("opame");
    if (nextElement) {
      const offset = 200;
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
    <div className="Work-MorenoContainer">
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
      <div className="WorkIndividualphoto-container">
        <img src={Moreno1} alt="Moreno1" className="Moreno1" />
        <div className="Moreno2-container">
        <img src={Moreno2} alt="Moreno2" className="Moreno2" />
        <Nmp1 />
        </div>
        <img src={Moreno4} alt="Moreno4" className="Moreno4" />
        <div className="countdown-container">
          <img src={Moreno3} alt="Moreno3" className="Moreno3" />
          <Countdown />
          <CircleAnimation />
          <FuViews />
        </div>
      </div>
    </div>
  );
};

export default Moreno;
