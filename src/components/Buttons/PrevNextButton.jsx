import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import { WorkDataContext } from "../Works/WorkContext";

const PrevNextButtons = () => {
  const WorkData = useContext(WorkDataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const totalItems = WorkData.length;

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
    const newIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    navigateToIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
    navigateToIndex(newIndex);
  };

  return (
    <div className="PrevNext-container">
      <div className="Prev">
        <Prev onClick={handlePrevClick} />
      </div>
      <div className="Next">
        <Next onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default PrevNextButtons;

