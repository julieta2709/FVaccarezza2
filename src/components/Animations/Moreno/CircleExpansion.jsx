import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "../Moreno/circle.css";

const CircleExpansion = () => {
  const originalPositions = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 0, y: 10 },
    { x: 10, y: 10 },
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
  const diagonalX = x - 5;
  const diagonalY = y - 5;
  return (
    <AnimatePresence>
      <motion.div
        className="item"
        style={{
          top: 5,
          left: 5,
        }}
        whileInView={{
          x: diagonalX,
          y: diagonalY,
          opacity: 1,
          scale:1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{ once: true }}
      ></motion.div>
    </AnimatePresence>
  );
};
export default CircleExpansion;