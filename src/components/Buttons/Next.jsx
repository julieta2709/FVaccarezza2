import React, { useState } from "react";
import ButtonNext from "../../assets/img/Buttons/ButtonNext";

const Next = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button>
      <ButtonNext />
    </button>
  );
};
export default Next;
