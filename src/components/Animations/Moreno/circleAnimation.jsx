import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../Moreno/circle.css";
import CircleExpansion from "./CircleExpansion";
import CircleFusion from "./CircleFusion";
import CircleCenter from "./circleCenter";

const CircleAnimation = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStep((prevStep) => (prevStep + 1) % 3);
    }, 4000);

    return () => clearTimeout(timer);
  }, [animationStep]);

  useEffect(() => {
    if (inView) {
      setAnimationActive(true);
    } else {
      setAnimationActive(false);
    }
  }, [inView]);

  return (
    <div className="Circlecontainer" ref={ref}>
      {animationActive && (
        <>
          {animationStep === 0 && <CircleFusion key="circleFusion" />}
          {animationStep === 1 && <CircleCenter key="circleCenter" />}
          {animationStep === 2 && <CircleExpansion key="circleExpansion" />}
        </>
      )}
    </div>
  );
};

export default CircleAnimation;
