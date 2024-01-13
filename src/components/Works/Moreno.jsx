import React, { useContext } from "react";
import Moreno1 from "../../assets/img/Moreno/Moreno1.png";
import Moreno2 from "../../assets/img/Moreno/Moreno2.png";
import Moreno3 from "../../assets/img/Moreno/Moreno3.png";
import Moreno4 from "../../assets/img/Moreno/Moreno4.png";
import "../../styles/Moreno.css";
import "../../styles/Work.css";
import PrevNextButtons from "../Buttons/PrevNextButton";
import { WorkDataContext } from "./WorkContext";

const Moreno = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date } = WorkData[2];
  const sentences = description.split("\n");
  return (
    <div className="Work-MorenoContainer">
      <div className="Work-MorenoBg">
        <div className="Work-TitleIndvidual">
        <PrevNextButtons />
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
        <img src={Moreno1} alt="Moreno1" className="Moreno1" />
        <img src={Moreno2} alt="Moreno2" className="Moreno2" />
        <img src={Moreno3} alt="Moreno3" className="Moreno3" />
        <img src={Moreno4} alt="Moreno4" className="Moreno4" />
{/*         <img src={Morenocel1} alt="Morenocel1" className="Morenocel1" />
        <img src={Morenocel2} alt="Morenocel2" className="Morenocel2" /> */}
      </div>
    </div>
  );
};

export default Moreno;
