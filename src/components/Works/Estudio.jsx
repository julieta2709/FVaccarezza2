import React, { useContext } from "react";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import { WorkDataContext } from "./WorkContext";

const Estudio = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date } = WorkData[1];
/* 
  const scrollToWork = (newIndex) => {
    const section = document.getElementById(`section-${newIndex}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }; */

  const goToPrevious = () => {
    if (index > 1) {
      scrollToWork(index - 1);
    }
  };

  const goToNext = () => {
    if (index < WorkData.length) {
      scrollToWork(index + 1);
    }
  };

  return (
    <div>
      <Prev onClick={goToPrevious} />
      <div className="Work-TitleIndvidual">
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <p className="WorkTitleDescription">{description}</p>
        <p className="WorkTitleDate">{date}</p>
      </div>
      <Next onClick={goToNext} />
    </div>
  );
};

export default Estudio;
