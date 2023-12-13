import React, { useContext, useState } from "react";
import { WorkDataContext } from "../../pages/Work";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import Broke from "./Broke";
import Estudio from "./Estudio";
import Frog from "./Frog";
import Kp from "./Kp";
import Logofolio from "./Logofolio";
import MainWork from "./MainWork";
import Michi from "./Michi";
import Misc from "./Misc";
import Moreno from "./Moreno";
import Opame from "./Opame";


// const LazyFrog = lazy(() => import("./Frog"));

const WorkContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const WorkData = useContext(WorkDataContext);
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

  const renderedComponents = componentNames.map((componentName, index) => (
    <React.Fragment key={index}>
      {index === currentIndex && currentIndex > 0 && (
        <Prev onClick={handlePrevClick} />
      )}
      <div
        key={index}
        className={index === currentIndex ? "component active" : "component"}
      >
        {componentName}
      </div>
      {index === currentIndex && currentIndex < componentNames.length - 1 && (
        <Next onClick={handleNextClick} />
      )}
    </React.Fragment>
  ));

  return (
    <div>
      <MainWork works={WorkData} />
      <div className="components-container">{renderedComponents}</div>
    </div>
  );
};
export default WorkContainer;

