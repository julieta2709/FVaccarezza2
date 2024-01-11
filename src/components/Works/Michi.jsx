import React, { useContext } from "react";
import Michi1 from "../../assets/img/Michi/Michi1.png";
import Michi2 from "../../assets/img/Michi/Michi2.png";
import Michi3 from "../../assets/img/Michi/Michi3.png";
import Michi4 from "../../assets/img/Michi/Michi4.png";
import Michi5 from "../../assets/img/Michi/Michi5.png";
import Michi6 from "../../assets/img/Michi/Michi6.png";
import Michicel1 from "../../assets/img/Michi/Michicel1.png";
import "../../styles/Michi.css";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import { WorkDataContext } from "./WorkContext";

const Michi = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date, url } = WorkData[4];
  const sentences = description.split("\n");
  return (
    <div className="Work-MichiContainer">
      <div className="Work-MichiBg">
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
        <img src={Michi1} alt="Michi1" className="Michi1" />
        <img src={Michi2} alt="Michi2" className="Michi2" />
        <img src={Michi3} alt="Michi3" className="Michi3" />
        <img src={Michi4} alt="Michi4" className="Michi4" />
        <img src={Michi5} alt="Michi5" className="Michi5" />
        <img src={Michi6} alt="Michi6" className="Michi6" />
        <img src={Michicel1} alt="Michicel1" className="Michicel1" />
        <div className="Belink-container">
          <BeLink link={url} />
        </div>
      </div>
    </div>
  );
};

export default Michi;
