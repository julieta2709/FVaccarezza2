import React, { useEffect, useState } from "react";
import "../Estudio/Ipad.css";
import AnimaIpad2 from "./AnimaIpad2";
import AnimaIpad3 from "./AnimaIpad3";

const AnimaIpad = () => {
  const [isAnimaFinished, setIsAnimaFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsAnimaFinished(true);
      }, 16000); 
      return () => clearTimeout(timer);
    }, []);
  
    useEffect(() => {
      if (isAnimaFinished) {
        const timer = setTimeout(() => {
          setIsEstudio1Finished(true);
        }, 18000); 
        return () => clearTimeout(timer);
      }
    }, [isAnimaFinished]);

  return (
    <div className="Ipad1-container">
      {isAnimaFinished ? <AnimaIpad3 /> : null}
      {!isAnimaFinished && <AnimaIpad2 />}
    </div>
  );
};

export default AnimaIpad;
