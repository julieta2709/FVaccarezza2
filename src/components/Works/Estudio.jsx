import React, { useContext, useState } from "react";
import "../../styles/Work.css";
import { WorkDataContext } from "./WorkContext";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";

const Estudio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date } = WorkData[1];
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < WorkData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      {currentIndex > 0 && <Prev onClick={handlePrevClick} />}
      <div className="Work-TitleIndvidual">
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <p className="WorkTitleDescription">{description}</p>
        <p className="WorkTitleDate">{date}</p>
      </div>
      {currentIndex < WorkData.length - 1 && <Next onClick={handleNextClick} />}
    </div>
  );
};

export default Estudio;
