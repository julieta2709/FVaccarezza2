import React from "react";
import FVpic from "../assets/img/FVpic.png";
import ae from "../assets/img/icons/ae.svg";
import ai from "../assets/img/icons/ai.svg";
import cinema from "../assets/img/icons/cinema.svg";
import figma from "../assets/img/icons/figma.svg";
import lr from "../assets/img/icons/lr.svg";
import ps from "../assets/img/icons/ps.svg";
import "../styles/Aboutme.css";

const AboutMe = () => {
  return (
    <div className="Aboutme-container">
      <div className="Aboutme-maininfo">
        <div className="Aboutme-maininfoText">
          <p className="Aboutme-intro">HI, MY NAME IS</p>
          <h2 className="Aboutme-name">FEDERICO VACCAREZZA</h2>
          <p className="Aboutme-intro">AND I AM A GRAPHIC DESIGNER.</p>
        </div>
        <img
          className="Aboutme-maininfo-FVpic"
          src={FVpic}
          alt="Federico-Vaccarezza"
        />
      </div>
      <div className="Aboutme-1">
        <div className="Aboutme-titlecontainer">
          <p className="Aboutme-number">1</p>
          <p className="Aboutme-title">profile.</p>
        </div>
        <div className="Aboutme-description">
        <p className="Aboutme-subtitle">ABOUT ME</p>
        <p className="Aboutme-text">
          I am a freelance graphic designer from Tigre, Argentina. I have
          studied several years at the universidad of buenos aires (U.B.A.),
          from industrial to graphic design. Been always passionate about style
          in all it forms and started exploring this world many years ago.
        </p>
        </div>
      </div>
      <div className="Aboutme-2356container">
        <div className="Aboutme-32container">
          <div className="Aboutme-3">
            <div className="Aboutme-titlecontainer">
              <p className="Aboutme-number">3</p>
              <p className="Aboutme-title">showcase sites.</p>
            </div>
            <p className="Aboutme-subtitle">PORTFOLIO & SOCIAL MEDIA</p>
            <p className="Aboutme-subtitle2">DRIBBBLE</p>
            <p className="Aboutme-text">dribbble.com/vaccarezza</p>
            <p className="Aboutme-subtitle2">BEHANCE</p>
            <p className="Aboutme-text">behance.net/Vaccarezza</p>
            <p className="Aboutme-subtitle2">VSCO</p>
            <p className="Aboutme-text">vsco.co/fedevaccarezza/gallery</p>
          </div>
          <div className="Aboutme-5">
            <div className="Aboutme-titlecontainer">
              <p className="Aboutme-number">5</p>
              <p className="Aboutme-title">areas of expertise.</p>
            </div>
            <p className="Aboutme-subtitle">SKILLS</p>
            <p className="Aboutme-subtitle2">BRANDING</p>
            <p className="Aboutme-subtitle2">WEB DESIGN</p>
            <p className="Aboutme-subtitle2">UX/UI</p>
            <p className="Aboutme-subtitle2">PHOTOGRAPHY</p>
            <p className="Aboutme-subtitle2">3D</p>
          </div>
          <div className="Aboutme-contact">
            <p className="Aboutme-contactTittle">CONTACT ME.</p>
            <p className="Aboutme-contactNumber">54 11 6509 3091</p>
            <p className="Aboutme-contactMail">fvaccarezza@gmail.com</p>
          </div>
        </div>
        <div className="Aboutme-62container">
          <div className="Aboutme-6">
            <div className="Aboutme-titlecontainer">
              <p className="Aboutme-number">6</p>
              <p className="Aboutme-title">main abilities.</p>
            </div>
            <p className="Aboutme-text">
              <img src={ai} /> adobe illustrator
            </p>
            <p className="Aboutme-text">
              <img className="Aboutme-abilitieIcon" src={ps} /> adobe photoshop
            </p>
            <p className="Aboutme-text">
              <img className="Aboutme-abilitieIcon" src={lr} /> adobe lightroom
            </p>
            <p className="Aboutme-text">
              <img className="Aboutme-abilitieIcon" src={ae} /> adobe after
              effects
            </p>
            <p className="Aboutme-text">
              <img className="Aboutme-abilitieIcon" src={figma} /> figma
            </p>
            <p className="Aboutme-text">
              <img className="Aboutme-abilitieIcon" src={cinema} /> cinema 4d
            </p>
          </div>
          <div className="Aboutme-2">
            <div className="Aboutme-titlecontainer">
              <p className="Aboutme-number">2</p>
              <p className="Aboutme-title">languages.</p>
            </div>
            <p className="Aboutme-subtitle">LANGUAGES</p>
            <p className="Aboutme-subtitle2">
              ENGLISH <span className="Aboutme-text">(advanced)</span>
            </p>
            <p className="Aboutme-subtitle2">
              SPANISH <span className="Aboutme-text">(native)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
