import React, { useState } from "react";
import Next from "../Buttons/Next";
import ItemTitle from "./ItemTitle";
const Frog = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleButtonClick = () => {
    if (currentComponent < 9) {
      setCurrentComponent(currentComponent + 1);
    }
  };
  return (
    <div>
      <ItemTitle
        number="1"
        text="FROG BAZAR."
        className="Work-TitleIndvidual"
        numberClass="Work-NumberIndividual"
        textClass="Work-TextIndividual"
        active={currentComponent === 1}
      />
      <Next onClick={handleButtonClick} />
      <p>
        retail store located in tigre, buenos aires. branding, product
        photography & website design.
      </p>
      <p>DECEMBER 2022</p>
    </div>
  );
};
export default Frog;
