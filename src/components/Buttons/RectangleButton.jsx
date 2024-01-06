import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rectangle from "../../assets/img/Buttons/Rectangle";
import "../../styles/Photography.css";

const RectangleButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 300);
  };
  return (
    <Link to="/" className="rectangle">
      <div
        className={`Rectangle ${clicked ? "animate" : ""}`}
        onClick={handleClick}
      >
        <Rectangle />
      </div>
    </Link>
  );
};
export default RectangleButton;
