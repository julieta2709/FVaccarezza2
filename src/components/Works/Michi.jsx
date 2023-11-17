import React from "react";
import ItemTitle from "./ItemTitle";
const Michi = () => {
  return (
    <div>
    <ItemTitle
      number="5"
      text='MICHI BISTRO "'
      className="Work-TitleIndvidual"
      numberClass="Work-NumberIndividual"
      textClass="Work-TextIndividual"
      active={currentComponent === 5}
    />
    <p>concept branding greek dine in & take away.</p>
    <p>JANUARY 2023</p>
    </div>
  );
};
export default Michi;
