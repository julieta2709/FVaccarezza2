import { motion } from "framer-motion";
import React from "react";
import "../Moreno/circle.css";

const CircleExpansion = () => {
  const originalPositions = [
    { x: 0, y: 0 },
    { x: 53, y: 0 },
    { x: 0, y: 53 },
    { x: 53, y: 53 },
  ];

  return (
    <div className="circle-itemContainer">
      {originalPositions.map((position, index) => (
        <Circle key={index} x={position.x} y={position.y} />
      ))}
    </div>
  );
};

const Circle = ({ x, y }) => {
  const diagonalX = x - 26.5;
  const diagonalY = y - 26.5;

  const springConfig = {
    type: "spring",
    damping: 24,
    stiffness: 256,
    mass: 1,
  };

  return (
    <div className="circle-itemContainer">
      <motion.div
        className="item"
        /* style={{
          top: 10,
          left: 10,
        }} */
        whileInView={{
          x: diagonalX,
          y: diagonalY,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
          delay: 1,
          ...springConfig,
        }}
        viewport={{ once: true }}
      ></motion.div>
    </div>
  );
};
export default CircleExpansion;
