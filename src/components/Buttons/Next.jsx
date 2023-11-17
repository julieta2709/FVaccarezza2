import React, { useState } from "react";
import ButtonNext from "../../assets/img/Buttons/ButtonNext";

const Next = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };
  return <ButtonNext onClick={handleClick} />;
};
export default Next;
