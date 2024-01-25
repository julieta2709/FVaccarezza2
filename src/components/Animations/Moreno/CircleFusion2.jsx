import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import "../../../styles/Moreno.css";

const CircleFusion = () => {
  const controls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const circleVariants = {
    hidden: { scale: 1, opacity: 1 },
    visible: { scale: 0, opacity: 0 },
    exit: { scale: 1, opacity: 1 },
    repeat: "infinity",
  };

  const circlePositions = [
    { cx: 10, cy: 10 },
    { cx: 30, cy: 10 },
    { cx: 10, cy: 30 },
    { cx: 30, cy: 30 },
  ];

  useEffect(() => {
    const animateCornerCircles = async () => {
      await Promise.all(
        controls.map((control, index) =>
          control.start({
            visible,
            duration: 3,
            delay: 0.5,
          })
        )
      );

      await Promise.all(
        controls.map((control, index) =>
          control.start({
            hidden,
            duration: 3,
          })
        )
      );
    };
    animateCornerCircles();
  }, [controls]);

  return (
    <svg width="35" height="35" className="circle-AnimaContainer">
      {controls.map((control, index) => (
        <motion.circle
          key={index}
          cx={circlePositions[index].cx}
          cy={circlePositions[index].cy}
          r="4"
          fill="#ffffff"
          animate={control}
          variants={circleVariants}
          initial="hidden"
          exit="exit"
          repeat="infinity"
        />
      ))}
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
