import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Estudiocel1V2 from "../../../assets/img/Estudio/Estudiocel1V2.png";
import Estudiocel1V3 from "../../../assets/img/Estudio/Estudiocel1V3.png";
import Estudiocel1V4 from "../../../assets/img/Estudio/Estudiocel1V4.png";
import Estudiocel1V5 from "../../../assets/img/Estudio/Estudiocel1V5.png";
import Estudiocel1V6 from "../../../assets/img/Estudio/Estudiocel1V6.png";
import "../Estudio1.css";

const EstudioCelImages = [
  Estudiocel1V2,
  Estudiocel1V3,
  Estudiocel1V4,
  Estudiocel1V5,
  Estudiocel1V6,
];

const Estudio2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % EstudioCelImages.length;
    const timer = setTimeout(() => {
      setActiveIndex(nextIndex);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="animated-imageEstudio2">
      {EstudioCelImages.map((image, currentIndex) => (
        <motion.img
          key={currentIndex}
          src={image}
          alt={`Estudio${currentIndex + 1}`}
          className={`animated-Estudio2image`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.55, 0.59, 0, 1.01],
            delay: currentIndex * 1,
          }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
};
export default Estudio2;
