import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Work.css";
import Broke from "./Broke";

const MainWork = ({ works, selectWork }) => {
  const firstRow = works.slice(0, 4);
  const secondRow = works.slice(4, 9);

  return (
    <div className="Work-ListContainer">
      <ul className="Work-ListRow1">
        {firstRow.map((work) => (
          <li
            className="Work-ListItem"
            key={work.index}
            onClick={() => selectWork(work.index)}
          >
            <Link to={work.link} className="Work-ItemLink">
              <span className="Work-ItemNumber">{work.index}</span>
              <span className="Work-ItemText">{work.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="Work-ListRow2">
        {secondRow.map((work) => (
          <li
            className="Work-ListItem"
            key={work.index}
            onClick={() => selectWork(work.index)}
          >
            <Link to={work.link} className="Work-ItemLink">
              <span className="Work-ItemNumber">{work.index}</span>
              <span className="Work-ItemText">{work.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {works.map((work) => (
          <Broke key={work.index} work={work} selectWork={selectWork} />
        ))}
      </div>
    </div>
  );
};
export default MainWork;