import React, { useState } from "react";
import WorkData from "../../pages/WorkData.json";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import Broke from "../Works/Broke";
import Estudio from "../Works/Estudio";
import Frog from "../Works/Frog";
import Kp from "../Works/Kp";
import Logofolio from "../Works/Logofolio";
import Michi from "../Works/Michi";
import Misc from "../Works/Misc";
import Moreno from "../Works/Moreno";
import Opame from "../Works/Opame";
import MainWork from "./MainWork";


const WorkContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const componentNames = [
    <Frog key="Frog" data={WorkData[0]} />,
    <Estudio key="Estudio" data={WorkData[1]} />,
    <Moreno key="Moreno" data={WorkData[2]} />,
    <Opame key="Opame" data={WorkData[3]} />,
    <Michi key="Michi" data={WorkData[4]} />,
    <Broke key="Broke" data={WorkData[5]} />,
    <Kp key="Kp" data={WorkData[6]} />,
    <Logofolio key="Logofolio" data={WorkData[7]} />,
    <Misc key="Misc" data={WorkData[8]} />,
  ];

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < componentNames.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div>
      <MainWork works={WorkData} />
      <Prev onClick={handlePrevClick} disabled={currentIndex === 0} />
      <div className="components-container">
        {componentNames.map((componentName, index) => (
          <div
            key={index}
            className={
              index === currentIndex ? "component active" : "component"
            }
          >
            {componentName}
          </div>
        ))}
      </div>
      <Next
        onClick={handleNextClick}
        disabled={currentIndex === componentNames.length - 1}
      />
    </div>
  );
};
export default WorkContainer;
