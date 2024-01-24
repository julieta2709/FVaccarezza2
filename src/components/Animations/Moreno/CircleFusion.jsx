import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import "../../../styles/Moreno.css";

const CircleFusion = () => {
  const controls = useAnimation();

  const circleTopLeftVariants = {
    hidden: { x: 0, y: 0, scale: 1, opacity: 1 },
    visible: { x: 5, y: 5, scale: 0, opacity: 0 },
    exit: { x: 0, y: 0, scale: 1, opacity: 1 },
    repeat: "infinity",
  };
  const circleTopRightVariants = {
    hidden: { x: 20, y: 0, scale: 1, opacity: 1 },
    visible: { x: 5, y: 5, scale: 0, opacity: 0 },
    exit: { x: 20, y: 0, scale: 1, opacity: 1 },
    repeat: "infinity",
  };

  const circleBottomLeftVariants = {
    hidden: { x: 0, y: 20, scale: 1, opacity: 1 },
    visible: { x: 5, y: 5, scale: 0, opacity: 0 },
    exit: { x: 0, y: 20, scale: 1, opacity: 1 },
    repeat: "infinity",
  };

  const circleBottomRightVariants = {
    hidden: { x: 20, y: 20, scale: 1, opacity: 1 },
    visible: { x: 5, y: 5, scale: 0, opacity: 0 },
    exit: { x: 20, y: 20, scale: 1, opacity: 1 },
    repeat: "infinity",
  };

  useEffect(() => {
    const animateCornerCircles = async () => {
      // Mueve los círculos de las esquinas hacia el centro
      await controls.start("visible", { duration: 3 });

      // Reinicia la animación de los círculos de las esquinas volviendo al estado inicial
      controls.start("hidden", { duration: 3 });
    };

    animateCornerCircles();
  }, [controls]);

  return (
    <svg width="20" height="20" className="circle-AnimaContainer">
      {/* Círculos pequeños en las esquinas */}
      <motion.circle
        cx="2"
        cy="2"
        r="2"
        fill="#ffffff"
        animate={controls}
        variants={circleTopLeftVariants}
        initial="hidden"
        exit="exit"
        repeat="infinity"
      />
      <motion.circle
        cx="8"
        cy="2"
        r="2"
        fill="#ffffff"
        animate={controls}
        variants={circleTopRightVariants}
        initial="hidden"
        exit="exit"
        repeat="infinity"
      />
      <motion.circle
        cx="2"
        cy="8"
        r="2"
        fill="#ffffff"
        animate={controls}
        variants={circleBottomLeftVariants}
        initial="hidden"
        exit="exit"
        repeat="infinity"
      />
      <motion.circle
        cx="8"
        cy="8"
        r="2"
        fill="#ffffff"
        animate={controls}
        variants={circleBottomRightVariants}
        initial="hidden"
        exit="exit"
        repeat="infinity"
      />
    </svg>
  );
};

export default CircleFusion;

/*   const centerCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const enlargedCircleVariants = {
    hidden: { scale: 1, opacity: 1 },
    visible: { scale: 2, fill: "#ffffff" },
  }; */

{
  /* Círculo pequeño en el centro */
}
{
  /* <motion.circle
        cx="5"
        cy="5"
        r="1"
        fill="#ffffff"
        variants={centerCircleVariants}
        initial="hidden"
        animate={controls}
        onAnimationComplete={animateCentralCircle}
        transition={{ duration: 1 }}
      /> */
}

{
  /* Círculo grande que crece y cambia de color */
}
{
  /* <motion.circle
        cx="5"
        cy="5"
        r="2"
        fill="#ffffff"
        variants={enlargedCircleVariants}
        initial="hidden"
        animate={controls}
        exit={{ opacity: 0, scale: 1, fill: "#808080" }}
        transition={{ duration: 2 }}
      /> */
}
const animateCentralCircle = async () => {
  // Círculo central se agranda
  // await controls.start("visible");
  // Espera un momento antes de iniciar la siguiente animación
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // Círculo grande cambia de color a gris, se achica y desaparece
  // await controls.start({ fill: "#808080", scale: 1, opacity: 0 });
  // Espera un momento antes de iniciar la siguiente animación
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // Reinicia la animación del círculo central volviendo al estado inicial
  // controls.start(centerCircleVariants.hidden);
};
