import React, { useContext, useState } from "react";
import asterisk from "../../assets/img/icons/asterisk.svg";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import MainWork from "./MainWork";
import { WorkDataContext } from "./WorkContext";



const WorkContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const WorkData = useContext(WorkDataContext);
  
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < WorkData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
 
    <React.Fragment key={WorkData.index}>
      {WorkData.index === currentIndex && currentIndex > 0 && (
        <Prev onClick={handlePrevClick} />
      )}
     
      {WorkData.index === currentIndex && currentIndex < WorkData.length - 1 && (
        <Next onClick={handleNextClick} />
      )}
    </React.Fragment>
  ;
  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asterisk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <MainWork works={WorkData} />
    </div>
  );
};
export default WorkContainer;