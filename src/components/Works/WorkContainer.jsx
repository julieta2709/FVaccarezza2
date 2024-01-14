import React, { useContext } from "react";
import asterisk from "../../assets/img/icons/asterisk.svg";
import "../../styles/Work.css";
import MainWork from "./MainWork";
import { WorkDataContext } from "./WorkContext";

const WorkContainer = () => {
  const WorkData = useContext(WorkDataContext);

  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asterisk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <div>
        <MainWork works={WorkData} />
      </div>
    </div>
  );
};

export default WorkContainer;