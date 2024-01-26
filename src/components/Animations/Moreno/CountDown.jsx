import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import "../../../styles/Moreno.css";

const Countdown = () => {
  const count = useMotionValue(1); // Comenzamos desde 1
  const rounded = useTransform(
    count,
    (latest) => `(${String(Math.round(latest)).padStart(2, "0")})`
  );

  useEffect(() => {
    const sequence = [1, 3, 7, 12, 9, 10, 6, 7]; // Serie deseada
    let currentIndex = 0; // Índice actual en la serie

    const animateCount = () => {
      const currentValue = sequence[currentIndex]; // Obtener el valor actual de la serie
      const nextIndex = (currentIndex + 1) % sequence.length; // Obtener el siguiente índice circularmente

      animate(count, currentValue, { duration: 2 }); // Animar al valor actual
      currentIndex = nextIndex; // Actualizar el índice para la próxima iteración
    };

    // Iniciar la animación inicialmente y luego cada 2 segundos
    const interval = setInterval(animateCount, 2000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [count]);

  return (
    <motion.div className="countdown-Animacontainer" viewport>
      <motion.div className="countdown-text">{rounded}</motion.div>
    </motion.div>
  );
};

export default Countdown;
