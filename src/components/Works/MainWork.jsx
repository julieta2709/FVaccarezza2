import React from "react";

const MainWork = ({ works, selectWork }) => {
  return (
    <ul>
      {works.map((work) => (
        <li key={work.index} onClick={() => selectWork(work.index)}>
          {work.title}
        </li>
      ))}
    </ul>
  );
};
export default MainWork;
