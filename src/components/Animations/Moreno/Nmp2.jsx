import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Nmp2Bg from "../../../assets/img/Moreno/Nmp2Bg.png";
import Nmp2Project2 from "../../../assets/img/Moreno/Nmp2Project2.png";
import Skinpro1 from "../../../assets/img/Moreno/Skinpro1.png";
import Skinpro2 from "../../../assets/img/Moreno/Skinpro2.png";
import "../../../styles/Moreno.css";
import "../Moreno/Nmp.css";

const Nmp2 = () => {
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
          <img src={Nmp2Bg} alt="Nmp2Bg" className="Nmp2Bg" />
          <motion.img
            src={Skinpro1}
            alt="Skinpro1"
            className="Skinpro1"
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
            src={Nmp2Project2}
            alt="Nmp2Project2"
            className="Nmp2Project2"
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
            src={Skinpro2}
            alt="Skinpro2"
            className="Skinpro2"
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
export default Nmp2;
