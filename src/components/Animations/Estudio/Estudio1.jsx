import { motion } from "framer-motion";
import React from "react";
// import Estudiocel1V1 from "../../../assets/img/Estudio/Estudiocel1V1.png";
import sillon from "../../../assets/img/Estudio/sillon.png";
import sillonBanner from "../../../assets/img/Estudio/SillonBanner.png";
import sillonHeader from "../../../assets/img/Estudio/SillonHeader.png";
import "../Estudio1.css";

const Estudio1 = () => {
  return (
    <div>
      <div className="animated-imageEstudio1">
        <img className="sillonHeader" src={sillonHeader} alt="sillonHeader" />
        <img className="sillon" src={sillon} alt="sillon" />
        <motion.img
          className="sillonBanner"
          src={sillonBanner}
          alt="sillonBanner"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.55, 0.59, 0, 1.01] }}
        />
      </div>
      <motion.div
        className="sillon2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.55, 0.59, 0, 1.01] }}
      ></motion.div>
    </div>
  );
};
export default Estudio1;
