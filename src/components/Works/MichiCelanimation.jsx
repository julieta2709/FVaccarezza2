import React, { useEffect, useState } from "react";
import Michicel1V2 from "../../assets/img/Michi/Michicel1V2.png";
import Michicel1V3 from "../../assets/img/Michi/Michicel1V3.png";
import Michicel1V4 from "../../assets/img/Michi/Michicel1V4.png";
import "../../styles/Michi.css";

const MichiImages = [Michicel1V2, Michicel1V3, Michicel1V4];

const MichiAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (index + 1) % MichiImages.length;
    const timer = setTimeout(() => {
      setIndex(nextIndex);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index, MichiImages]);
  const transitionTimingFunction = "cubic-bezier(0.55, 0.59, 0, 1.01)";

  return (
    <div className="animated-imageContainer">
      {MichiImages.map((image, currentIndex) => (
        <img
          key={currentIndex}
          src={image}
          alt={`Michi ${currentIndex + 1}`}
          className={`animated-image${currentIndex + 1}`}
          style={{
            zIndex: currentIndex === index ? 2 : 1,
            opacity: currentIndex === index ? 1 : 0,
            transition: `z-index 2800ms ${transitionTimingFunction} 1500ms, opacity 1500ms ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

export default MichiAnimation;
