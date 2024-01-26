import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "../../../styles/Moreno.css";

const numbersSequence = [1, 3, 7, 12, 9, 10, 6, 7];

const formatNumber = (number) => {
  const formattedNumber = number.toString().padStart(2, '0');
  return `(${formattedNumber})`;
};

const Countdown = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numbersSequence.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="countdown-Animacontainer">
      <motion.div
        className="countdown-text"
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0 }}
      >
        {formatNumber(numbersSequence[currentIndex])}
      </motion.div>
    </div>
  );
};

export default Countdown;

/* const Countdown = () => {
  const count = useMotionValue(0); 
  const rounded = useTransform(
    count,
    (latest) => `(${String(Math.round(latest)).padStart(2, "0")})`
  );

  useEffect(() => {
    const sequence = [1, 3, 7, 12, 9, 10, 6, 7]; 
    let currentIndex = 0; 

    const animateCount = () => {
      const currentValue = sequence[currentIndex]; 
      const nextIndex = (currentIndex + 1) % sequence.length; 

      animate(count, currentValue, { duration: 2 }); 
      currentIndex = nextIndex; 
    };

    const interval = setInterval(animateCount, 2000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <motion.div className="countdown-Animacontainer" viewport>
      <motion.div className="countdown-text">{rounded}</motion.div>
    </motion.div>
  );
};

export default Countdown;
 */
