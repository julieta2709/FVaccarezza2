import React, { useEffect, useState } from "react";
import "../../styles/Estudio.css";
import Estudio1 from "../Animations/Estudio/Estudio1";
import Estudio2 from "../Animations/Estudio/Estudio2";
import Estudio3 from "../Animations/Estudio/Estudio3";

const EstudioCelAnimation = () => {
  const [currentEstudio, setCurrentEstudio] = useState(1);

  // Duraciones de cada estudio en milisegundos
  const estudioDurations = {
    1: 3000, // Duración para Estudio1 en milisegundos
    2: 8000, // Duración para Estudio2 en milisegundos
    3: 2500, // Duración para Estudio3 en milisegundos
  };

  // useEffect para cambiar al siguiente estudio cuando el actual termina
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentEstudio((prev) => (prev % 3) + 1); // Cambia al siguiente estudio (1, 2, 3, 1, 2, 3, ...)
    }, estudioDurations[currentEstudio]);
    return () => clearTimeout(timer);
  }, [currentEstudio, estudioDurations]);

  // Renderizar el componente del estudio actual
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
    <div>
      {renderCurrentEstudio()}
    </div>
  );
};

export default EstudioCelAnimation;
