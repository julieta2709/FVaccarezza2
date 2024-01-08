import React, { useContext } from "react";
import Frog1 from "../../assets/img/Frog/Frog1.png";
import Frog2 from "../../assets/img/Frog/Frog2.png";
import Frog3 from "../../assets/img/Frog/Frog3.png";
import Frog4 from "../../assets/img/Frog/Frog4.png";
import Frog5 from "../../assets/img/Frog/Frog5.png";
import Frog6 from "../../assets/img/Frog/Frog6.png";
import Frogcel1 from "../../assets/img/Frog/Frogcel1.png";
import Frogcel2 from "../../assets/img/Frog/Frogcel2.png";
import Frogcel3 from "../../assets/img/Frog/Frogcel3.png";
import Frogcel4 from "../../assets/img/Frog/Frogcel4.png";
import "../../styles/Frog.css";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import { WorkDataContext } from "./WorkContext";

const Frog = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date, url } = WorkData[0];
  const sentences = description.split("\n");
  return (
    <div className="Work-FrogContainer">
      <div className="Work-FrogBg">
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
      <div className="Frogphoto-container">
        <img src={Frog1} alt="FrogBazar1" className="Frog1" />
        <img src={Frog2} alt="FrogBazar2" className="Frog2" />
        <img src={Frog3} alt="FrogBazar3" className="Frog3" />
        <img src={Frog4} alt="FrogBazar4" className="Frog4" />
        <img src={Frog5} alt="FrogBazar5" className="Frog5" />
        <img src={Frog6} alt="FrogBazar6" className="Frog6" />
        <img src={Frogcel1} alt="FrogBazarcel1" className="Frogcel1" />
        <img src={Frogcel2} alt="FrogBazarcel2" className="Frogcel2" />
        <img src={Frogcel3} alt="FrogBazarcel3" className="Frogcel3" />
        <img src={Frogcel4} alt="FrogBazarcel4" className="Frogcel4" />
        <div className="Belink-container">
          <BeLink link={url} />
        </div>
      </div>
    </div>
  );
};

export default Frog;
