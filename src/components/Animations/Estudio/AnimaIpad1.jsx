import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Ipad1 from "../../../assets/img/Estudio/Ipad1.png";
import Ipad1Bg from "../../../assets/img/Estudio/Ipad1Bg.png";
import Ipad2 from "../../../assets/img/Estudio/Ipad2.png";
import Ipad3 from "../../../assets/img/Estudio/Ipad3.png";
import "./Ipad.css";

const Ipad1img = [Ipad1, Ipad2, Ipad3];

const AnimaIpad1 = () => {
  const [animationActive, setAnimationActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setAnimationActive(true);
    } else {
      setAnimationActive(false);
    }
  }, [inView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % Ipad1img.length;
      setActiveIndex(nextIndex);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const transition = {
    duration: 2,
    ease: [0.42, 0, 0.11, 0.99],
    /*        repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1, */
  };

  const onAnimationComplete = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % Ipad1img.length);
  };

  return (
    <div ref={ref} className="Ipad1-container">
      {animationActive && (
        <>
          <img src={Ipad1Bg} alt="Ipad1Bg" className="Ipad1Bg" />
          {Ipad1img.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Ipad${index + 1}`}
              className={`Ipad${index + 1}`}  
              initial={{
                opacity: 0,
                originY: -100,
              }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ?0 : 100,
              }}
              exit={{ opacity: 0, y: 0 }}
              transition={{
                ...transition,
              }}
              onAnimationComplete={onAnimationComplete}
            />
          ))}
        </>
      )}
    </div>
  );
};
export default AnimaIpad1;
