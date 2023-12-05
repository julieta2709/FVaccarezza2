import React, { useEffect, useState } from "react";
import asterisk from "../assets/img/icons/asterisk.svg";
import MainWork from "../components/Works/MainWork";
import "../styles/Work.css";
import WorkData from "./WorkData.json";

const Work = () => {
  const data = WorkData;
  const [works, setWorks] = useState([]);
  const [workSelected, setWorkSelected] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setWorks(WorkData || []);
    }, 1000);
  }, []);

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
        {workSelected}
      </div>
    </div>
  );
};

export default Work;
