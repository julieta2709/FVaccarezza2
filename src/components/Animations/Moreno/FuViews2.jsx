import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Ellipse from "../../../assets/img/Moreno/Ellipse.png";
import Polygon from "../../../assets/img/Moreno/Polygon.png";
import Rectangle from "../../../assets/img/Moreno/Rectangle.png";
import "../Moreno/FuViews.css";

const FuViews = () => {
  const containerAnimation = useAnimation();
  const itemAnimation = useAnimation();

  // Función para controlar la sincronización de las animaciones
  useEffect(() => {
    const handleRotation = async () => {
      await containerAnimation.start({
        rotate: [0, 90, 180, 270],
      });

      await itemAnimation.start({
        rotate: 90,
      });
    };

    handleRotation();
  }, [containerAnimation, itemAnimation]);
  
  return (
    <div>
      <motion.div
        className="FuImg-container"
        animate={containerAnimation}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        //   repeatDelay: 1,
        }}
        onAnimationComplete={() => handleRotation()}
      >
        <motion.img
          src={Ellipse}
          alt="Ellipse"
          className="Ellipse"
          animate={itemAnimation}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.img
          src={Rectangle}
          alt="Rectangle"
          className="Rectangle"
          animate={itemAnimation}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.img
          src={Polygon}
          alt="Polygon"
          className="Polygon"
          animate={itemAnimation}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};

export default FuViews;
