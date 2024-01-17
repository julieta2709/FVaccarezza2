import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Kp1 from "../../assets/img//Kp/Kp1.png";
import Kp2 from "../../assets/img//Kp/Kp2.png";
import Kp3 from "../../assets/img//Kp/Kp3.png";
import Kp4 from "../../assets/img//Kp/Kp4.png";
import Kp5 from "../../assets/img//Kp/Kp5.png";
import Kp6 from "../../assets/img//Kp/Kp6.png";
import "../../styles/Kp.css";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import { WorkDataContext } from "./WorkContext";

const Kp = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  const { index, title, description, date, url } = WorkData[6];
  const sentences = description.split("\n");

  function easeInOutExpo(t) {
    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  const handlePrevClick = () => {
    const nextElement = document.getElementById("broke");
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
    const nextElement = document.getElementById("logofolio");
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
    <div className="Work-KpContainer">
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
        <img src={Kp1} alt="Kp1" className="Kp1" />
        <img src={Kp2} alt="Kp2" className="Kp2" />
        <img src={Kp3} alt="Kp3" className="Kp3" />
        <img src={Kp4} alt="Kp4" className="Kp4" />
        <img src={Kp5} alt="Kp5" className="Kp5" />
        <img src={Kp6} alt="Kp6" className="Kp6" />
        <div className="Belink-container">
          <BeLink link={url} />
        </div>
      </div>
    </div>
  );
};

export default Kp;
