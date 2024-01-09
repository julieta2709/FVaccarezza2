import React, { useContext } from "react";
import Estudio1 from "../../assets/img/Estudio/Estudio1.png";
import Estudio2 from "../../assets/img/Estudio/Estudio2.png";
import Estudio3 from "../../assets/img/Estudio/Estudio3.png";
import Estudio4 from "../../assets/img/Estudio/Estudio4.png";
import Estudiocel1 from "../../assets/img/Estudio/Estudiocel1.png";
import Estudiopad1 from "../../assets/img/Estudio/Estudiopad1.png";
import "../../styles/Estudio.css";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import { WorkDataContext } from "./WorkContext";

const Estudio = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date, url } = WorkData[1];
  const sentences = description.split("\n");
  return (
    <div className="Work-EstudioContainer">
      <div className="Work-EstudioBg">
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
        <img src={Estudio1} alt="Estudio1" className="Estudio1" />
        <img src={Estudio2} alt="Estudio2" className="Estudio2" />
        <img src={Estudio3} alt="Estudio3" className="Estudio3" />
        <img src={Estudio4} alt="Estudio4" className="Estudio4" />
        <img src={Estudiocel1} alt="Estudiocel1" className="Estudiocel1" />
        <img src={Estudiopad1} alt="Estudio-IPAD" className="Estudiopad1" />
        <div className="Belink-container">
          <BeLink link={url} />
        </div>
      </div>
    </div>
  );
};

export default Estudio;
