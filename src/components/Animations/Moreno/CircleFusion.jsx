import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "../Moreno/circle.css";

const CircleFusion = () => {
  const originalPositions = [
    { x: 0, y: 0 },
    { x: 38, y: 0 },
    { x: 0, y: 38 },
    { x: 38, y: 38},
  ];

  return (
    <div className="Circlecontainer">
      {originalPositions.map((position, index) => (
        <Circle key={index} x={position.x} y={position.y} />
      ))}
    </div>
  );
};

const Circle = ({ x, y }) => {
  const diagonalX = 19 - x;
  const diagonalY = 19 - y;

  const springConfig = {
    type: "spring",
    damping: 24,
    stiffness: 256,
    mass: 1,
  };

  return (
    <AnimatePresence>
      <motion.div
        className="item"
        style={{
          top: y,
          left: x,
        }}
        whileInView={{
          x: diagonalX,
          y: diagonalY,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 2,
          delay: 1,
          ...springConfig,
        }}
        viewport={{ once: true }}
      ></motion.div>
    </AnimatePresence>
  );
};
export default CircleFusion;
