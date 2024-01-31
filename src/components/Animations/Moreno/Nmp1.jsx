import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Pilltrack2 from "../../../assets/img/Moreno/Pilltrack2.png";
// import Project1 from "../../../assets/img/Moreno/Project1.png";
import Nmp1Bg from "../../../assets/img/Moreno/Nmp1Bg.png";
import Nmp1Pic from "../../../assets/img/Moreno/Nmp1Pic.png";
import Project2 from "../../../assets/img/Moreno/Project2.png";
import "../Moreno/Nmp.css";

const Nmp1 = () => {
  const [animationActive, setAnimationActive] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setAnimationActive(true);
    } else {
      setAnimationActive(false);
    }
  }, [inView]);

  return (
    <div className="Nmp-container" ref={ref}>
      {animationActive && (
        <>
          <img src={Nmp1Bg} alt="Nmp1" className="Nmp1Bg" />
          <AnimatePresence>
            <motion.img
              src={Nmp1Pic}
              alt="Nmp1Pic"
              className="Nmp1Pic"
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 0,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5,
              }}
              exit={{ opacity: 1 }}
            />
            <motion.img
              src={Project2}
              alt="Project2"
              className="Project2"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5,
              }}
              exit={{ opacity: 0 }}
            />
            <motion.img
              src={Pilltrack2}
              alt="Pilltrack2"
              className="Pilltrack2"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5,
              }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          {/* <motion.img
            src={Nmp1Pic}
            alt="Nmp1Pic"
            className="Nmp1Pic"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.5,
            }}
            exit={{ opacity: 1 }}
          /> */}
        </>
      )}
    </div>
  );
};
export default Nmp1;
