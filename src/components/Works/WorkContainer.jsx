import React, { useContext, useEffect, useState } from "react";
import { WorkDataContext } from "../../pages/Work";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import Frog from "./Frog";
import MainWork from "./MainWork";

// const LazyFrog = lazy(() => import("./Frog"));

const WorkContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const  WorkData  = useContext(WorkDataContext);
  useEffect(() => {
    console.log("Datos en WorkContainer:", WorkData);
  }, [WorkData]);

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
  const renderedComponents = WorkData.map((data, index) => (
    <React.Fragment key={index}>
      {index === currentIndex && currentIndex > 0 && (
        <Prev onClick={handlePrevClick} />
      )}
      <div
        key={index}
        className={index === currentIndex ? "component active" : "component"}
      >
        {index === currentIndex && <Frog data={data} />}
      </div>
      {index === currentIndex && currentIndex < WorkData.length - 1 && (
        <Next onClick={handleNextClick} />
      )}
    </React.Fragment>
  ));
  useEffect(() => {
    console.log("Datos recibidos en WorkContainer:", WorkData);
  }, [WorkData]);
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
