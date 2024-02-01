import React, { useContext } from "react";
import WorkLeft from "../../assets/img/BG/WorkLeft.svg";
import WorkRightBG from "../../assets/img/BG/WorkRightBG.svg";
import asterisk from "../../assets/img/icons/asterisk.svg";
import "../../styles/Work.css";
import MainWork from "./MainWork";
import { WorkDataContext } from "./WorkContext";

const WorkContainer = () => {
  const WorkData = useContext(WorkDataContext);

  return (
    <div className="Work-container">
      <img src={WorkRightBG} alt="WorkRightBG" className="WorkRightBG" />
      <img src={WorkLeft} alt="WorkLeft" className="WorkLeft" />
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asterisk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
        <MainWork works={WorkData} />
    </div>
  );
};

export default WorkContainer;