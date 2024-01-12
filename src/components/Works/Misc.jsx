import React, { useContext } from "react";
import Misc1 from "../../assets/img/Misc/Misc1.png";
import Misc10 from "../../assets/img/Misc/Misc10.png";
import Misc11 from "../../assets/img/Misc/Misc11.png";
import Misc12 from "../../assets/img/Misc/Misc12.png";
import Misc13 from "../../assets/img/Misc/Misc13.png";
import Misc14 from "../../assets/img/Misc/Misc14.png";
import Misc15 from "../../assets/img/Misc/Misc15.png";
import Misc16 from "../../assets/img/Misc/Misc16.png";
import Misc17 from "../../assets/img/Misc/Misc17.png";
import Misc2 from "../../assets/img/Misc/Misc2.png";
import Misc3 from "../../assets/img/Misc/Misc3.png";
import Misc4 from "../../assets/img/Misc/Misc4.png";
import Misc5 from "../../assets/img/Misc/Misc5.png";
import Misc6 from "../../assets/img/Misc/Misc6.png";
import Misc7 from "../../assets/img/Misc/Misc7.png";
import Misc8 from "../../assets/img/Misc/Misc8.png";
import Misc9 from "../../assets/img/Misc/Misc9.png";
import "../../styles/Misc.css";
import "../../styles/Work.css";
import { WorkDataContext } from "./WorkContext";

const Misc = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date } = WorkData[8];
  const sentences = description.split("\n");
  return (
    <div className="Work-MiscContainer">
      <div className="Work-MiscBg">
        <div className="Work-TitleIndvidual">
          <span className="Work-NumberIndividual">{index}</span>
          <span className="Work-TextIndividual">{title}</span>
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
              <img src={Misc7} alt="Misc7" className="Misc" />
              <img src={Misc8} alt="Misc8" className="Misc" />
            </div>
          </div>
          <div className="Misc-section2">
            <p className="Misc-sectionTitle">BALANCE</p>
            <img src={Misc9} alt="Misc9" className="Misc" />
            <div className="Misc-subContainer">
              <img src={Misc10} alt="Misc10" className="Misc" />
              <img src={Misc17} alt="Misc17" className="Misc" />
            </div>
          </div>
          <div className="Misc-section3">
            <p className="Misc-sectionTitle">NET</p>
            <img src={Misc11} alt="Misc11" className="Misc" />
            <div className="Misc-subContainer">
              <img src={Misc12} alt="Misc12" className="Misc" />
              <img src={Misc13} alt="Misc13" className="Misc" />
            </div>
            <img src={Misc14} alt="Misc14" className="Misc14" />
            <div className="Misc-subContainer">
              <img src={Misc15} alt="Misc15" className="Misc" />
              <img src={Misc16} alt="Misc16" className="Misc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misc;
