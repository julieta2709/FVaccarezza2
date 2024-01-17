import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Work.css";
import { WorkDataContext } from "./WorkContext";

const MainWork = () => {
  const works = useContext(WorkDataContext);
  const firstRow = works.slice(0, 4);
  const secondRow = works.slice(4, 9);
  const navigate = useNavigate();

  function easeInOutExpo(t) {
    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  const navigateToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 200;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
        easing: easeInOutExpo,
      });
    }
    navigate(`#${id}`);
  };

  return (
    <div className="Work-ListContainer">
      <ul className="Work-ListRow1">
        {firstRow.map((work) => (
          <li
            className="Work-ListItem"
            key={work.index}
            onClick={() => navigateToId(work.id)}
          >
            <Link to={`#${work.id}`} className="Work-ItemLink">
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
            onClick={() => navigateToId(work.id)}
          >
            <Link to={`#${work.id}`} className="Work-ItemLink">
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
