import React from "react";
import Ip1c from "../../../assets/img/Estudio/Ip1c.png";
import Ip2c from "../../../assets/img/Estudio/Ip2c.png";
import Ip3c from "../../../assets/img/Estudio/Ip3c.png";
import Ipad1Bg from "../../../assets/img/Estudio/Ipad1Bg.png";
import "../Estudio/Ipad.css";

const AnimaIpad3 = () => {
  return (
    <div className="Ipad1-container">
      <img src={Ipad1Bg} alt="Ipad1Bg" className="Ipad1Bg" />
      {/* <div className="Ip1-container"> */}
        <img src={Ip1c} className="Ipad1" />
        <img src={Ip2c} className="Ipad2" alt="Ipad2" />
        <img src={Ip3c} className="Ipad3" alt="Ipad3" />
      {/* </div> */}
    </div>
  );
};

export default AnimaIpad3;
