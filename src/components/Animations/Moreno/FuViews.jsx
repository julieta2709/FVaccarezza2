import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Ellipse from "../../../assets/img/Moreno/Ellipse.png";
import Polygon from "../../../assets/img/Moreno/Polygon.png";
import Rectangle from "../../../assets/img/Moreno/Rectangle.png";
import "../Moreno/FuViews.css";

const FuViews = () => {
  const springConfig = { mass: 200, stiffness: 256, damping: 24 };

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimationActive(true);
    } else {
      setAnimationActive(false);
    }
  }, [inView]);

  return (
    <div className="FuView-AnimationContainer" ref={ref}>
      {animationActive && (
        <div className="FuImg-container">
          <motion.img
            className="Ellipse"
            src={Ellipse}
            alt="Ellipse"
            initial={{ rotate: 0}}
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              type: "spring",
              ...springConfig,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
          <motion.img
            className="Rectangle"
            src={Rectangle}
            alt="Rectangle"
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              type: "spring",
              ...springConfig,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
          <motion.img
            className="Polygon"
            src={Polygon}
            alt="Polygon"
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              type: "spring",
              ...springConfig,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FuViews;
