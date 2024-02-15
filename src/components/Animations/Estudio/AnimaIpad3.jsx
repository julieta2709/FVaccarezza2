import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Ipad1 from "../../../assets/img/Estudio/Ipad1.png";
import Ipad1Bg from "../../../assets/img/Estudio/Ipad1Bg.png";
import Ipad2 from "../../../assets/img/Estudio/Ipad2.png";
import Ipad3 from "../../../assets/img/Estudio/Ipad3.png";
import "../Estudio/Ipad.css";

const images = [Ipad1, Ipad2, Ipad3];

const AnimaIpad3 = () => {
  const [index, setIndex] = useState(0);
  const [yOffsets, setYOffsets] = useState([]);

  useEffect(() => {
    setYOffsets(generateYOffsets());

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  const generateYOffsets = () => {
    const offsets = images.map((_, i) => {
      if (i === 0) return -28;
      else if (i === 1) return -60.96;
      else return 0;
    });
    return offsets;
  };

  return (
    <div className="Ipad1-container">
      <img src={Ipad1Bg} alt="Ipad1Bg" className="Ipad1Bg" />
      <AnimatePresence wait>
        <motion.img
          key={index}
          src={images[index]}
          className={`Ipad${index + 1}`}
          alt={`Ipad${index + 1}`}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: [0.42, 0, 0.11, 0.99],
          }}
          exit={{
            opacity: 0,
            y: yOffsets[index],
            transition: {
              opacity: {
                duration: 1.5,
                // ease: [0.42, 0, 0.11, 0.99],
                delay: 0,
              },
              y: {
                duration: 0.2,
                delay: 0,
              },
            },
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimaIpad3;
