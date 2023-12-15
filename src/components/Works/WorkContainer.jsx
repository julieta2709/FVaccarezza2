import React, { useContext, useState } from "react";
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
import { WorkDataContext } from "./WorkContext";

// const LazyFrog = lazy(() => import("./Frog"));

const WorkContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const WorkData = useContext(WorkDataContext);
  const components = {
    Frog,
    Estudio,
    Moreno,
    Opame,
    Michi,
    Broke,
    Kp,
    Logofolio,
    Misc,
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < WorkData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  if (!WorkData || WorkData.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  const ComponentToRender = components[WorkData[currentIndex].componentName];

  const renderedComponents = WorkData.map((data, index) => (
    <React.Fragment key={index}>
      {index === currentIndex && currentIndex > 0 && (
        <Prev onClick={handlePrevClick} />
      )}
      <div
        key={index}
        className={index === currentIndex ? "component active" : "component"}
      >
        {index === currentIndex && <ComponentToRender data={data} />}
      </div>
      {index === currentIndex && currentIndex < WorkData.length - 1 && (
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

/*const componentNames = [
  <Frog key="Frog" data={WorkData[0]} />,
  <Estudio key="Estudio" data={WorkData[1]} />,
  <Moreno key="Moreno" data={WorkData[2]} />,
  <Opame key="Opame" data={WorkData[3]} />,
  <Michi key="Michi" data={WorkData[4]} />,
  <Broke key="Broke" data={WorkData[5]} />,
  <Kp key="Kp" data={WorkData[6]} />,
  <Logofolio key="Logofolio" data={WorkData[7]} />,
  <Misc key="Misc" data={WorkData[8]} />,
]; */
