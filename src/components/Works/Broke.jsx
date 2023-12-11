import React from "react";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";

const Broke = ({ data, onPrevClick, onNextClick }) => {
  if (!data) {
    return null;
  }
  const { index, title, description, date } = data;

  const handlePrevClick = () => {
    onPrevClick();
  };

  const handleNextClick = () => {
    onNextClick();
  };

  return (
    <div>
       <Prev onClick={handlePrevClick} />
      <div
        className="Work-TitleIndvidual"
        onClick={() => selectWork(index)}
      >
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <p className="WorkTitleDescription">{description}</p>
        <p className="WorkTitleDate">{date}</p>
      </div>
      <Next onClick={handleNextClick}/>
    </div>
  );
};

export default Broke;
