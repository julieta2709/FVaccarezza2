import React from "react";
import { useParams } from "react-router-dom";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import ItemTitle from "./ItemTitle";
import WorkTitleData from "./WorkTitleData.json";

const Estudio = () => {
  const { number } = useParams();
  const currentIndex = Number(number);
  const components = WorkTitleData;
  const currentComponent = components.find(
    (item) => item.index === currentIndex
  );

  const prevComponent =
    components.find((item) => item.index === currentIndex - 1) || {};
  const nextComponent =
    components.find((item) => item.index === currentIndex + 1) || {};
  /* const navigateTo = (index) => {
    navigate(`/work/${index}`);
  }; */

  return (
    <div>
      {prevComponent && prevComponent.index && <Prev />}
      <ItemTitle
        number={currentComponent.index}
        text={currentComponent.title}
        className="Work-TitleIndvidual"
        numberClass="Work-NumberIndividual"
        textClass="Work-TextIndividual"
        active={true}
      />
      {nextComponent && nextComponent.index && <Next />}
      <p>{currentComponent.description}</p>
      <p>{currentComponent.date}</p>
    </div>
  );
};
export default Estudio;
