import { motion } from "framer-motion";
import React from "react";
import Ip1 from "../../../assets/img/Estudio/Ip1.png";
import Ip2 from "../../../assets/img/Estudio/Ip2.png";
import Ip3 from "../../../assets/img/Estudio/Ip3.png";
import Ip6 from "../../../assets/img/Estudio/Ip6.png";
import Ipad1Bg from "../../../assets/img/Estudio/Ipad1Bg.png";
import Ipad4 from "../../../assets/img/Estudio/Ipad4.png";
import Ipad5 from "../../../assets/img/Estudio/Ipad5.png";
import Ipad5Bg from "../../../assets/img/Estudio/Ipad5Bg.png";
import Rectangle1 from "../../../assets/img/Estudio/Rectangle1.png";
import "../Estudio/Ipad.css";

const AnimaIpad3 = () => {
  return (
    <div className="Ipad1-container">
      <img src={Ipad1Bg} alt="Ipad1Bg" className="Ipad1Bg" />
      <motion.img
        src={Ip1}
        className="Ipad1"
        alt="Ipad1"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -28 }}
        transition={{
          duration: 4,
          ease: [0.42, 0, 0.11, 0.99],
        }}
      />
      <motion.img
        src={Ip2}
        className="Ipad2"
        alt="Ipad2"
        initial={{ y: 0 }}
        animate={{ y: [0, -28, -90] }}
        transition={{
          duration: 8,
          ease: [0.42, 0, 0.11, 0.99],
          times: [0, 0.5, 1],
        }}
      />
      <motion.img
        src={Ip3}
        className="Ipad3"
        alt="Ipad3"
        initial={{ y: 93 }}
        animate={{ y: [93, 65, 0] }}
        transition={{
          duration: 8,
          ease: [0.42, 0, 0.11, 0.99],
          times: [0, 0.5, 1],
        }}
      />
      <motion.img
        src={Rectangle1}
        className="Rectangle"
        alt="Rectangle"
        initial={{ y: 0 }}
        animate={{ y: [10, 35] }}
        transition={{
          duration: 4,
          ease: [0.42, 0, 0.11, 0.99],
          delay: 4,
        }}
      />
      <motion.img
        src={Ipad4}
        className="Ipad4"
        alt="Ipad4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.42, 0, 0.11, 0.99],
          delay: 8,
        }}
      />
      <motion.img
        src={Ipad5}
        className="Ipad5b"
        alt="Ipad5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.42, 0, 0.11, 0.99],
          delay: 9,
        }}
      />
      <motion.img
        src={Ip6}
        className="Ip6"
        alt="Ip6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 3,
          ease: [0.42, 0, 0.11, 0.99],
          delay: 10,
        }}
      />
      <motion.img
        src={Ipad5Bg}
        className="Ipad5"
        alt="Ipad5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          ease: [0.42, 0, 0.11, 0.99],
          delay: 10,
        }}
      />
    </div>
  );
};

export default AnimaIpad3;
