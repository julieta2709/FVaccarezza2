import React from "react";
import { Link } from "react-router-dom";
import BeButton from "../../assets/img/Buttons/BeButton";

const BeLink = ({ link }) => {
  return (
    <Link to={link} className="be-button">
      <BeButton />
    </Link>
   )
};
export default BeLink;