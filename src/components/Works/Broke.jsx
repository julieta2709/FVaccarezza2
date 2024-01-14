import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Broke1 from "../../assets/img/Broke/Broke1.png";
import Broke10 from "../../assets/img/Broke/Broke10.png";
import Broke2 from "../../assets/img/Broke/Broke2.png";
import Broke3 from "../../assets/img/Broke/Broke3.png";
import Broke4 from "../../assets/img/Broke/Broke4.png";
import Broke5 from "../../assets/img/Broke/Broke5.png";
import Broke6 from "../../assets/img/Broke/Broke6.png";
import Broke7 from "../../assets/img/Broke/Broke7.png";
import Broke8 from "../../assets/img/Broke/Broke8.png";
import Broke9 from "../../assets/img/Broke/Broke9.png";
import Brokecel1 from "../../assets/img/Broke/Brokecel1.png";
import "../../styles/Broke.css";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import { WorkDataContext } from "./WorkContext";

const Broke = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  const { index, title, description, date, url } = WorkData[5];
  const sentences = description.split("\n");

  const handlePrevClick = () => {
    const nextElement = document.getElementById("michi");
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

  return (
    <div className="Work-BrokeContainer">
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
        <img src={Broke1} alt="Broke1" className="Broke1" />
        <div className="broke-column1">
          <img src={Broke2} alt="Broke2" className="Broke2" />
          <img src={Broke3} alt="Broke3" className="Broke3" />
          <img src={Broke4} alt="Broke4" className="Broke4" />
        </div>
        <div className="broke-column2">
          <img src={Broke5} alt="Broke5" className="Broke5" />
          <img src={Broke6} alt="Broke6" className="Broke6" />
          <img src={Broke7} alt="Broke7" className="Broke7" />
          <img src={Broke8} alt="Broke8" className="Broke8" />
        </div>
        <img src={Broke9} alt="Broke9" className="Broke9" />
        <img src={Broke10} alt="Broke10" className="Broke10" />
        <img src={Brokecel1} alt="Brokecel1" className="Brokecel1" />
        <div className="Belink-container">
          <BeLink link={url} />
        </div>
      </div>
    </div>
  );
};

export default Broke;
