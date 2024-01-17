import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Opame1 from "../../assets/img/Opame/Opame1.png";
import Opame2 from "../../assets/img/Opame/Opame2.png";
import Opame3 from "../../assets/img/Opame/Opame3.png";
import Opame4 from "../../assets/img/Opame/Opame4.png";
import Opame5 from "../../assets/img/Opame/Opame5.png";
import Opame6 from "../../assets/img/Opame/Opame6.png";
import Opame7 from "../../assets/img/Opame/Opame7.png";
import Opamecel1 from "../../assets/img/Opame/Opamecel1.png";
import Opamecel2 from "../../assets/img/Opame/Opamecel2.png";
import Opamecel3 from "../../assets/img/Opame/Opamecel3.png";
import Opamecel4 from "../../assets/img/Opame/Opamecel4.png";
import "../../styles//Opame.css";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import { WorkDataContext } from "./WorkContext";

const Opame = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  const { index, title, description, date } = WorkData[3];
  const sentences = description.split("\n");

  function easeInOutExpo(t) {
    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  const handlePrevClick = () => {
    const nextElement = document.getElementById("moreno");
    if (nextElement) {
      const offset = 200;
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
    const nextElement = document.getElementById("michi");
    if (nextElement) {
      const offset = 200;
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
    <div className="Work-OpameContainer">
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
        <img src={Opame1} alt="Opame1" className="Opame1" />
        <img src={Opame2} alt="Opame2" className="Opame2" />
        <img src={Opame3} alt="Opame3" className="Opame3" />
        <img src={Opame4} alt="Opame4" className="Opame4" />
        <img src={Opame5} alt="Opame5" className="Opame5" />
        <img src={Opame6} alt="Opame6" className="Opame6" />
        <img src={Opame7} alt="Opame7" className="Opame7" />
        <img src={Opamecel1} alt="Opamecel1" className="Opamecel1" />
        <img src={Opamecel2} alt="Opamecel2" className="Opamecel2" />
        <img src={Opamecel3} alt="Opamecel3" className="Opamecel3" />
        <img src={Opamecel4} alt="Opamecel4" className="Opamecel4" />
      </div>
    </div>
  );
};
export default Opame;
