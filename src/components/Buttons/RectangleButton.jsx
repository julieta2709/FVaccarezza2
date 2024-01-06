import React from "react";
import { Link } from "react-router-dom";
import Rectangle from "../../assets/img/Buttons/Rectangle";
import "../../styles/Photography.css";

const RectangleButton = () => {

  return (
    <Link to="/">
      <div className="Rectangle">
        <Rectangle />
      </div>
    </Link>
  );
};
export default RectangleButton;
