import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Chamberlain from "../../assets/img//Logofolio/Chamberlain.svg";
import Frame1 from "../../assets/img//Logofolio/Frame1.svg";
import Frame10 from "../../assets/img//Logofolio/Frame10.svg";
import Frame11 from "../../assets/img//Logofolio/Frame11.svg";
import Frame12 from "../../assets/img//Logofolio/Frame12.svg";
import Frame2 from "../../assets/img//Logofolio/Frame2.svg";
import Frame3 from "../../assets/img//Logofolio/Frame3.svg";
import Frame4 from "../../assets/img//Logofolio/Frame4.svg";
import Frame5 from "../../assets/img//Logofolio/Frame5.svg";
import Frame6 from "../../assets/img//Logofolio/Frame6.svg";
import Frame7 from "../../assets/img//Logofolio/Frame7.svg";
import Frame8 from "../../assets/img//Logofolio/Frame8.svg";
import Frame9 from "../../assets/img//Logofolio/Frame9.svg";
import Hermandad from "../../assets/img//Logofolio/Hermandad.svg";
import Possco from "../../assets/img//Logofolio/Possco.svg";
import Rimini from "../../assets/img//Logofolio/Rimini.svg";
import TheNewWave from "../../assets/img//Logofolio/TheNewWave.svg";
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

  function easeInOutExpo(t) {
    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  const handlePrevClick = () => {
    const nextElement = document.getElementById("kp");
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
    const nextElement = document.getElementById("misc");
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
      <ul className="Logo-MainContainer">
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">1.</p>
            <p className="Logo-text">THE NEW WAVE</p>
          </div>
          <img src={TheNewWave} alt="TheNewWave" className="Logo-imgtnw" />
        </li>
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">2.</p>
            <p className="Logo-text">CHAMBERLAIN</p>
          </div>
          <img src={Chamberlain} alt="Chamberlain" className="Logo-imgch" />
        </li>
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">3.</p>
            <p className="Logo-text">POSSCO</p>
          </div>
          <img src={Possco} alt="Possco" className="Logo-imgps" />
        </li>
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">4.</p>
            <p className="Logo-text">LA HERMANDAD DEL ANZUELO</p>
          </div>
          <img src={Hermandad} alt="Hermandad" className="Logo-imglha" />
        </li>
        <li className="Logo-container">
          <div className="LogoTitle-container">
            <p className="Logo-number">5.</p>
            <p className="Logo-text">RIMINI</p>
          </div>
          <img src={Rimini} alt="Rimini" className="Logo-imgr" />
        </li>
      </ul>
      <div className="Frame-container">
        <div className="Frame-row">
          <img src={Frame1} alt="Frame1" className="Frame1" />
          <img src={Frame2} alt="Frame2" className="Frame2" />
          <img src={Frame3} alt="Frame3" className="Frame3" />
          <img src={Frame4} alt="Frame4" className="Frame4" />
          <img src={Frame5} alt="Frame5" className="Frame5" />
          <img src={Frame6} alt="Frame6" className="Frame6" />
        </div>
        <div className="Frame-row">
          <img src={Frame7} alt="Frame7" className="Frame7" />
          <img src={Frame8} alt="Frame8" className="Frame8" />
          <img src={Frame9} alt="Frame9" className="Frame9" />
          <img src={Frame10} alt="Frame10" className="Frame10" />
          <img src={Frame11} alt="Frame11" className="Frame11" />
          <img src={Frame12} alt="Frame12" className="Frame12" />
        </div>
      </div>
    </div>
  );
};
export default Logofolio;
