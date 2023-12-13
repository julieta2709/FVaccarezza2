import React, { createContext, useEffect } from "react";
import WorkData from "../pages/WorkData.json";
import "../styles/Work.css";

export const WorkDataContext = createContext();

const WorkContext = ({ children }) => {

  useEffect(() => {
    console.log("Datos de WorkData en el contexto:", WorkData);
  }, [WorkData]);

  return (
    <WorkDataContext.Provider value={WorkData}>
      {children}
    </WorkDataContext.Provider>
  );
};

export default WorkContext;
