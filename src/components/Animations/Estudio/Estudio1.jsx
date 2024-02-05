import { motion } from "framer-motion";
import React from "react";
import sillon from "../../../assets/img/Estudio/sillon.png";
import sillonBanner from "../../../assets/img/Estudio/sillonBanner.png";
import sillonHeader from "../../../assets/img/Estudio/sillonHeader.png";
import "../Estudio/Estudio1.css";

const Estudio1 = () => {
  return (
    <div className="animated-imageEstudio1">
      <img className="sillonHeader" src={sillonHeader} alt="sillonHeader" />
      <motion.img
        className="sillon"
        src={sillon}
        alt="sillon"
        initial={{ scaleY: 1, originY: 1, borderRadius: "0rem" }}
        whileInView={{
          scaleY: 1.18,
          originY: 0,
          borderRadius: "0rem 0rem 0.7469rem 0.7469rem",
        }}
        transition={{ duration: 1, ease: [0.55, 0.59, 0, 1.01] }}
        viewport={{ once: true }}
      ></motion.img>
      <motion.div
        className="background-sillonBanner"
        initial={{ opacity: 0, scaleY: 0, originY: 1, height: 0 }}
        whileInView={{ opacity: 1, scaleY: 1, originY: 1, height: "100%" }}
        transition={{ duration: 1, ease: [0.55, 0.59, 0, 1.01] }}
        exit={{ opacity: 1, scaleY: 0, originY: 1 }}
        viewport={{ once: true }}
      />
      <motion.img
        className="sillonBanner"
        src={sillonBanner}
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 2, ease: [0.55, 0.59, 0, 1.01] }}
        viewport={{ once: true }}
      />
    </div>
  );
};
export default Estudio1;
