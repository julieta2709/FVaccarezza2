import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Ellipse from "../../../assets/img/Moreno/Ellipse.png";
import Polygon from "../../../assets/img/Moreno/Polygon.png";
import Rectangle from "../../../assets/img/Moreno/Rectangle.png";
import "../Moreno/FuViews.css";

const FuViews = () => {
  const containerAnimation = { rotate: [0, 90, 180, 270] };
  const springConfig = { mass: 100, stiffness: 256, damping: 24 };
  const animationItemRectangle = {
    y: [-5, 8],
    x: [-5, 8],
  };
  const animationItemPolygon = {
    y: [5, -8],
    x: [5, -8],
  };
  const animationItemEllipse = {
    y: [5, -8],
    x: [-5, 8],
  };

  const [ref, inView] = useInView({
    threshold: 0.5, // Umbral de visibilidad, ajusta según tus necesidades
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
    <div ref={ref}>
      {animationActive && (
        <motion.ul
          className="FuImg-container"
          animate="rotate"
          variants={{
            rotate: containerAnimation,
          }}
          transition={{
            duration: 8,
            // ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
          }}
        >
          <motion.li
            className="Ellipse"
            variants={{
              rotate: animationItemEllipse,
            }}
            transition={{
              type: "spring",
              ...springConfig,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <img src={Ellipse} alt="Ellipse" />
          </motion.li>
          <motion.li
            className="Rectangle"
            variants={{
              rotate: animationItemRectangle,
            }}
            transition={{
              type: "spring",
              ...springConfig,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <img src={Rectangle} alt="Rectangle" />
          </motion.li>
          <motion.li
            className="Polygon"
            variants={{
              rotate: animationItemPolygon,
            }}
            transition={{
              type: "spring",
              ...springConfig,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <img src={Polygon} alt="Polygon" />
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
};

export default FuViews;
