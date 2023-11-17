import React from "react";
import ItemTitle from "./ItemTitle";
const Logofolio = () => {
  return (
    <div>
    <ItemTitle
      number="8"
      text="LOGOFOLIO }"
      className="Work-TitleIndvidual"
      numberClass="Work-NumberIndividual"
      textClass="Work-TextIndividual"
      active={currentComponent === 8}
    />
    <p>some of the logos I created over the past year.</p>
    </div>
  );
};
export default Logofolio;
