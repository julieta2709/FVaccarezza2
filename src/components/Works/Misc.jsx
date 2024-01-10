import React, { useContext } from "react";
import "../../styles/Work.css";
import { WorkDataContext } from "./WorkContext";

const Misc = () => {
  const WorkData = useContext(WorkDataContext);

  const { index, title, description, date } = WorkData[8];
  const sentences = description.split("\n");
  return (
    <div className="Work-MiscContainer">
      <div className="Work-MiscBg">
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
      </div>
      <div className="WorkIndividualphoto-container"></div>
    </div>
  );
};

export default Misc;
