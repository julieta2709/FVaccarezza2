import React, { useContext } from "react";
import BG from "../../assets/img/Broke/BG.png";
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
import Brokecel2 from "../../assets/img/Broke/Brokecel2.png";
import "../../styles/Broke.css";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import { WorkDataContext } from "./WorkContext";

const Broke = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date, url } = WorkData[5];
  const sentences = description.split("\n");
  return (
    <div className="Work-BrokeContainer">
      <div className="Work-BrokeBg">
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
        <img src={Broke1} alt="Broke1" className="Broke1" />
        <img src={Broke2} alt="Broke2" className="Broke2" />
        <img src={Broke3} alt="Broke3" className="Broke3" />
        <img src={Broke4} alt="Broke4" className="Broke4" />
        <img src={Broke5} alt="Broke5" className="Broke5" />
        <img src={Broke6} alt="Broke6" className="Broke6" />
        <img src={Broke7} alt="Broke7" className="Broke7" />
        <img src={Broke8} alt="Broke8" className="Broke8" />
        <img src={Broke9} alt="Broke9" className="Broke9" />
        <img src={Broke10} alt="Broke10" className="Broke10" />
        <img src={Brokecel1} alt="Brokecel1" className="Brokecel1" />
        <img src={Brokecel2} alt="Brokecel2" className="Brokecel2" />
        <img src={BG} alt="background" className="broke-bg" />
        <div className="Belink-container">
          <BeLink link={url} />
        </div>
      </div>
    </div>
  );
};

export default Broke;
