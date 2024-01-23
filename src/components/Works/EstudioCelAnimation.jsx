import React, { useEffect, useState } from "react";
import "../../styles/Estudio.css";
import Estudio1 from "../Animations/Estudio/Estudio1";
import Estudio2 from "../Animations/Estudio/Estudio2";
import Estudio3 from "../Animations/Estudio/Estudio3";

const EstudioCelAnimation = () => {
  const [currentEstudio, setCurrentEstudio] = useState(1);

  useEffect(() => {
    let timer;
    switch (currentEstudio) {
      case 1:
        timer = setTimeout(() => setCurrentEstudio(2), 3000); // Ajusta según la duración de Estudio1
        break;
      case 2:
        timer = setTimeout(() => setCurrentEstudio(3), 8000); // Ajusta según la duración de Estudio2
        break;
      case 3:
        timer = setTimeout(() => setCurrentEstudio(1), 2500); // Ajusta según la duración de Estudio3
        break;
      default:
        break;
    }
    return () => clearTimeout(timer);
  }, [currentEstudio]);

  return (
    <div>
      {currentEstudio === 1 && <Estudio1 key="estudio1" />}
      {currentEstudio === 2 && <Estudio2 key="estudio2" />}
      {currentEstudio === 3 && <Estudio3 key="estudio3" />}
    </div>
  );
};

export default EstudioCelAnimation;
