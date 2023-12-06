import React, { useEffect, useState } from "react";
import WorkData from "../../pages/WorkData.json";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";

const Kp = ({ work, selectWork }) => {
  const [works, setWorks] = useState(WorkData);
  const [currentIndex, setCurrentIndex] = useState(work ? work.index : 0);
  const [currentComponent, setCurrentComponent] = useState({});

  useEffect(() => {
    setCurrentIndex(work.index);
  }, [work]);

  const handlePrevClick = () => {
    const prevIndex = currentIndex - 1;
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const prevComponent = works.find((work) => work.index === prevIndex) || {};
      setCurrentComponent(prevComponent);
    }
  };

  const handleNextClick = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex <= works.length) {
      setCurrentIndex(nextIndex);
      const nextComponent = works.find((work) => work.index === nextIndex) || {};
      setCurrentComponent(nextComponent);
    }
  };

  if (!work) {
    return null;
  }

  return (
    <div>
      <Prev onClick={handlePrevClick} />
      <div
        className="Work-TitleIndvidual"
        // onClick={() => selectWork(work.index)}
      >
        <span className="Work-NumberIndividual">{work.index}</span>
        <span className="Work-TextIndividual">{work.title}</span>
        <p className="WorkTitleDescription">{work.description}</p>
        <p className="WorkTitleDate">{work.date}</p>
        <Next onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Kp;

