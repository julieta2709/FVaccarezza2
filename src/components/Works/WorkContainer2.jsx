import React, { useContext, useState } from "react";
import asterisk from "../../assets/img/icons/asterisk.svg";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import MainWork from "./MainWork";
import { WorkDataContext } from "./WorkContext";

// const LazyFrog = lazy(() => import("./Frog"));

const WorkContainer2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const WorkData = useContext(WorkDataContext);
  /* const componentByIndex = (index) => {
    switch (index) {
      case 0:
        return Frog;
      case 1:
        return Estudio;
      case 2:
        return Moreno;
      case 3:
        return Opame;
      case 4:
        return Michi;
      case 5:
        return Broke;
      case 6:
        return Kp;
      case 7:
        return Logofolio;
      case 8:
        return Misc;
      default:
        return null;
    }
  }; */

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
  /*   if (!WorkData || WorkData.length === 0) {
    return <div>No hay datos disponibles</div>;
  } */

  // const ComponentToRender = componentByIndex(currentIndex);

  // const renderedComponents = WorkData.map((data, index) => (
    <React.Fragment key={WorkData.index}>
      {WorkData.index === currentIndex && currentIndex > 0 && (
        <Prev onClick={handlePrevClick} />
      )}
      {/* <div
        key={index}
        className={index === currentIndex ? "active" : "component"}
      >
        {index === currentIndex && <ComponentToRender data={data} />}
      </div> */}
      {WorkData.index === currentIndex && currentIndex < WorkData.length - 1 && (
        <Next onClick={handleNextClick} />
      )}
    </React.Fragment>
  ;
  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asterisk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <MainWork works={WorkData} />
      {/* <div className="components-container">{renderedComponents}</div> */}
    </div>
  );
};
export default WorkContainer2;

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
