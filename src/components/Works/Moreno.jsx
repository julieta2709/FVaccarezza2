import React from "react";
import ItemTitle from "./ItemTitle";
const Moreno = () => {
  return (
    <div>
    <ItemTitle
      number="3"
      text="N.MORENO/PEDRAZA"
      className="Work-TitleIndvidual"
      numberClass="Work-NumberIndividual"
      textClass="Work-TextIndividual"
      active={currentComponent === 3}
    />
    <p>industrial design studio. branding & website design.</p>
    <p>APRIL 2023</p>
    </div>
  );
};
export default Moreno;
