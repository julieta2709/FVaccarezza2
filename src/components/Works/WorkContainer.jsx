import React, { useContext, useEffect, useState } from "react";
import asterisk from "../../assets/img/icons/asterisk.svg";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import MainWork from "./MainWork";
import { WorkDataContext } from "./WorkContext";

const WorkContainer = () => {
  const WorkData = useContext(WorkDataContext);

  if (!Array.isArray(WorkData) || WorkData.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentId = WorkData[currentIndex].id;
    const element = document.getElementById(currentId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentIndex, WorkData]);

 
 /*  const scrollToComponent = (id) => {
    if (componentRefs[id] && componentRefs[id].current) {
      componentRefs[id].current.scrollIntoView({ behavior: "smooth" });
    }
  }; */
  

  /* const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === WorkData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? WorkData.length - 1 : prevIndex - 1
    );
  };
  console.log(currentIndex); */

  

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? WorkData.length - 1 : prevIndex - 1
    );
  };


  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === WorkData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asterisk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <MainWork works={WorkData} />
      <div className="Work-componentTitle">
        <Prev className="prevNext" onClick={handlePrevClick} />
        <div
          id={WorkData[currentIndex].id}
        ></div>
        <Next onClick={handleNextClick} />
      </div>
    </div>
  );
};
export default WorkContainer;

/* useEffect(() => {
    if (componentRefs[currentIndex] && componentRefs[currentIndex].current) {
      componentRefs[currentIndex].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex, componentRefs]); */
{
  /*         {WorkData.map((work, index) => (
          <div key={index} id={work.id} ref={componentRefs[index]}>
            {work.id === "frog" && <Frog />}
            {work.id === "estudio" && <Estudio />}
          </div>
        ))} */
}
/* useEffect(() => {
    scrollToComponent(indexToIdMap[currentIndex]);
  }, [currentIndex]);

  const scrollToComponent = (index) => {
    if (componentRefs[index] && componentRefs[index].current) {
      componentRefs[index].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }; */
  /* const indexToIdMap = {};

  WorkData.forEach((item) => {
    indexToIdMap[WorkData.indexOf(item)] = item.id;
  }); */