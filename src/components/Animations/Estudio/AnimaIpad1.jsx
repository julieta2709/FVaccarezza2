import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// import Ipad1 from "../../../assets/img/Estudio/Ipad1.png";
import Ipad1Bg from "../../../assets/img/Estudio/Ipad1Bg.png";
import Ipad2 from "../../../assets/img/Estudio/Ipad2.png";
import "./Ipad.css";

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

  const transition = {
    duration: 2,
    ease: [0.42, 0, 0.11, 0.99],
    repeat: Infinity,
  };

  return (
    <div ref={ref} className="Ipad1-container">
      {animationActive && (
        <>
          <img src={Ipad1Bg} alt="Ipad1Bg" className="Ipad1Bg" />
          {/* <AnimatePresence initial={false}> */}
{/*           <motion.img
            key="ipad1"
            src={Ipad1}
            alt="Ipad1"
            className="Ipad1"
            initial={{
              opacity: 0,
              y: 0,
            }}
            visible={{
              opacity: 1,
              y: "-10%",
            }}
            transition={{ ...transition }}
            exit={{
              opacity: 0,
            }}
          /> */}
          <motion.img
            src={Ipad2}
            alt="Ipad2"
            className="Ipad2"
            initial={{
              opacity: 0,
            }}
            visible={{
              opacity: 1,
            }}
            transition={{ ...transition }}
            exit={{
              opacity: 0,
            }}
          />
          {/* </AnimatePresence> */}
        </>
      )}
    </div>
  );
};
export default AnimaIpad1;
