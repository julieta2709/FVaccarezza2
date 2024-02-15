import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Ip1 from "../../../assets/img/Estudio/Ip1.png";
import Ip2 from "../../../assets/img/Estudio/Ip2.png";
import Ip3 from "../../../assets/img/Estudio/Ip3.png";
import Ip6 from "../../../assets/img/Estudio/Ip6.png";
import Ipad10 from "../../../assets/img/Estudio/Ipad10.png";
import Ipad12 from "../../../assets/img/Estudio/Ipad12.png";
import Ipad13 from "../../../assets/img/Estudio/Ipad13.png";
import Ipad15 from "../../../assets/img/Estudio/Ipad15.png";
import Ipad1Bg from "../../../assets/img/Estudio/Ipad1Bg.png";
import Ipad4 from "../../../assets/img/Estudio/Ipad4.png";
import Ipad5 from "../../../assets/img/Estudio/Ipad5.png";
import Ipad5Bg from "../../../assets/img/Estudio/Ipad5Bg.png";
import Ipad6 from "../../../assets/img/Estudio/Ipad6.png";
import Ipad7 from "../../../assets/img/Estudio/Ipad7.png";
import Ipad8 from "../../../assets/img/Estudio/Ipad8.png";
import Ipad9 from "../../../assets/img/Estudio/Ipad9.png";
import Rectangle1 from "../../../assets/img/Estudio/Rectangle1.png";
import "../Estudio/Ipad.css";

const IpadImg = [Ipad6, Ipad7, Ipad8, Ipad9, Ipad10];

const AnimaIpad2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % IpadImg.length;
    const timer = setTimeout(() => {
      setActiveIndex(nextIndex);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex, IpadImg.length]);

  return (
    <div ref={ref} className="Ipad1-container">
      <img src={Ipad1Bg} alt="Ipad1Bg" className="Ipad1Bg" />
      {animationActive && (
        <>
          <motion.img
            src={Ip1}
            className="Ipad1"
            alt="Ipad1"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -28 }}
            transition={{
              duration: 4,
              ease: [0.42, 0, 0.11, 0.99],
            }}
          />
          <motion.img
            src={Ip2}
            className="Ipad2"
            alt="Ipad2"
            initial={{ y: 0 }}
            animate={{ y: [0, -28, -90] }}
            transition={{
              duration: 8,
              ease: [0.42, 0, 0.11, 0.99],
              times: [0, 0.5, 1],
            }}
          />
          <motion.img
            src={Ip3}
            className="Ipad3"
            alt="Ipad3"
            initial={{ y: 93 }}
            animate={{ y: [93, 65, 0] }}
            transition={{
              duration: 8,
              ease: [0.42, 0, 0.11, 0.99],
              times: [0, 0.5, 1],
            }}
          />
          <motion.img
            src={Rectangle1}
            className="Rectangle"
            alt="Rectangle"
            initial={{ y: 0 }}
            animate={{ y: [10, 35] }}
            transition={{
              duration: 4,
              ease: [0.42, 0, 0.11, 0.99],
              delay: 4,
            }}
          />
          <motion.img
            src={Ipad4}
            className="Ipad4"
            alt="Ipad4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.42, 0, 0.11, 0.99],
              delay: 8,
            }}
          />
          <motion.img
            src={Ipad5}
            className="Ipad5b"
            alt="Ipad5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.42, 0, 0.11, 0.99],
              delay: 9,
            }}
          />
          <motion.img
            src={Ip6}
            className="Ip6"
            alt="Ip6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              ease: [0.42, 0, 0.11, 0.99],
              delay: 10,
            }}
          />
          <motion.img
            src={Ipad5Bg}
            className="Ipad5"
            alt="Ipad5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              ease: [0.42, 0, 0.11, 0.99],
              delay: 10,
            }}
          />
          {IpadImg.map((image, currentIndex) => (
            <motion.img
              key={currentIndex}
              src={image}
              alt={`Ipad${currentIndex + 6}`}
              className={`Ipad${currentIndex + 6}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: [0.55, 0.59, 0, 1.01],
                delay: currentIndex * 2 + 16,
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
              delay: IpadImg.length * 2 + 18,
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
              delay: IpadImg.length * 2 + 21,
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
                delay: IpadImg.length * 2 + 27,
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
              delay: IpadImg.length * 2 + 27,
            }}
          />
        </>
      )}
    </div>
  );
};
export default AnimaIpad2;
