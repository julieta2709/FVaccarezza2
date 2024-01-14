import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Chamberlain from "../../assets/img//Logofolio/Chamberlain.png";
import Frame1 from "../../assets/img//Logofolio/Frame1.png";
import Frame10 from "../../assets/img//Logofolio/Frame10.png";
import Frame11 from "../../assets/img//Logofolio/Frame11.png";
import Frame12 from "../../assets/img//Logofolio/Frame12.png";
import Frame2 from "../../assets/img//Logofolio/Frame2.png";
import Frame3 from "../../assets/img//Logofolio/Frame3.png";
import Frame4 from "../../assets/img//Logofolio/Frame4.png";
import Frame5 from "../../assets/img//Logofolio/Frame5.png";
import Frame6 from "../../assets/img//Logofolio/Frame6.png";
import Frame7 from "../../assets/img//Logofolio/Frame7.png";
import Frame8 from "../../assets/img//Logofolio/Frame8.png";
import Frame9 from "../../assets/img//Logofolio/Frame9.png";
import Hermandad from "../../assets/img//Logofolio/Hermandad.png";
import Possco from "../../assets/img//Logofolio/Possco.png";
import Rimini from "../../assets/img//Logofolio/Rimini.png";
import TheNewWave from "../../assets/img//Logofolio/TheNewWave.png";
import "../../styles/Logofolio.css";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import { WorkDataContext } from "./WorkContext";

const Logofolio = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  const { index, title, description, date } = WorkData[7];
  const sentences = description.split("\n");

  const handlePrevClick = () => {
    const nextElement = document.getElementById("kp");
    if (nextElement) {
      const offset = 50;
      const elementPosition =
        nextElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    const nextElement = document.getElementById("misc");
    if (nextElement) {
      const offset = 50;
      const elementPosition =
        nextElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Work-LogofolioContainer">
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
      <div className="WorkIndividualphoto-container"></div>
      <ul className="Logo-MainContainer">
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">1.</p>
            <p className="Logo-text">THE NEW WAVE</p>
          </div>
          <img src={TheNewWave} alt="TheNewWave" className="Logo-img" />
        </li>
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">2.</p>
            <p className="Logo-text">CHAMBERLAIN</p>
          </div>
          <img src={Chamberlain} alt="Chamberlain" className="Logo-img" />
        </li>
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">3.</p>
            <p className="Logo-text">POSSCO</p>
          </div>
          <img src={Possco} alt="Possco" className="Logo-img" />
        </li>
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">4.</p>
            <p className="Logo-text">LA HERMANDAD DEL ANZUELO</p>
          </div>
          <img src={Hermandad} alt="Hermandad" className="Logo-img" />
        </li>
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">5.</p>
            <p className="Logo-text">RIMINI</p>
          </div>
          <img src={Rimini} alt="Rimini" className="Logo-img" />
        </li>
      </ul>
      <div className="Frame-container">
        <div className="Frame-row">
          <img src={Frame1} alt="Frame1" className="Frame" />
          <img src={Frame2} alt="Frame2" className="Frame" />
          <img src={Frame3} alt="Frame3" className="Frame" />
          <img src={Frame4} alt="Frame4" className="Frame" />
          <img src={Frame5} alt="Frame5" className="Frame" />
          <img src={Frame6} alt="Frame6" className="Frame" />
        </div>
        <div className="Frame-row">
          <img src={Frame7} alt="Frame7" className="Frame" />
          <img src={Frame8} alt="Frame8" className="Frame" />
          <img src={Frame9} alt="Frame9" className="Frame" />
          <img src={Frame10} alt="Frame10" className="Frame" />
          <img src={Frame11} alt="Frame11" className="Frame" />
          <img src={Frame12} alt="Frame12" className="Frame" />
        </div>
      </div>
    </div>
  );
};
export default Logofolio;
