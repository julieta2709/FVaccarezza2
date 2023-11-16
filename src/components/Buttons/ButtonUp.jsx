import * as React from "react";
import { Link } from "react-router-dom";
import ButtonUpIcon from "../../assets/img/Buttons/ButtonUpIcon";
import "../../styles/ButtonUp.css";

const ButtonUp = () => (
  <Link to="/">
    <button
      className="ButtonUp-container"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ButtonUpIcon />
    </button>
  </Link>
);
export default ButtonUp;
