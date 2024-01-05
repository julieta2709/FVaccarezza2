import React from "react";
import Rectangle from "../assets/img/Buttons/Rectangle";
import RedCircle from "../assets/img/icons/RedCircle";
import "../styles/Photography.css";

const Photography = () => {
  return (
    <div className="Photography-container">
      <Rectangle />
      <div className="Photography-mainTitle">
        <h2 className="Photography-mainText1">PHOTO ~ </h2>
        <div className="RedCircle-container">
          <RedCircle className="RedCircle" />
          <RedCircle className="RedCircle" />
          <RedCircle className="RedCircle" />
        </div>
        <h2 className="Photography-mainText2">GRAPHY.</h2>
      </div>
    </div>
  );
};
export default Photography;
