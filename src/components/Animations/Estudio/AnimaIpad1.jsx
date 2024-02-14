import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Ipad1 from "../../../assets/img/Estudio/Ipad1.png";
import Ipad1Bg from "../../../assets/img/Estudio/Ipad1Bg.png";
import Ipad2 from "../../../assets/img/Estudio/Ipad2.png";
import Ipad3 from "../../../assets/img/Estudio/Ipad3.png";
import "../Estudio/Ipad.css";

const AnimaIpad1 = () => {
  const [animationActive, setAnimationActive] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setAnimationActive(true);
    } else {
      setAnimationActive(false);
    }
  }, [inView]);

  return (
    <div ref={ref} className="Ipad1-container">
      {animationActive && (
        <>
          <img src={Ipad1Bg} alt="Ipad1Bg" className="Ipad1Bg" />
          <motion.img
            src={Ipad1}
            alt="Ipad1"
            className="Ipad1"
            initial={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              opacity: 0,
              y: -50,
            }}
            transition={{
              opacity: {
                duration: 2,
              },
              y: {
                duration: 2,
                ease: [0.42, 0, 0.11, 0.99],
              },
            }}
          />
          <motion.img
            src={Ipad2}
            alt="Ipad2"
            className="Ipad2"
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              y: -60.96,
              transitionEnd: {
                display: "none",
              },
            }}
/*             exit={{
              opacity: 0,
              y: -60.96,
            }} */
            transition={{
              opacity: {
                duration: 3,
                ease: [0.42, 0, 0.11, 0.99],
              },
              y: {
                delay: 3,
                duration: 3,
              },
            }}
          />
          <motion.img
            src={Ipad3}
            alt="Ipad3"
            className="Ipad3"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 3,
              ease: [0.42, 0, 0.11, 0.99],
              delay: 6,
            }}
          />
        </>
      )}
    </div>
  );
};

export default AnimaIpad1;
