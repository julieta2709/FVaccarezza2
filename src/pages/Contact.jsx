import React from "react";
import bgContactizq from "../assets/img/BG/bgContactizq.svg";
import BehanceLink from "../assets/img/icons/BehanceLink.svg";
import Dribbble from "../assets/img/icons/Dribbble.svg";
import "../styles/Contact.css";

const Contact = () => {
  return (
      <div className="Contact-container">
        <img src={bgContactizq} alt="ContactBg" className="contactBgleft" />
        <div className="Contact-mainContainer">
          <h3 className="Contact-main">CONTACT ME, LET’S TALK.</h3>
          <p className="Contact-number">54 11 6509 3091</p>
          <p className="Contact-mail">fvaccarezza@gmail.com</p>
          <div className="Contact-LinkContainer">
            <a
              href="https://behance.net/Vaccarezza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={BehanceLink} alt="Behance" />
            </a>
            <a
              href="https://dribbble.com/vaccarezza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Dribbble} alt="Dribbble" />
            </a>
          </div>
        </div>
      </div>
  );
};
export default Contact;
