import React, { startTransition, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Work.css";
import { WorkDataContext } from "./WorkContext";

const MainWork = () => {
  const works = useContext(WorkDataContext);
  const firstRow = works.slice(0, 4);
  const secondRow = works.slice(4, 9);
  

  const navigate = useNavigate();

  const handleOnClick = (link) => {
    navigate(`/${link}/${index}`);
  };

  return (
    <div className="Work-ListContainer">
      <ul className="Work-ListRow1">
        {firstRow.map((work) => (
          <li
            className="Work-ListItem"
            key={work.index}
            onClick={() => startTransition(() => handleOnClick(work))}
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
            onClick={() => startTransition(() => handleOnClick(work))}
          >
            <Link to={work.link} className="Work-ItemLink">
              <span className="Work-ItemNumber">{work.index}</span>
              <span className="Work-ItemText">{work.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MainWork;
