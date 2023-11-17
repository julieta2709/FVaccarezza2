import React from "react";
import ButtonNext from "../../assets/img/Buttons/ButtonNext";

const Next = ({ onClick }) => {
  
  const handleClick = () => {
        onClick();
  };
  return <ButtonNext onClick={handleClick} />;
};
export default Next;
