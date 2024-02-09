import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Ipad1 from "../../../assets/img/Estudio/Ipad1.png";
import Ipad1Bg from "../../../assets/img/Estudio/Ipad1Bg.png";
import Ipad2 from "../../../assets/img/Estudio/Ipad2.png";
import Ipad3 from "../../../assets/img/Estudio/Ipad3.png";
import "./Ipad.css";

const Ipad1img = [Ipad1, Ipad2, Ipad3];

const AnimaIpad2 = () => {
  const [animationActive, setAnimationActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setAnimationActive(true);
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % Ipad1img.length);
      }, 3000);
      return () => clearInterval(timer);
    } else {
      setAnimationActive(false);
    }
  }, [inView]);

  const slideVariants = {
    hiddenBottom: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: "-10%",
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.42, 0, 0.11, 0.99],
      },
    },
    exit: {
      opacity: 0,
    },
  };

/*   const onAnimationComplete = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % Ipad1img.length);
  }; */

  return (
    <div ref={ref} className="Ipad1-container">
      {animationActive && (
        <>
          <img src={Ipad1Bg} alt="Ipad1Bg" className="Ipad1Bg" />
          <AnimatePresence initial={false}>
            {Ipad1img.map(
              (image, index) =>
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Ipad${index + 1}`}
                    className={`Ipad${index + 1}`}
                    initial="hiddenBottom"
                    animate={activeIndex === index ? "visible" : "hiddenBottom"}
                    exit="exit"
                    variants={slideVariants}
                    // onAnimationComplete={onAnimationComplete}
                  />  
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};
export default AnimaIpad2;