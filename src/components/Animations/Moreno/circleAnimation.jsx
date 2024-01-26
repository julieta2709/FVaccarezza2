import React, { useEffect, useState } from "react";
import CircleExpansion from "./CircleExpansion";
import CircleFusion from "./CircleFusion";
import CircleCenter from "./circleCenter";

const CircleAnimation = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
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
    }, 4000); // Ajusta este valor según la duración de la animación de CircleFusion

    return () => clearTimeout(timer);
  }, [animationStep]);

  return (
    <div>
      {animationStep === 0 && <CircleFusion key="circleFusion" />}
      {animationStep === 1 && <CircleCenter key="circleCenter" />}
      {animationStep === 2 && <CircleExpansion key="circleExpansion" />}
    </div>
  );
};

export default CircleAnimation;
/* const [showCenter, setShowCenter] = useState(false);
  const [showExpansion, setShowExpansion] = useState(true); */
/*  if (showFusion) {
      // Iniciar CircleCenter después de que CircleExpansion haya terminado
      timer = setTimeout(() => {
        setShowFusion(false);
        setShowCenter(true);
        setShowExpansion(false); */
/*  } else if (showCenter) {
      // Reiniciar CircleCenter después de que CircleFusion haya terminado
      timer = setTimeout(() => {
        setShowFusion(false);
        setShowCenter(true);
        setShowExpansion(false);
      }, 2000);
    } else if (showExpansion) {
      // Reiniciar CircleExpansion después de que CircleCenter haya terminado
      timer = setTimeout(() => {
        setShowFusion(false);
        setShowCenter(false);
        setShowExpansion(true);
      }, 2000);
    } */
