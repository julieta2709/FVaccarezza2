import React from "react";
import "../../styles/Work.css";

const Frog = ({ props }) => {
  if (!data) {
    console.log("No se recibieron datos en el componente Frog.");
    return null;
  }

  const { index, title, description, date } = props.data;
  console.log("Datos recibidos en Frog:", data);


  return (
    <div>
      <div className="Work-TitleIndvidual" onClick={() => selectWork(index)}>
        <span className="Work-NumberIndividual">{index}</span>
        <span className="Work-TextIndividual">{title}</span>
        <p className="WorkTitleDescription">{description}</p>
        <p className="WorkTitleDate">{date}</p>
      </div>
    </div>
  );
};

export default Frog;
