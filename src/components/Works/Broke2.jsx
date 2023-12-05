import React from "react";
import "../../styles/Work.css";

const Broke2 = ({ work, selectWork }) => {
  return (
    <div className="Work-TitleIndvidual" onClick={() => selectWork(work.index)}>
      <span className="Work-NumberIndividual">{work.index}</span>
      <span className="Work-TextIndividual">{work.title}</span>
      <p className="WorkTitleDescription">{work.description}</p>
    <p className="WorkTitleDate">{work.date}</p>
    </div>
  );
};

export default Broke2;
