import React from "react";
import WorkData from "../../pages/WorkData.json";

const WorkContainer = () => {
  return (
    <div>
      {WorkData.map((workItem, index) => (
        <div key={index}>
          {/* Aquí puedes utilizar la información de cada elemento del array */}
          <p>Index: {index}</p>
          <p>Title: {workItem.title}</p>
          {/* ... Otros datos de cada elemento */}
        </div>
      ))}
</div>
  )}
export default WorkContainer;