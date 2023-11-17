import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ItemTitle.css";
function ItemTitle(props) {
  return (
    <li className={props.className} >
      <Link to={props.link} className={props.active ? 'active' : ''}>
        <p className={props.numberClass}>
          {props.number} <span className={props.textClass}>{props.text}</span>
        </p>
      </Link>
    </li>
  );
}

export default ItemTitle;
