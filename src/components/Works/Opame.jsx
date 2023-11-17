import React from "react";
import ItemTitle from "./ItemTitle";
const Opame = () => {
  return (
    <div>
    <ItemTitle
      number="4"
      text="OPAME COLLECTIVE ="
      className="Work-TitleIndvidual"
      numberClass="Work-NumberIndividual"
      textClass="Work-TextIndividual"
      active={currentComponent === 4}
    />
    <p>exclusive artists & designers creations e-commerce. website redesign.</p>
    <p>APRIL 2023</p>
    </div>
  );
};
export default Opame;
