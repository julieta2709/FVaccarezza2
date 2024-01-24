import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import "../../../styles/Moreno.css";

const Countdown = () => {
  const count = useMotionValue(12);
  const rounded = useTransform(
    count,
    (latest) => `(${String(Math.round(latest)).padStart(2, "0")})`
  );

  useEffect(() => {
    const controls = animate(count, 1, { duration: 12 });
    return controls.stop;
  }, [count]);

  return (
    <motion.div className="countdown-Animacontainer" viewport>
      <motion.div className="countdown-text">{rounded}</motion.div>
    </motion.div>
  );
};

export default Countdown;
