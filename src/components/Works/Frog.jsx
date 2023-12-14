import React, { useContext } from "react";
import "../../styles/Work.css";
import { WorkDataContext } from "./WorkContext";

const Frog = () => {
  const WorkData = useContext(WorkDataContext);
  /* if (!WorkData || WorkData.length === 0 || index < 0 || index >= WorkData.length) {
    console.log("No se recibieron datos en el componente Frog o el índice está fuera de rango.");
    return null;
  } */

  const { index, title, description, date } = WorkData[0];
  console.log("Datos recibidos en Frog");
  return (
    <div>
      <div className="Work-TitleIndvidual">
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <p className="WorkTitleDescription">{description}</p>
        <p className="WorkTitleDate">{date}</p>
      </div>
    </div>
  );
};

export default Frog;
