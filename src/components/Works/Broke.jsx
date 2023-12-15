import React, { useContext } from "react";
import "../../styles/Work.css";
import { WorkDataContext } from "./WorkContext";

const Broke = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date } = WorkData[5];
  return (
    <div>
      <span className="Work-NumberIndividual">{index}</span>
      <span className="Work-TextIndividual">{title}</span>
      <p className="WorkTitleDescription">{description}</p>
      <p className="WorkTitleDate">{date}</p>
    </div>
  );
};

export default Broke;
