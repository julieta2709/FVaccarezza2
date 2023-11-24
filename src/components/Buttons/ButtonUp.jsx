import React from "react";
import { Link } from "react-router-dom";
import UpIcon from "../../assets/img/Buttons/upIcon";
import "../../styles/ButtonUp.css";

const ButtonUp = () => {
  return (
    <Link to="/">
      <div className="button-up" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <UpIcon /> 
      </div>
    </Link>
  );
};
export default ButtonUp;
