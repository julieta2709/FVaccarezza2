import React from "react";
import PhotoBg2 from "../assets/img/BG/PhotoBg2.svg";
import PhotoBg3 from "../assets/img/BG/PhotoBg3.svg";
import RedCircle from "../assets/img/icons/RedCircle.svg";
import RectangleButton from "../components/Buttons/RectangleButton";
import Photos from "../components/Photos";
import Contact from "../pages/Contact";
import "../styles/Photography.css";

const Photography = () => {
  return (
    <div className="Photography-container">
      <img src={PhotoBg2} alt="PhotoBg2" className="PhotoBg2" />
      <img src={PhotoBg3} alt="PhotoBg3" className="PhotoBg3" />
      <div className="Rectangle-container">
        <RectangleButton />
      </div>
      <div className="titleAndBg-container">
        <div className="Photography-titleContainer">
          <div className="Photography-mainTitle">
            <h2 className="Photography-mainText1">PHOTO ~ </h2>
            <div className="RedCircle-container">
              <img src={RedCircle} alt="RedCircle" className="RedCircle" />
              <img src={RedCircle} alt="RedCircle" className="RedCircle" />
              <img src={RedCircle} alt="RedCircle" className="RedCircle" />
            </div>
            <h2 className="Photography-mainText2">GRAPHY.</h2>
          </div>
        </div>
        <div className="PhotosContainer">
          <Photos />
        </div>
      </div>
      <div className="contactBg">
        <Contact />
      </div>
    </div>
  );
};
export default Photography;
