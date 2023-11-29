import React from "react";
import BehanceLink from "../assets/img/icons/BehanceLink.svg";
import Dribbble from "../assets/img/icons/Dribbble.svg";
import "../styles/Contact.css";
const Contact = ({contactRef}) => {
  return (
    <div ref={contactRef} className="Contact-container">
      <div className="Contact-mainContainer">
        <h3 className="Contact-main">CONTACT ME, LET'S TALK.</h3>
        <p className="Contact-number">54 11 6509 3091</p>
        <p className="Contact-mail">fvaccarezza@gmail.com</p>
        <div className="Contact-LinkContainer">
          <img src={BehanceLink} alt="Behance" />
          <img src={Dribbble} alt="Dribbble" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
