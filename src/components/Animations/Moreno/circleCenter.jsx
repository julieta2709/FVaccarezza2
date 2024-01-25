import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import "../Moreno/circle.css";

const CircleCenter = ({ startAnimation }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      if (startAnimation) {
        while (true) {
          await controls.start({
            opacity: 0,
            transition: { duration: 2, ease: "easeInOut" },
          });
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await controls.start({
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" },
          });
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    };

    animate();
  }, [controls, startAnimation]);

  return (
    <div className="Circlecontainer">
      <motion.div
        className="item2"
        initial={{ opacity: 1 }}
        animate={controls}
        // viewport={{ once: true }}
      ></motion.div>
    </div>
  );
};
export default CircleCenter;
