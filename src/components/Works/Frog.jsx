import React, { useContext } from "react";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import { WorkDataContext } from "./WorkContext";


const Frog = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date, url } = WorkData[0];

  return (
    <div className="Work-FrogBg">
      <div className="Work-TitleIndvidual">
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <p className="WorkTitleDescription">{description}</p>
        <p className="WorkTitleDate">{date}</p>
      </div>
      <BeLink link={url} />
    </div>
  );
};

export default Frog;
