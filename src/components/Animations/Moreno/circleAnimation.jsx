import React, { useEffect, useState } from "react";
import "../Moreno/circle.css";
import CircleExpansion from "./CircleExpansion";
import CircleFusion from "./CircleFusion";
import CircleCenter from "./circleCenter";

const CircleAnimation = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStep((prevStep) => (prevStep + 1) % 3);
    }, 4000);

    return () => clearTimeout(timer);
  }, [animationStep]);

  return (
    <div className="Circlecontainer">
      {animationStep === 0 && <CircleFusion key="circleFusion" />}
      {animationStep === 1 && <CircleCenter key="circleCenter" />}
      {animationStep === 2 && <CircleExpansion key="circleExpansion" />}
      {/* <CircleCenter /> */}
    </div>
  );
};

export default CircleAnimation;

/* useEffect(() => {
  const timer = setTimeout(() => {
    setAnimationStep((prevStep) => {
      if (prevStep === 0 || prevStep === 2) {
        return 1; // Pasar a CircleCenter si estamos en CircleFusion o CircleExpansion
      } else if (prevStep === 1) {
        return 2; // Pasar a CircleExpansion si estamos en CircleCenter
      } else {
        return 0; // Reiniciar a CircleFusion si estamos en CircleExpansion
      }
    });
  }, 4000); 

  return () => clearTimeout(timer);
}, [animationStep]); */
