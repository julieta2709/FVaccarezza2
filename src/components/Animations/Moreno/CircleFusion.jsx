import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "../Moreno/circle.css";

const CircleFusion = () => {
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
  const diagonalX = 5 - x;
  const diagonalY = 5 - y;
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
          scale:0.5,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{ once: true }}
      ></motion.div>
    </AnimatePresence>
  );
};
export default CircleFusion;

