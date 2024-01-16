import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";
import { useInterval } from "react-use";
import Frogcel3 from "../../assets/img/Frog/Frogcel3.png";
import Frogcel3V2 from "../../assets/img/Frog/Frogcel3V2.png";
import Frogcel3V3 from "../../assets/img/Frog/Frogcel3V3.png";
import Frogcel3V4 from "../../assets/img/Frog/Frogcel3V4.png";
import Frogcel3V5 from "../../assets/img/Frog/Frogcel3V5.png";
import Frogcel3V6 from "../../assets/img/Frog/Frogcel3V6.png";
import Frogcel3V7 from "../../assets/img/Frog/Frogcel3V7.png";
import Frogcel3V8 from "../../assets/img/Frog/Frogcel3V8.png";

const images = [
  Frogcel3,
  Frogcel3V2,
  Frogcel3V3,
  Frogcel3V4,
  Frogcel3V5,
  Frogcel3V6,
  Frogcel3V7,
  Frogcel3V8,
];

const animationData = [
  { duration: 1500, delay: 1500, timingFunction: "ease" },
  { duration: 300, delay: 800, timingFunction: "ease-out" },
  { duration: 300, delay: 1, timingFunction: "ease-in" },
  { duration: 1500, delay: 800, timingFunction: "ease" },
  {
    duration: 1500,
    delay: 400,
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
  },
  {
    duration: 500,
    delay: 300,
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
  },
  { duration: 300, delay: 1, timingFunction: "ease-in" },
  {
    duration: 1500,
    delay: 800,
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
  },
];

const ImageSequence = () => {
  const [index, setIndex] = useState(0);

  useInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 1500);
  
  const springs = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: {
      opacity: 1,
      transform: "scale(1)",
      config: {
        duration: animationData[index].duration,
        easing: animationData[index].timingFunction,
        delay: animationData[index].delay,
      },
    },
    loop: true,
    reset: true,
  });

  return (
    <animated.div style={{ ...springs, position: "absolute" }}>
      <div className="FrogCelanimation-container">
        <img
          src={images[index]}
          alt={`imagen-${index + 1}`}
          className="image-animation"
        />
      </div>
    </animated.div>
  );
};
export default ImageSequence;
