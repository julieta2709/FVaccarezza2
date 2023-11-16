import React from "react";
import Next from "../Buttons/Next";
import ItemTitle from "./ItemTitle";
const Frog = () => {
  return (
    <div>
      <ItemTitle
        number="1"
        text="FROG BAZAR."
        className="Work-TitleIndvidual"
        numberClass="Work-NumberIndividual"
        textClass="Work-TextIndividual"
      />
      <Next />
      <p>
        retail store located in tigre, buenos aires. branding, product
        photography & website design.
      </p>
      <p>DECEMBER 2022</p>
    </div>
  );
};
export default Frog;
