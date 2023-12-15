import React from "react";
import "../../styles/Work.css";
import { WorkDataContext } from "./WorkContext";

const Misc = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date } = WorkData[8];

  return (
    <div>
      <div className="Work-TitleIndvidual">
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <p className="WorkTitleDescription">{description}</p>
        <p className="WorkTitleDate">{date}</p>
      </div>
    </div>
  );
};

export default Misc;
