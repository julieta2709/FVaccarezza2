import React, { useEffect, useState } from "react";
import "../../styles/Estudio.css";
import Estudio1 from "../Animations/Estudio/Estudio1";
import Estudio2 from "../Animations/Estudio/Estudio2";
import Estudio3 from "../Animations/Estudio/Estudio3";

const EstudioCelAnimation = () => {
  const [currentEstudio, setCurrentEstudio] = useState(1);

  const estudioDurations = {
    1: 3000,
    2: 8000,
    3: 2500,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentEstudio((prev) => (prev % 3) + 1);
    }, estudioDurations[currentEstudio]);
    return () => clearTimeout(timer);
  }, [currentEstudio, estudioDurations]);

  const renderCurrentEstudio = () => {
    switch (currentEstudio) {
      case 1:
        return <Estudio1 key="estudio1" />;
      case 2:
        return <Estudio2 key="estudio2" />;
      case 3:
        return <Estudio3 key="estudio3" />;
      default:
        return null;
    }
  };

  return (
    <div className="Estudio-AnimationContainer">{renderCurrentEstudio()}</div>
  );
};

export default EstudioCelAnimation;
