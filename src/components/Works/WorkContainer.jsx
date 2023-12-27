import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import asterisk from "../../assets/img/icons/asterisk.svg";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import MainWork from "./MainWork";
import { WorkDataContext } from "./WorkContext";

const WorkContainer = () => {
  const WorkData = useContext(WorkDataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const navigateToIndex = (index) => {
   if (WorkData && Array.isArray(WorkData) && WorkData.length > 0) {
      setCurrentIndex(index);
      const currentWork = WorkData[index];
      if (currentWork && currentWork.id) {
        const id = currentWork.id;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        navigate(`#${id}`);
      }
    }
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? WorkData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    navigateToIndex(newIndex); 
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === WorkData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    navigateToIndex(newIndex); 
  };

  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asterisk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <MainWork works={WorkData} />
      <div className="Work-componentTitle">
      {currentIndex !== 0 && (
          <Prev className="prevNext" onClick={handlePrevClick} />
        )}
        {currentIndex !== WorkData.length - 1 && (
          <Next className="prevNext" onClick={handleNextClick} />
        )}
      </div>
    </div>
  );
};

export default WorkContainer;