import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MichiBgVectorL from "../../assets/img/BG/MichiBgVectorL.svg";
import MichiBgVectorR from "../../assets/img/BG/MichiBgVectorR.svg";
import Michi1 from "../../assets/img/Michi/Michi1.svg";
import Michi2 from "../../assets/img/Michi/Michi2.svg";
import Michi3 from "../../assets/img/Michi/Michi3.svg";
import Michi4 from "../../assets/img/Michi/Michi4.svg";
import Michi5 from "../../assets/img/Michi/Michi5.svg";
import Michi6 from "../../assets/img/Michi/Michi6.svg";
import "../../styles/Michi.css";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import MichiAnimation from "./MichiCelanimation";
import { WorkDataContext } from "./WorkContext";

const Michi = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  const { index, title, description, date, url } = WorkData[4];
  const sentences = description.split("\n");

  function easeInOutExpo(t) {
    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  const handlePrevClick = () => {
    const nextElement = document.getElementById("opame");
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
    const nextElement = document.getElementById("broke");
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
    <div className="Work-MichiContainer">
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
      <img src={MichiBgVectorR} alt="MichiBgR" className="MichiBgR" />
      <img src={MichiBgVectorL} alt="MichiBgL" className="MichiBgL" />
      <div className="WorkIndividualphoto-container">
        <img src={Michi1} alt="Michi1" className="Michi1" />
        <img src={Michi2} alt="Michi2" className="Michi2" />
        <div className="Michi-column2container">
          <img src={Michi3} alt="Michi3" className="Michi3" />
          <img src={Michi4} alt="Michi4" className="Michi4" />
        </div>
        <img src={Michi5} alt="Michi5" className="Michi5" />
        <img src={Michi6} alt="Michi6" className="Michi6" />
        <div className="MichiAnimation-container">
          <MichiAnimation />
        </div>
        <div className="Belink-container">
          <BeLink link={url} />
        </div>
      </div>
    </div>
  );
};

export default Michi;
