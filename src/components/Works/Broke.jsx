import React from "react";
import ItemTitle from "./ItemTitle";
const Broke = () => {
  return (
    <div>
    <ItemTitle
      number="6"
      text="BROKE MUSIC _"
      className="Work-TitleIndvidual"
      numberClass="Work-NumberIndividual"
      textClass="Work-TextIndividual"
      active={currentComponent === 6}
    />
    <p>broke is a royalty free music label. identity rebrand, shop UI/UX.</p>
    <p>JANUARY 2023</p>
    </div>
  );
};
export default Broke;
