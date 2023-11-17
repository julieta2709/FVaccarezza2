import React, { useEffect, useState } from "react";
import Next from "../Buttons/Next";
import ItemTitle from "./ItemTitle";
import WorkTitleData from "./WorkTitleData.json";
const Moreno = () => {
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
  if (components.length === 0) {
    return null;
  }

  const { index, title, description, date } =
    components.find((item) => parseInt(item.index) === currentComponent + 1) ||
    {};
  const decodedTitle = decodeURIComponent(title);

  return (
    <div>
      <ItemTitle
        number={index}
        text={decodedTitle}
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
export default Moreno;
