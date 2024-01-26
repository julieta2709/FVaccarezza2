import { motion } from "framer-motion";
import React from "react";
import "../Moreno/circle.css";

const CircleCenter = () => {
  /*  const springConfig = {
    type: "spring",
    damping: 24,
    stiffness: 256,
    mass: 1,
  }; */
  const opacity = [1, 0, 0.5, 1, 0];
  return (
    <div className="circle-itemContainer">
      <motion.div
        className="item2"
        animate={{ opacity }}
        transition={{
          ease: "easeInOut",
          duration: 7,
          times:[0, 0.5, 0.8, 0.9, 1],
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
        }}
        // viewport={{ once: true }}
      ></motion.div>
    </div>
  );
};
export default CircleCenter;
