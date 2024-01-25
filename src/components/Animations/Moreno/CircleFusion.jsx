import { motion } from "framer-motion";
import * as React from "react";
import "../Moreno/circle.css";

/* const container = {
  visible: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: {
    y: 0,
    x: 0,
    opacity: 1,
  },
  visible: (i) => {
    const distance = 10;
    const diagonalDistance = Math.sqrt(2) * distance;

    return {
      y: i === 0 || i === 3 ? -diagonalDistance : diagonalDistance,
      x: i === 0 || i === 1 ? -diagonalDistance : diagonalDistance,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 300,
      },
    };
  },
};
const CircleFusion = () => (
  <motion.ul
    className="Circlecontainer"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3].map((index) => (
      <motion.li key={index} className="item" variants={item} custom={index} />
    ))}
  </motion.ul>
);
export default CircleFusion;
 */

const CircleFusion = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "lightblue",
        position: "relative",
      }}
    >
      <Circle x={0} y={0} />
      <Circle x={200} y={0} />
      <Circle x={0} y={200} />
      <Circle x={200} y={200} />
    </div>
  );
};

const Circle = ({ x, y }) => {
  const diagonalX = 100 - x; // Calcular la coordenada x del centro menos la coordenada x del círculo
  const diagonalY = 100 - y;
  return (
    <motion.div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        borderRadius: "50%",
        position: "absolute",
        top: y,
        left: x,
      }}
      animate={{
        x: diagonalX,
        y: diagonalY,
      }}
      transition={{
        duration: 2,
      }}
    ></motion.div>
  );
};
export default CircleFusion;