import React, { createContext } from "react";
import WorkData from "../../pages/WorkData.json";

export const WorkDataContext = createContext();

const WorkContext = ({ children }) => {

  return (
    <WorkDataContext.Provider value={WorkData}>
      {children}
    </WorkDataContext.Provider>
  );
};

export default WorkContext;
