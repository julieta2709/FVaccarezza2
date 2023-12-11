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
      <Frog
        data={WorkData[currentIndex]}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <Estudio
        data={WorkData[currentIndex]}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <Moreno
        data={WorkData[currentIndex]}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <Opame
        data={WorkData[currentIndex]}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <Michi
        data={WorkData[currentIndex]}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <Broke
        data={WorkData[currentIndex]}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <Kp
        data={WorkData[currentIndex]}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <Logofolio
        data={WorkData[currentIndex]}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <Misc
        data={WorkData[currentIndex]}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </div>
  );
};
export default WorkContainer;
