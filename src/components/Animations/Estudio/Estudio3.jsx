import { motion } from "framer-motion";
import React from "react";
import sillon from "../../../assets/img/Estudio/sillon.png";
import "../Estudio1.css";
const Estudio3 = () => {
  return (
    <div>
      <motion.div
        className="background-sillonFinal"
        initial={{ opacity: 0, scaleY: 0, originY: 1 }}
        whileInView={{ opacity: 1, scaleY: 1, originY: 1 }}
        transition={{ duration: 1, ease: [0.55, 0.59, 0, 1.01] }}
        exit={{ opacity: 1, scaleY: 0, originY: 1 }}
        viewport={{ once: true }}
      />
      <motion.img
        className="sillon"
        src={sillon}
        alt="sillon"
        initial={{ opacity: 0, scaleY: 1.18, originY: 1 }}
        whileInView={{ opacity: 1, scaleY: 1, originY: 0 }}
        transition={{ duration: 1, ease: [0.55, 0.59, 0, 1.01] }}
        viewport={{ once: true }}
      ></motion.img>
    </div>
  );
};

export default Estudio3;
