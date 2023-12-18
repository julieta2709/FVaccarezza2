import React, { useContext } from "react";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import { WorkDataContext } from "./WorkContext";

const Frog = () => {
  const WorkData = useContext(WorkDataContext);
 
  const { index, title, description, date } = WorkData[0];

  return (
    <div>
      <Prev index={index} />
      <div className="Work-TitleIndvidual">
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <p className="WorkTitleDescription">{description}</p>
        <p className="WorkTitleDate">{date}</p>
      </div>
      <Next index={index}/>
    </div>
  );
};

export default Frog;
