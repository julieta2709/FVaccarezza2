import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import ItemTitle from "./ItemTitle";
import WorkTitleData from "./WorkTitleData.json";

const Logofolio = () => {
  const { number } = useParams();
  const initialIndex = Number(number);
  const components = WorkTitleData;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [currentComponent, setCurrentComponent] = useState({});

  useEffect(() => {
    const foundComponent = components.find(
      (item) => item.index === currentIndex
    );
    setCurrentComponent(foundComponent || {});
  }, [components, currentIndex]);

  const handlePrevClick = () => {
    const prevIndex = currentIndex - 1;
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      const prevComponent =
        components.find((item) => item.index === prevIndex) || {};
      setCurrentComponent(prevComponent);
    }
  }

  const handleNextClick = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex <= components.length) {
      setCurrentIndex(nextIndex);
      const nextComponent =
        components.find((item) => item.index === nextIndex) || {};
      setCurrentComponent(nextComponent);
    }
  };
  /* const navigateTo = (index) => {
    navigate(`/work/${index}`);
  }; */
  const isFirstComponent = currentIndex === 0;
  const isLastComponent = currentIndex === components.length - 1;
  return (
    <div>
      <Prev onClick={handlePrevClick}  disabled={isFirstComponent}/>
      <ItemTitle
        number={currentComponent.index}
        text={currentComponent.title}
        className="Work-TitleIndvidual"
        numberClass="Work-NumberIndividual"
        textClass="Work-TextIndividual"
        active={true}
      />
      <Next onClick={handleNextClick} disabled={isLastComponent} />
      <p>{currentComponent.description}</p>
      <p>{currentComponent.date}</p>
    </div>
  );
};
export default Logofolio;
