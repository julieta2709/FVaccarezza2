import { motion } from "framer-motion";
import React, { useState } from "react";
import "../Moreno/circle.css";
/* 
const CircleFusion = () => {
  return (
    <div className="Circlecontainer">
      <Circle x={0} y={0} />
      <Circle x={50} y={0} />
      <Circle x={0} y={50} />
      <Circle x={50} y={50} />
    </div>
  );
};

const Circle = ({ x, y }) => {
  const originalPosition = { x: x, y: y };
  const diagonalX = 25 - x;
  const diagonalY = 25 - y;

  return (
    <motion.div
      className="item"
      style={{
        top: y,
        left: x,
      }}
      animate={{
        x: [x, originalPosition.x],
        y: [y, originalPosition.y],
      }}
      transition={{
        duration: 2,
      }}
      exit={{ top: y, left: x }}
      whileInView={{
        x: diagonalX,
        y: diagonalY,
      }}
    ></motion.div>
  );
};

export default CircleFusion;
 */
const CircleFusion = () => {
  const originalPositions = [
    { x: 0, y: 0 },
    { x: 50, y: 0 },
    { x: 0, y: 50 },
    { x: 50, y: 50 },
  ];

  const [circlePositions, setCirclePositions] = useState(originalPositions);

  const resetCirclePositions = () => {
    setCirclePositions(originalPositions);
  };

  return (
    <div className="Circlecontainer">
      {circlePositions.map((position, index) => (
        <Circle
          key={index}
          x={position.x}
          y={position.y}
          resetCirclePositions={resetCirclePositions}
        />
      ))}
    </div>
  );
};

const Circle = ({ x, y, resetCirclePositions }) => {
  const diagonalX = 25 - x;
  const diagonalY = 25 - y;
  return (
    <motion.div
      className="item"
      style={{
        top: y,
        left: x,
      }}
      whileInView={{
        x: diagonalX,
        y: diagonalY,
      }}
      transition={{
        duration: 2,
      }}
      exit={{
        onComplete: resetCirclePositions,
      }}
      viewport={{ once: true }}
    ></motion.div>
  );
};
export default CircleFusion;
