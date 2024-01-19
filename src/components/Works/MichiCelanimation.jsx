import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Michicel1V2 from "../../assets/img/Michi/Michicel1V2.png";
import Michicel1V3 from "../../assets/img/Michi/Michicel1V3.png";
import Michicel1V4 from "../../assets/img/Michi/Michicel1V4.png";
import "../../styles/Michi.css";

const MichiImages = [Michicel1V2, Michicel1V3, Michicel1V4];

const MichiAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % MichiImages.length); 
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-imageContainer">
      {MichiImages.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Michi Image ${index + 1}`}
          className={`animated-image${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: activeIndex === index ? 1 : 0 }}
          transition={{
            duration: 1.5, 
            ease: [0.55, 0.59, 0, 1.01],
            type: "tween",
          }}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      ))}
    </div>
  );
};


export default MichiAnimation;
