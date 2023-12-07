import React from "react";
import asterisk from "../assets/img/icons/asterisk.svg";
import Next from "../components/Buttons/Next";
import Prev from "../components/Buttons/Prev";
import Broke from "../components/Works/Broke";
import Estudio from "../components/Works/Estudio";
import Frog from "../components/Works/Frog";
import Kp from "../components/Works/Kp";
import Logofolio from "../components/Works/Logofolio";
import Michi from "../components/Works/Michi";
import Misc from "../components/Works/Misc";
import Moreno from "../components/Works/Moreno";
import Opame from "../components/Works/Opame";
import "../styles/Work.css";
import WorkData from "./WorkData.json";

const Work = () => {
  const componentRefs = Array.from({ length: WorkData.length }, () =>
    React.createRef()
  );
  const [currentComponentIndex, setCurrentComponentIndex] = React.useState(0);

  const scrollToComponent = (index) => {
    componentRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextClick = () => {
    if (currentComponentIndex < WorkData.length - 1) {
      setCurrentComponentIndex(currentComponentIndex + 1);
      scrollToComponent(currentComponentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentComponentIndex > 0) {
      setCurrentComponentIndex(currentComponentIndex - 1);
      scrollToComponent(currentComponentIndex - 1);
    }
  };

  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asteriskk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <div>

        {currentComponentIndex === 0 && <Prev onClick={handlePrevClick} />}
        {/* Renderizar todos los componentes */}
        {WorkData.map((work, index) => (
          <div
            key={index}
            style={{
              display: index === currentComponentIndex ? "block" : "none",
            }}
            ref={componentRefs[index]}
          >
            {currentComponentIndex === 0 && <Frog work={work}/>}
            {currentComponentIndex === 1 && <Estudio work={work}/>}
            {currentComponentIndex === 2 && <Moreno work={work}/>}
            {currentComponentIndex === 3 && <Opame work={work}/>}
            {currentComponentIndex === 4 && <Michi work={work}/>}
            {currentComponentIndex === 5 && <Broke work={work}/>}
            {currentComponentIndex === 6 && <Kp work={work}/>}
            {currentComponentIndex === 7 && <Logofolio work={work}/>}
            {currentComponentIndex === 8 && <Misc work={work}/>}
          </div>
        ))}
        {currentComponentIndex === WorkData.length - 1 && <Next onClick={handleNextClick} />}
      </div>
    </div>
  );
};

export default Work;

/* const Work = () => {
  const [works, setWorks] = useState(WorkData);
  const [workSelected, setWorkSelected] = useState(null);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
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
      <div>
        {currentComponentIndex !== 0 && <Prev onClick={handlePrevClick} />}
        {componentNames.map((Component, index) => (
          <div
            key={index}
            style={{
              display: index === currentComponentIndex ? "block" : "none",
            }}
          >
            <Component work={WorkData[index]} />
          </div>
        ))}
        {currentComponentIndex !== componentNames.length - 1 && (
          <Next onClick={handleNextClick} />
        )}
      </div>  
    </div>
  );
};

export default Work; */
