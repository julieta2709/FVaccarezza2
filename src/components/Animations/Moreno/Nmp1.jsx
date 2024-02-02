import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Nmp1Bg from "../../../assets/img/Moreno/Nmp1Bg.png";
import Nmp1Pic from "../../../assets/img/Moreno/Nmp1Pic.png";
// import Nmp1Pic from "../../../assets/img/Moreno/Nmp1Pic.png";
import Pilltrack2 from "../../../assets/img/Moreno/Pilltrack2.png";
import Project2 from "../../../assets/img/Moreno/Project2.png";
import "../../../styles/Moreno.css";
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

  const transition = {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
    repeatDelay: 1,
  };

  return (
    <div ref={ref}>
      {animationActive && (
        <>
          <img src={Nmp1Bg} alt="Nmp1" className="Nmp1Bg" />
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
              ...transition,
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
              ...transition,
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
              ...transition,
            }}
            exit={{ opacity: 0 }}
          />
        </>
      )}
    </div>
  );
};
export default Nmp1;
