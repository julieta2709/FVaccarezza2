import React, { useEffect, useState } from "react";
import asterisk from "../assets/img/icons/asterisk.svg";
import ItemWork from "../components/Works/ItemWork";
import MainWork from "../components/Works/MainWork";
import "../styles/Work.css";

const Work2 = () => {
  const [works, setWorks] = useState([]);
  const [workSelected, setWorkSelected] = useState(null);

  useEffect(() => {
    fetch("./components/Works/WorkTitleData.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos cargados:", data);
        setWorks(data.works);
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
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
      <div className="Work-ListRow1"></div>
      <MainWork works={works} selectWork={selectWork} />
      {workSelected && <ItemWork work={workSelected} />}
    </div>
  );
};

export default Work2;
