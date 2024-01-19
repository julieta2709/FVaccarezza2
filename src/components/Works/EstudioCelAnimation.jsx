import React, { useEffect, useState } from "react";
import Estudiocel1V1 from "../../assets/img/Estudio/Estudiocel1V1.png";
import Estudiocel1V2 from "../../assets/img/Estudio/Estudiocel1V2.png";
import Estudiocel1V3 from "../../assets/img/Estudio/Estudiocel1V3.png";
import Estudiocel1V4 from "../../assets/img/Estudio/Estudiocel1V4.png";
import Estudiocel1V5 from "../../assets/img/Estudio/Estudiocel1V5.png";
import Estudiocel1V6 from "../../assets/img/Estudio/Estudiocel1V6.png";
import "../../styles/Estudio.css";

const EstudioCelImages = [
  Estudiocel1V1,
  Estudiocel1V2,
  Estudiocel1V3,
  Estudiocel1V4,
  Estudiocel1V5,
  Estudiocel1V6,
];

const EstudioCelAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const transitions = [
      { duration: 1000, delay: 2000, translateY: 12.25 },
      { duration: 500, delay: 200 },
      { duration: 500, delay: 1 },
      { duration: 1000, delay: 1 },
      { duration: 1000, delay: 1, translateY: 18.99 },
      { duration: 1000, delay: 800, changeFromY: 18.99, changeToY: 12.25 },
    ];

    const nextIndex = (index + 1) % EstudioCelImages.length;
    const { duration, delay, translateY, changeFromY, changeToY } =
      transitions[index];

    const timer = setTimeout(() => {
      setIndex(nextIndex);
    }, duration + delay);

    return () => clearTimeout(timer);
  }, [index]);

  const transitionTimingFunction = "cubic-bezier(0.55, 0.59, 0, 1.01)";

  return (
    <div className="animated-imageContainer">
      {EstudioCelImages.map((image, currentIndex) => (
        <img
          key={currentIndex}
          src={image}
          alt={`Estudio ${currentIndex + 1}`}
          className={`animated-Estudioimage${currentIndex + 1}`}
          style={{
            zIndex: currentIndex === index ? 4 : 3,
            opacity: currentIndex === index ? 1 : 0,
            transition: `
              z-index 2500ms ${transitionTimingFunction} 0ms,
              opacity 2500ms ${transitionTimingFunction} 0ms,
              transform ${duration}ms ${transitionTimingFunction} ${delay}ms`,
            transform: translateY ? `translateY(${translateY}%)` : "",
          }}
        />
      ))}
    </div>
  );
};
export default EstudioCelAnimation;
