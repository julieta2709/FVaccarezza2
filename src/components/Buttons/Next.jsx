import React from "react";
import ButtonNext from "../../assets/img/Buttons/ButtonBefore";

const scrollToWork = (index) => {
  const section = document.getElementById(`section-${index + 1}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const Next = ({index}) => {
  return <ButtonNext onClick={() => scrollToWork(index)} />;
};
export default Next;
