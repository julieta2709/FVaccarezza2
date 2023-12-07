import React from "react";
import "../../styles/Work.css";

const Logofolio = ({ work, selectWork }) => {
  if (!work) {
    return null;
  }

  return (
    <div>
      <div
        className="Work-TitleIndvidual"
        // onClick={() => selectWork(work.index)}
      >
        <span className="Work-NumberIndividual">{work.index}</span>
        <span className="Work-TextIndividual">{work.title}</span>
        <p className="WorkTitleDescription">{work.description}</p>
        <p className="WorkTitleDate">{work.date}</p>
      </div>
    </div>
  );
};

export default Logofolio;
