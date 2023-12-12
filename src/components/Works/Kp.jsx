import React from "react";
import "../../styles/Work.css";

const Kp = ({ data }) => {
  if (!data) {
    return null;
  }
  const { index, title, description, date } = data;

  return (
    <div>
      <div className="Work-TitleIndvidual" onClick={() => selectWork(index)}>
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <p className="WorkTitleDescription">{description}</p>
        <p className="WorkTitleDate">{date}</p>
      </div>
    </div>
  );
};

export default Kp;
