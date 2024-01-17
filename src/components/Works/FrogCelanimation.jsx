import { animated, useTransition } from "@react-spring/web";
import React, { useState } from "react";
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

const customSmartConfig = { tension: 170, friction: 26, precision: 0.1 };

const ImageSequence = () => {
  const [index, setIndex] = useState(0);
  const currentConfig = transitionConfigs[index];

  const handleRest = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const transition = useTransition(index, {
 /*    from: {
      opacity: 0,
      transform: "scale(1)",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: {
      opacity: 0,
      transform: "scale(1)",
    }, */
    config: {
      duration: currentConfig.duration,
    },
    delay: currentConfig.delay,
    onRest: handleRest,
    exitBeforeEnter: true,
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

/* const transition = useTransition(index, {
  from: {
    opacity: 0,
    clipPath:
      index === 1
        ? "polygon(20% 0, 80% 0, 80% 100%, 20% 100%)"
        : index === 4
        ? "polygon(0 0, 100% 0, 0 100%, 100% 100%)"
        : "scale(1)",
  },
  enter: { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  leave: {
    opacity: 0,
    clipPath:
      index === 1
        ? "polygon(0 0, 100% 0, 100% 0, 0 0)"
        : "polygon(100% 0, 100% 100%, 100% 100%, 100% 0)",
  },
  config: currentConfig.animate === "smart" ? config.default : config.gentle,
  delay: currentConfig.delay,
  onRest: handleRest,
  exitBeforeEnter: true,
  duration: currentConfig.duration,
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
}; */
