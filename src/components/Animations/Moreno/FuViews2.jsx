import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Ellipse from "../../../assets/img/Moreno/Ellipse.png";
import Polygon from "../../../assets/img/Moreno/Polygon.png";
import Rectangle from "../../../assets/img/Moreno/Rectangle.png";
import "../Moreno/FuViews.css";

const FuViews = () => {
  // const containerAnimation = { rotate: [0, 90, 180, 270] };
  const springConfig = { mass: 200, stiffness: 256, damping: 24 };
  const animationItemRectangle = {
    y: [-2, 3],
    x: [-2, 3],
    rotate: 90,
  };
  const animationItemPolygon = {
    y: [2, -3],
    x: [2, -3],
    rotate: 90,
  };
  const animationItemEllipse = {
    y: [2, -3],
    x: [-2, 3],
    rotate: 90,
  };

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
        <motion.ul
          className="FuImg-container"
     /*      animate="rotate"
          variants={{
            rotate: containerAnimation,
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
          }} */
        >
          <motion.li
            className="Ellipse"
            variants={{
              rotate: animationItemEllipse,
            }}
            transition={{
            /*   ease: "easeInOut",
              duration: 8, */
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
          /*     ease: "easeInOut",
              duration: 8, */
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
          /*     ease: "easeInOut",
              duration: 8, */
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
