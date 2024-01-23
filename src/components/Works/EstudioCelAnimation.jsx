import React, { useEffect, useState } from "react";
import "../../styles/Estudio.css";
import Estudio1 from "../Animations/Estudio/Estudio1";
import Estudio2 from "../Animations/Estudio/Estudio2";
import Estudio3 from "../Animations/Estudio/Estudio3";

const EstudioCelAnimation = () => {
  const [isEstudio1Finished, setIsEstudio1Finished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEstudio1Finished(true);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isEstudio1Finished) {
      const timer = setTimeout(() => {
        setIsEstudio1Finished(false);
      }, 10000); 
      return () => clearTimeout(timer);
    }
  }, [isEstudio1Finished]);

useEffect(() => {
    const timer = setTimeout(() => {
      setIsEstudio1Finished(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isEstudio1Finished]);

  return (
    <div className="Estudio-AnimationContainer">
      {isEstudio1Finished ? <Estudio1 key="estudio1" /> : null}
      {isEstudio1Finished && <Estudio2 key="estudio2" />}
      {!isEstudio1Finished && <Estudio3 key="estudio3" />}
    </div>
  );
};

export default EstudioCelAnimation;