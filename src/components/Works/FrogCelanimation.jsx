import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";
import React, { useRef, useState } from "react";
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

const animations = [
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
    duration: 1500,
  },
  {
    delay: 1,
    variant: "Variant4",
    animate: "smart",
    timingFunction: "ease-in",
    duration: 1500,
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
    duration: 1500,
  },
  {
    delay: 1,
    variant: "Variant8",
    animate: "smart",
    timingFunction: "ease-in",
    duration: 1500,
  },
];

const ImageSequence = () => {
  const [index, setIndex] = useState(0);
  const springRefs = useRef(animations.map(() => useSpringRef()));

  const animatedProps = animations.map((config, i) =>
    useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config,
      ref: springRefs.current[i],
      onRest: () => {
        // Cambia al siguiente índice cuando la animación se completa
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      },
    })
  );

  // Sincroniza todas las animaciones
  useChain(springRefs.current, [0, ...Array(animations.length - 1).fill(0.5)]);

  // Reinicia el índice al primero después de la última animación
  const lastAnimationRef = springRefs.current[springRefs.current.length - 1];
  if (lastAnimationRef) {
    lastAnimationRef.onRest(() => {
      setIndex(0);
    });
  }

  return (
    <div className="image-carousel">
      {animatedProps.map((props, i) => (
        <animated.img
          key={i}
          src={images[i]}
          alt={`Image ${i + 1}`}
          style={{
            ...props,
            width: "100%",
            height: "auto",
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
};

export default ImageSequence;
