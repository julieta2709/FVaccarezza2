import React from "react";
import ButtonBefore from "../../assets/img/Buttons/ButtonBefore";

const scrollToWork = (index) => {
  const section = document.getElementById(`section-${index - 1}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const Prev = ({index}) => {
  return <ButtonBefore onClick={() => scrollToWork(index)} />;
};
export default Prev;
