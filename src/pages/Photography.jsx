import React from "react";
import RedCircle from "../assets/img/icons/RedCircle";
import RectangleButton from "../components/Buttons/RectangleButton";
import Photos from "../components/Photos";
import Contact from "../pages/Contact";
import "../styles/Photography.css";

const Photography = () => {
  return (
    <div className="Photography-container">
      <div className="Rectangle-container">
        <RectangleButton />
      </div>
      <div className="Photography-titleContainer">
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
      <div className="PhotosContainer">
        <Photos />
      </div>
      <Contact />
    </div>
  );
};
export default Photography;
