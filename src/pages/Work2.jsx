import React, { useState } from "react";
import asterisk from "../assets/img/icons/asterisk.svg";
import Prev from "../components/Buttons/Prev";
import Broke from "../components/Works/Broke";
import Estudio from "../components/Works/Estudio";
import Frog from "../components/Works/Frog";
import Kp from "../components/Works/Kp";
import Logofolio from "../components/Works/Logofolio";
import MainWork from "../components/Works/MainWork";
import Michi from "../components/Works/Michi";
import Misc from "../components/Works/Misc";
import Moreno from "../components/Works/Moreno";
import Opame from "../components/Works/Opame";
import "../styles/Work.css";
import WorkData from "./WorkData.json";

const Work2 = () => {
  const [works, setWorks] = useState(WorkData);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [workSelected, setWorkSelected] = useState(null);
  const componentNames = [
    Broke,
    Estudio,
    Frog,
    Opame,
    Moreno,
    Michi,
    Misc,
    Logofolio,
    Kp,
  ];
  const handleNextClick = () => {
    setCurrentComponentIndex((prevIndex) =>
      prevIndex < componentNames.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevClick = () => {
    setCurrentComponentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const renderCurrentComponent = () => {
    const CurrentComponent = componentNames[currentComponentIndex];
    return <CurrentComponent />;
  };

  const renderWorkComponent = (work) => {
    switch (work.index) {
      case 1:
        return <Frog key={work.index} work={work} />;
      case 2:
        return <Estudio key={work.index} work={work} />;
      case 3:
        return <Opame key={work.index} work={work} />;
      case 4:
        return <Moreno key={work.index} work={work} />;
      case 5:
        return <Michi key={work.index} work={work} />;
      case 6:
        return <Broke key={work.index} work={work} />;
      case 7:
        return <Kp key={work.index} work={work} />;
      case 8:
        return <Logofolio key={work.index} work={work} />;
      case 9:
        return <Misc key={work.index} work={work} />;
      default:
        return null;
    }
  };

  const selectWork = (workIndex) => {
    const work = works.find((work) => work.index === workIndex);
    setWorkSelected(work);
  };

  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asteriskk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <div>
        <MainWork works={works} selectWork={selectWork} />
      </div>
      {works.map((work) => (
        <div key={work.index}>{renderWorkComponent(work)}</div>
      ))} 
      <div>
        <div>{renderCurrentComponent()}</div>
        <div>
          <Prev onClick={handlePrevClick}>Prev</Prev>
          <Prev onClick={handleNextClick}>Next</Prev>
        </div>
      </div>
    </div>
  );
};

export default Work2;