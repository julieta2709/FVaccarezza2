import React, { useState } from "react";
import WorkData from "../../pages/WorkData.json";
import "../../styles/Work.css";
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

const WorkContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = WorkData.length;

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < dataLength - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div>
      <MainWork works={WorkData} />
      {currentIndex > 0 && <PrevButton onClick={handlePrevClick} />}
      <Frog data={WorkData[0]} />
      <Estudio data={WorkData[1]} />
      <Moreno data={WorkData[2]} />
      <Opame data={WorkData[3]} />
      <Michi data={WorkData[4]} />
      <Broke data={WorkData[5]} />
      <Kp data={WorkData[6]} />
      <Logofolio data={WorkData[7]} />
      <Misc data={WorkData[8]} />
      {currentIndex === dataLength - 1 && (
        <NextButton onClick={handleNextClick} />
      )}
    </div>
  );
};
export default WorkContainer;
