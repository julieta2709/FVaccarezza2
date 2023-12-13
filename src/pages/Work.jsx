import React, { createContext } from "react";
import WorkData from "../pages/WorkData.json";
import "../styles/Work.css";

const WorkDataContext = createContext();
const Work = ({ children }) => {
  return (
    <WorkDataContext.Provider value={WorkData}>
      {children}
    </WorkDataContext.Provider>
  );
};
export default Work;
