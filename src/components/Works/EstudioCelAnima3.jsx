import { motion } from "framer-motion";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const transitions = {
    type: "tween",
    ease: [0.55, 0.59, 0, 1.01], 
  };

  const intervals = [5000, 6000, 3000, 3500, 4000, 6000];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % EstudioCelImages.length); 
    }, intervals[activeIndex]); 
    return () => clearInterval(interval);
  }, [activeIndex, intervals]);

  const getDuration = (index) => {
    switch (index) {
      case 0:
        return 3000; 
      case 1:
        return 2500; 
      case 2:
        return 1000; 
      case 3:
        return 1200; 
      case 4:
        return 1500; 
      case 5:
        return 3000; 
      default:
        return 0; 
    }
  };
 
  return (
    <div className="animated-imageContainer">
      {EstudioCelImages.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Estudio Cel Image ${index + 1}`}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: activeIndex === index ? 1 : 0,
            y: index === 0 ? 6.74 : 0,
          }}
          transition={{
            opacity: { duration: getDuration(index) / 1000, ...transitions },
            y: { duration: getDuration(index) / 1000, delay: 0, ...transitions }, 
          }}
          className="animated-Estudioimage"
        />
      ))}
    </div>
  );
};
export default EstudioCelAnimation;

/* const getDelay = (index) => {
  switch (index) {
    case 0:
      return 2000; 
    case 1:
      return 200; 
    case 2:
      return 1; 
    case 3:
      return 1; 
    case 4:
      return 1; 
    case 5:
      return 800; 
    default:
      return 0; 
  }
}; */