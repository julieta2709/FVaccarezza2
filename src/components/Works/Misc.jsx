import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MiscBgVectorL from "../../assets/img/BG/MiscBgVectorL.svg";
import MiscBgVectorL2 from "../../assets/img/BG/MiscBgVectorL2.svg";
import MiscBgVectorR from "../../assets/img/BG/MiscBgVectorR.svg";
import MiscBgVectorR2 from "../../assets/img/BG/MiscBgVectorR2.svg";
import MiscBgVectorR3 from "../../assets/img/BG/MiscBgVectorR3.svg";
import Misc1 from "../../assets/img/Misc/Misc1.svg";
import Misc10 from "../../assets/img/Misc/Misc10.svg";
import Misc11 from "../../assets/img/Misc/Misc11.svg";
import Misc12 from "../../assets/img/Misc/Misc12.svg";
import Misc13 from "../../assets/img/Misc/Misc13.svg";
import Misc14 from "../../assets/img/Misc/Misc14.svg";
import Misc15 from "../../assets/img/Misc/Misc15.svg";
import Misc16 from "../../assets/img/Misc/Misc16.svg";
import Misc17 from "../../assets/img/Misc/Misc17.svg";
import Misc2 from "../../assets/img/Misc/Misc2.svg";
import Misc3 from "../../assets/img/Misc/Misc3.svg";
import Misc4 from "../../assets/img/Misc/Misc4.svg";
import Misc5 from "../../assets/img/Misc/Misc5.svg";
import Misc6 from "../../assets/img/Misc/Misc6.svg";
import Misc7 from "../../assets/img/Misc/Misc7.svg";
import Misc8 from "../../assets/img/Misc/Misc8.svg";
import Misc9 from "../../assets/img/Misc/Misc9.svg";
import "../../styles/Misc.css";
import "../../styles/Work.css";
import Prev from "../Buttons/Prev";
import { WorkDataContext } from "./WorkContext";

const Misc = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  function easeInOutExpo(t) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  const { index, title, description, date } = WorkData[8];
  const sentences = description.split("\n");

  const handlePrevClick = () => {
    const nextElement = document.getElementById("logofolio");
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
    <div className="Work-MiscContainer">
      <div className="Work-TitleIndivCont">
        <div className="Work-TitleIndividual">
          <div className="Prev" onClick={handlePrevClick}>
            <Prev />
          </div>
          <div className="Work-TitleIndivContainer">
            <span className="Work-NumberIndividual">{index}</span>
            <span className="Work-TextIndividual">{title}</span>
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
      <div className="MiscBgR-container">
      <img src={MiscBgVectorR} alt="MiscBgR" className="MiscBgR" />
      <img src={MiscBgVectorR2} alt="MiscBgR" className="MiscBgR2" />
      <img src={MiscBgVectorR3} alt="MiscBgR" className="MiscBgR3" />
      </div>
      <div className="MiscBgL-container">
      <img src={MiscBgVectorL} alt="MiscBgR" className="MiscBgL" />
      <img src={MiscBgVectorL2} alt="MiscBgR" className="MiscBgL2" />
      </div>
      <div className="WorkIndividualphoto-container">
        <div className="Misc-MainContainer">
          <div className="Misc-section1">
            <p className="Misc-sectionTitle">BEZIER</p>
            <div className="section1-container">
              <img src={Misc1} alt="Misc1" className="Misc1" />
              <img src={Misc2} alt="Misc2" className="Misc2" />
              <img src={Misc3} alt="Misc3" className="Misc3" />
              <img src={Misc4} alt="Misc4" className="Misc4" />
              <img src={Misc5} alt="Misc5" className="Misc5" />
            </div>
          </div>
          <div className="Misc-section2">
            <p className="Misc-sectionTitle">GEO</p>
            <img src={Misc6} alt="Misc6" className="Misc" />
            <div className="Misc-subContainer">
              <img src={Misc7} alt="Misc7" className="Miscsc" />
              <img src={Misc8} alt="Misc8" className="Miscsc" />
            </div>
          </div>
          <div className="Misc-section2">
            <p className="Misc-sectionTitle">BALANCE</p>
            <img src={Misc9} alt="Misc9" className="Misc" />
            <div className="Misc-subContainer">
              <img src={Misc10} alt="Misc10" className="Miscsc" />
              <img src={Misc17} alt="Misc17" className="Miscsc" />
            </div>
          </div>
          <div className="Misc-section3">
            <p className="Misc-sectionTitle">NET</p>
            <img src={Misc11} alt="Misc11" className="Misc" />
            <div className="Misc-subContainer">
              <img src={Misc12} alt="Misc12" className="Miscsc" />
              <img src={Misc13} alt="Misc13" className="Miscsc" />
            </div>
            <img src={Misc14} alt="Misc14" className="Misc14" />
            <div className="Misc-subContainer">
              <img src={Misc15} alt="Misc15" className="Miscsc" />
              <img src={Misc16} alt="Misc16" className="Miscsc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misc;
