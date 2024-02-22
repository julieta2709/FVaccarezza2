import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import FrogAnima2 from "../../../assets/img/Frog/FrogAnima2.png";
import FrogAnima3 from "../../../assets/img/Frog/FrogAnima3.png";
import FrogAnima4 from "../../../assets/img/Frog/FrogAnima4.png";
import Frogcel3 from "../../../assets/img/Frog/Frogcel3.png";
import "../../../styles/Frog.css";

const Img = [FrogAnima3, FrogAnima4];

const FrogAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % Img.length;
    const timer = setTimeout(() => {
      setActiveIndex(nextIndex);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex, Img.length]);

  return (
    <div>
      <img src={Frogcel3} alt="Frogcel3" className="image-animation" />
      <motion.img
        src={FrogAnima2}
        alt="FrogAnima2"
        className="image-animation"
        initial={{
          opacity: 0,
          y: "-100%",
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 2.5,
          type: "spring",
        }}
      />
      <AnimatePresence>
        {Img.map((image, currentIndex) => (
          <motion.img
            key={currentIndex}
            src={image}
            alt="FrogAnima"
            className="image-animation"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: currentIndex * 2 + 2.5,
            }}
            exit={{
              opacity: 0,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
export default FrogAnimation;
