import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import ItemTitle from "./ItemTitle";
import WorkTitleData from "./WorkTitleData.json";

const Moreno = () => {
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
    const prevComponent =
      components.find((item) => item.index === prevIndex) || {};
    setCurrentComponent(prevComponent);
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = currentIndex + 1;
    const nextComponent =
      components.find((item) => item.index === nextIndex) || {};
    setCurrentComponent(nextComponent);
    setCurrentIndex(nextIndex);
  };
  /* const navigateTo = (index) => {
    navigate(`/work/${index}`);
  }; */

  return (
    <div>
      <Prev onClick={handlePrevClick} />
      <ItemTitle
        number={currentComponent.index}
        text={currentComponent.title}
        className="Work-TitleIndvidual"
        numberClass="Work-NumberIndividual"
        textClass="Work-TextIndividual"
        active={true}
      />
     <Next onClick={handleNextClick} />
      <p>{currentComponent.description}</p>
      <p>{currentComponent.date}</p>
    </div>
  );
};
export default Moreno;
