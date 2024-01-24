import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import "../../../styles/Moreno.css";

const CircleFusion = () => {
  const centerCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const enlargedCircleVariants = {
    hidden: { scale: 1, opacity: 1 },
    visible: { scale: 2, fill: "#ffffff" },
  };

  const controls = useAnimation();

  useEffect(() => {
    const animateCircles = async () => {
      await controls.start({ x: 5, y: 5 });
      await controls.start("visible");
      controls.start("hidden");
    };

    animateCircles();
  }, [controls]);

  return (
    <svg width="10" height="10" className="circle-AnimaContainer">
      {/* Círculos pequeños en las esquinas */}
      <motion.circle
        cx="2"
        cy="2"
        r="2"
        fill="#ffffff"
        whileInView={controls}
        initial={{ x: 2, y: 2 }}
        viewport={{ once: true }}
      />
      <motion.circle
        cx="8"
        cy="2"
        r="2"
        fill="#ffffff"
        whileInView={controls}
        initial={{ x: 2, y: 2 }}
        viewport={{ once: true }}
      />
      <motion.circle
        cx="2"
        cy="8"
        r="2"
        fill="#ffffff"
        whileInView={controls}
        initial={{ x: 2, y: 2 }}
        viewport={{ once: true }}
      />
      <motion.circle
        cx="8"
        cy="8"
        r="2"
        fill="#ffffff"
        whileInView={controls}
        initial={{ x: 2, y: 2 }}
        viewport={{ once: true }}
      />

      {/* Círculo pequeño en el centro */}
      <motion.circle
        cx="5"
        cy="5"
        r="1"
        fill="#ffffff"
        variants={centerCircleVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      {/* Círculo grande que crece y cambia de color */}
      <motion.circle
        cx="5"
        cy="5"
        r="2"
        fill="#ffffff"
        variants={enlargedCircleVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 2 }}
        exit={{ opacity: 1, scale: 1, fill: "#808080" }}
        viewport={{ once: true }}
       />
    </svg>
  );
};

export default CircleFusion;
