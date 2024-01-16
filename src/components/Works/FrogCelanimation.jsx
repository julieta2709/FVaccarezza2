import { animated, config, useTransition } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import Frogcel3 from "../../assets/img/Frog/Frogcel3.png";
import Frogcel3V2 from "../../assets/img/Frog/Frogcel3V2.png";
import Frogcel3V3 from "../../assets/img/Frog/Frogcel3V3.png";
import Frogcel3V4 from "../../assets/img/Frog/Frogcel3V4.png";
import Frogcel3V5 from "../../assets/img/Frog/Frogcel3V5.png";
import Frogcel3V6 from "../../assets/img/Frog/Frogcel3V6.png";
import Frogcel3V7 from "../../assets/img/Frog/Frogcel3V7.png";
import Frogcel3V8 from "../../assets/img/Frog/Frogcel3V8.png";
import "../../styles/Frog.css";

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

const transitionConfigs = [
  {
    delay: 800,
    variant: "Default",
    animate: "dissolve",
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
    duration: 1500,
  },
  {
    delay: 1500,
    variant: "Variant2",
    animate: "smart",
    spring: { mass: 1, stiffness: 28.44, damping: 8 },
    duration: 1500,
  },
  {
    delay: 800,
    variant: "Variant3",
    animate: "smart",
    timingFunction: "ease-out",
    duration: 300,
  },
  {
    delay: 1,
    variant: "Variant4",
    animate: "smart",
    timingFunction: "ease-in",
    duration: 300,
  },
  {
    delay: 800,
    variant: "Variant5",
    animate: "dissolve",
    spring: { mass: 1, stiffness: 28.44, damping: 8 },
    duration: 1500,
  },
  {
    delay: 400,
    variant: "Variant6",
    animate: "smart",
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
    duration: 1500,
  },
  {
    delay: 500,
    variant: "Variant7",
    animate: "smart",
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
    duration: 300,
  },
  {
    delay: 1,
    variant: "Variant8",
    animate: "smart",
    timingFunction: "ease-in",
    duration: 300,
  },
];

const ImageSequence = () => {
  const [index, setIndex] = useState(0);
  const currentConfig = transitionConfigs[index];
  const totalDelay = currentConfig.delay + (index > 0 ? 2000 : 0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, totalDelay);

    return () => clearTimeout(timeoutId);
  }, [index, totalDelay]);

  const transition = useTransition(index, {
    from: {
      opacity: 0,
      transform:
        index === 1
          ? "translateY(-1%) translateX(0%)"
          : index === 4
          ? "translateX(1%) translateY(0%)"
          : "translateY(0)",
    },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: {
      opacity: 0,
      transform:
        index === 1
          ? "translateY(1%) translateX(0%)"
          : index === 4
          ? "translateX(-1%) translateY(0%)"
          : "translateY(0)",
    },
    config: currentConfig.animate === "smart" ? config.default : config.gentle,
    delay: currentConfig.delay,
  });

  return transition((props, item) => (
    <animated.img
      key={item}
      src={images[item]}
      alt={`imagen-${item + 1}`}
      className="image-animation"
      style={{
        ...props,
        transitionTimingFunction: currentConfig.timingFunction,
        transitionDuration: `${currentConfig.duration}ms`,
      }}
    />
  ));
};

export default ImageSequence;
/* const springs = useSpring({
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
  }); */
/* const animationData = [
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
 */
/*   const increment = () =>
  setIndex((prevIndex) => (prevIndex + 1) % images.length);
useInterval(increment, 1500); */
/* const transitionConfigs = [
  {
    delay: 0,
    variant: "Variant2",
    animate: "smart",
    spring: { mass: 1, stiffness: 28.44, damping: 8 },
  },
  {
    delay: 800,
    variant: "Variant3",
    animate: "smart",
    timingFunction: "ease-out",
    duration: 300,
  },
  {
    delay: 1,
    variant: "Variant4",
    animate: "smart",
    timingFunction: "ease-in",
    duration: 300,
  },
  {
    delay: 800,
    variant: "Variant5",
    animate: "dissolve",
    spring: { mass: 1, stiffness: 28.44, damping: 8 },
  },
  {
    delay: 400,
    variant: "Variant6",
    animate: "smart",
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
    duration: 1500,
  },
  {
    delay: 300,
    variant: "Variant7",
    animate: "smart",
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
    duration: 300,
  },
  {
    delay: 1,
    variant: "Variant8",
    animate: "smart",
    timingFunction: "ease-in",
    duration: 300,
  },
  {
    delay: 800,
    variant: "Default",
    animate: "dissolve",
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
    duration: 1500,
  },
]; */
