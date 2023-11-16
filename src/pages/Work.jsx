import React from "react";
import asterisk from "../assets/img/icons/asterisk.svg";
import ItemTitle from "../components/Works/ItemTitle";
import "../styles/Work.css";
const Work = () => {
  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asteriskk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <ul className="Work-ListContainer">
        <div className="Work-ListRow1">
          <ItemTitle
            number="1"
            text="FROG BAZAR."
            link="/Frog"
            className="Work-ListItem"
            numberClass="Work-ItemNumber"
            textClass="Work-ItemText"
          />
          <ItemTitle
            number="2"
            text="ESTUDIO 32 -"
            link="/Estudio"
            className="Work-ListItem"
            numberClass="Work-ItemNumber"
            textClass="Work-ItemText"
          />
          <ItemTitle
            number="3"
            text="N.MORENO/PEDRAZA"
            link="/Moreno"
            className="Work-ListItem"
            numberClass="Work-ItemNumber"
            textClass="Work-ItemText"
          />
          <ItemTitle
            number="4"
            text="OPAME COLLECTIVE ="
            link="/Opame"
            className="Work-ListItem"
            numberClass="Work-ItemNumber"
            textClass="Work-ItemText"
          />
        </div>
        <div className="Work-ListRow2">
          <ItemTitle
            number="5"
            text='MICHI BISTRO "'
            link="/Michi"
            className="Work-ListItem"
            numberClass="Work-ItemNumber"
            textClass="Work-ItemText"
          />
          <ItemTitle
            number="6"
            text="BROKE MUSIC _"
            link="/Broke"
            className="Work-ListItem"
            numberClass="Work-ItemNumber"
            textClass="Work-ItemText"
          />
          <ItemTitle
            number="7"
            text="KP INTERIOR DESIGN /"
            link="/Kp"
            className="Work-ListItem"
            numberClass="Work-ItemNumber"
            textClass="Work-ItemText"
          />
          <ItemTitle
            number="8"
            text="LOGOFOLIO }"
            link="/Logofolio"
            className="Work-ListItem"
            numberClass="Work-ItemNumber"
            textClass="Work-ItemText"
          />
          <ItemTitle
            number="9"
            text="3D MISC. ART *"
            link="/Misc"
            className="Work-ListItem"
            numberClass="Work-ItemNumber"
            textClass="Work-ItemText"
          />
        </div>
      </ul>
    </div>
  );
};

export default Work;
