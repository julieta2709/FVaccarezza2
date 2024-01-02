import React, { useContext } from "react";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import { WorkDataContext } from "./WorkContext";

const Kp = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date, url } = WorkData[6];
  const sentences = description.split("\n");
  return (
    <div className="Work-KpBg">
      <div className="Work-TitleIndvidual">
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <div className="Work-DescriptionContainer">
          {sentences.map((sentence, index) => (
            <p className="WorkTitleDescription" key={index}>
              {sentence}
            </p>
          ))}
        </div>
        <p className="WorkTitleDate">{date}</p>
      </div>
      <BeLink link={url} />
cd     </div>
  );
};

export default Kp;
