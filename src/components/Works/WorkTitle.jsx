import React, { useEffect, useState } from "react";
import Next from "../Buttons/Next";
import ItemTitle from "./ItemTitle";
import WorkTitleData from "./WorkTitleData.json";

const WorkTitle = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    setComponents(WorkTitleData);
  }, []);

  const handleButtonClick = () => {
    if (currentComponent < components.length - 1) {
        setCurrentComponent(currentComponent + 1);
      }
  };

  const { title, description, date } = components[currentComponent];

  return (
    <div>
      <ItemTitle
        number={currentComponent + 1}
        text={title}
        className="Work-TitleIndvidual"
        numberClass="Work-NumberIndividual"
        textClass="Work-TextIndividual"
        active={currentComponent === 0}
      />
      <Next onClick={handleButtonClick} />
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
};

export default WorkTitle;