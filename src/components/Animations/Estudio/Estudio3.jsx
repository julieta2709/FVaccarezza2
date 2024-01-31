import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import sillonHeader from "../../../assets/img/Estudio//sillonHeader.png";
import sillon from "../../../assets/img/Estudio/sillon.png";
import sillonBanner from "../../../assets/img/Estudio/sillonBanner.png";
import "../Estudio/Estudio1.css";

const Estudio3 = () => {
  return (
    <div className="animated-imageEstudio1">
      <AnimatePresence>
        <motion.div
          key="background-sillonFinal"
          className="background-sillonFinal"
          initial={{ opacity: 1, height: 0 }}
          whileInView={{ opacity: 0, height: "100%" }}
          transition={{ duration: 2, ease: [0.55, 0.59, 0, 1.01] }}
          exit={{ opacity: 1, scaleY: 0, originY: 1 }}
          viewport={{ once: true }}
        />
        <motion.img
          key="sillon"
          className="sillon"
          src={sillon}
          alt="sillon"
          initial={{ opacity: 1, scaleY: 1.18, originY: 0.5 }}
          whileInView={{ opacity: 1, scaleY: 1, originY: 0.5 }}
          transition={{ duration: 2, ease: [0.55, 0.59, 0, 1.01], delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.img
          key="sillonHeader"
          className="sillonHeader"
          src={sillonHeader}
          alt="sillonHeader"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: [0.55, 0.59, 0, 1.01], delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.img
          key="sillonBanner"
          className="sillonBanner"
          src={sillonBanner}
          alt="sillonBanner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: [0.55, 0.59, 0, 1.01], delay: 0.5 }}
          viewport={{ once: true }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Estudio3;
