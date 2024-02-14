import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Ipad10 from "../../../assets/img/Estudio/Ipad10.png";
import Ipad12 from "../../../assets/img/Estudio/Ipad12.png";
import Ipad13 from "../../../assets/img/Estudio/Ipad13.png";
import Ipad15 from "../../../assets/img/Estudio/Ipad15.png";
import Ipad5Bg from "../../../assets/img/Estudio/Ipad5Bg.png";
import Ipad6 from "../../../assets/img/Estudio/Ipad6.png";
import Ipad7 from "../../../assets/img/Estudio/Ipad7.png";
import Ipad8 from "../../../assets/img/Estudio/Ipad8.png";
import Ipad9 from "../../../assets/img/Estudio/Ipad9.png";
import "../Estudio/Ipad.css";

const IpadImg = [Ipad5Bg, Ipad6, Ipad7, Ipad8, Ipad9, Ipad10];

const AnimaIpad2 = () => {
  const [animationActive, setAnimationActive] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimationActive(true);
    } else {
      setAnimationActive(false);
    }
    const nextIndex = (activeIndex + 1) % IpadImg.length;
    const timer = setTimeout(() => {
      setActiveIndex(nextIndex);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [inView, activeIndex, IpadImg.length]);

  return (
    <div ref={ref} className="Ipad1-container">
      {animationActive && (
        <>
          {IpadImg.map((image, currentIndex) => (
            <motion.img
              key={currentIndex}
              src={image}
              alt={`Ipad${currentIndex + 5}`}
              className={`Ipad${currentIndex + 5}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: [0.55, 0.59, 0, 1.01],
                delay: currentIndex * 2,
              }}
            />
          ))}
          <motion.img
            src={Ipad13}
            alt="Ipad13"
            className="Ipad13"
            initial={{
              opacity: 0,
              width: "50%",
            }}
            animate={{
              opacity: 1,
              width: "100%",
            }}
            transition={{
              delay: IpadImg.length * 2 + 2,
              ease: [0.55, 0.59, 0, 1.01],
              duration: 1.5,
            }}
          />
          <motion.img
            src={Ipad12}
            alt="Ipad12"
            className="Ipad12"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: IpadImg.length * 2 + 3,
            }}
          />
          <AnimatePresence>
            <motion.img
              src={Ipad13}
              alt="Ipad13"
              className="Ipad13"
              initial={{
                opacity: 0,
                width: "100%",
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                width: "50%",
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.55, 0.59, 0, 1.01],
                },
              }}
              transition={{
                delay: IpadImg.length * 2 + 6,
              }}
            />
          </AnimatePresence>
          <motion.img
            src={Ipad15}
            alt="Ipad15"
            className="Ipad15"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: [0.55, 0.59, 0, 1.01],
              delay: IpadImg.length * 2 + 8,
            }}
          />
        </>
      )}
    </div>
  );
};
export default AnimaIpad2;
