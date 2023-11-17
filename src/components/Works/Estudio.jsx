import React from "react";
import ItemTitle from "./ItemTitle";
const Estudio = () => {
  return (
    <div>
    <ItemTitle
      number="2"
      text="ESTUDIO 32 -"
      className="Work-TitleIndvidual"
      numberClass="Work-NumberIndividual"
      textClass="Work-TextIndividual"
      active={currentComponent === 2}
    />
    <p>furniture & decor store also located in tigre, buenos aires. brand identity, product photography & merchandising.</p>
    <p>MARCH 2023</p>
    </div>
  );
};
export default Estudio;
