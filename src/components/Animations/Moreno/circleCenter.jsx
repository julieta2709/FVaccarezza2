import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import "../Moreno/circle.css";

const CircleCenter = ({ startAnimation }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      if (startAnimation) {
        while (true) {
          await controls.start({ opacity: 0 }); // Inicio de la animación, opacidad 0
          await new Promise((resolve) => setTimeout(resolve, 1000));

          await controls.start({ opacity: 0.5 }); // Opacidad intermedia 0.5
          await new Promise((resolve) => setTimeout(resolve, 1000));

          await controls.start({ opacity: 1 }); // Final de la animación, opacidad 1
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    };

    animate();
  }, [controls, startAnimation]);

  const springConfig = {
    type: "spring",
    damping: 24,
    stiffness: 256,
    mass: 1,
    delay: 500,
  };

  return (
    <div className="circle-itemContainer">
      <motion.div
        className="item2"
        initial={{ opacity: 1 }}
        animate={controls}
        transition={springConfig}
        // viewport={{ once: true }}
      ></motion.div>
    </div>
  );
};
export default CircleCenter;
