// import { animated, config, useTransition } from "@react-spring/web";
import React, { useEffect, useState } from "react";
// import Michicel1 from "../../assets/img/Michi/Michicel1.png";
import Michicel1V2 from "../../assets/img/Michi/Michicel1V2.png";
import Michicel1V3 from "../../assets/img/Michi/Michicel1V3.png";
import Michicel1V4 from "../../assets/img/Michi/Michicel1V4.png";
import Michicel1V5 from "../../assets/img/Michi/Michicel1V5.png";
import "../../styles/Michi.css";

const MichiImages = [
  // Michicel1,
  Michicel1V2,
  Michicel1V3,
  Michicel1V4,
  Michicel1V5,
];

const MichiAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (index + 1) % MichiImages.length;
    const timer = setTimeout(() => {
      setIndex(nextIndex);
    },1500);
    return () => clearTimeout(timer);
  }, [index, MichiImages]);
  const transitionTimingFunction = 'cubic-bezier(0.55, 0.59, 0, 1.01)';

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {MichiImages.map((image, currentIndex) => (
        <img
          key={currentIndex}
          src={image}
          alt={`Michi ${currentIndex + 1}`}
          className={`animated-image${currentIndex + 1} ${
            currentIndex === index ? 'active' : ''
          }`}
          style={{
            opacity: currentIndex === index ? 1 : 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'cover',
            transition: `opacity 500ms ${transitionTimingFunction}`,
          }}
        />
      ))}
    </div>
  );
};
export default MichiAnimation;

/* const MichiAnimation = () => {
  const [index, setIndex] = useState(0);
  const currentConfig = MichitransitionConfigs[index % MichitransitionConfigs.length];


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % MichiImages.length);
    }, currentConfig.delay);

    return () => clearTimeout(timeoutId);
  }, [index, currentConfig]);

  const transition = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: currentConfig && currentConfig.animate === "smart" ? config.default : config.gentle,
    delay: currentConfig ? currentConfig.delay : 0,
  });

  return transition((props, item) => (
    <animated.img
      key={item}
      src={MichiImages[item]}
      alt={`imagen-${item + 1}`}
      className="MichiImage-animation"
      style={{
        ...props,
        transitionTimingFunction: currentConfig.timingFunction,
        transitionDuration: `${currentConfig.duration}ms`,
      }}
    />
  ));
};

export default MichiAnimation; */

/* const MichitransitionConfigs = [
  {
    delay: 1500,
    variant: "Default",
    animate: "smart",
    timingFunction: "cubic-bezier(0.55, 0.59, 0, 1.01)",
    duration: 500,
  },
  {
    delay: 1500,
    variant: "Variant2",
    animate: "smart",
    timingFunction: "cubic-bezier(0.55, 0.59, 0, 1.01)",
    duration: 500,
  },
  {
    delay: 1500,
    variant: "Variant3",
    animate: "smart",
    timingFunction: "cubic-bezier(0.55, 0.59, 0, 1.01)",
    duration: 500,
  },
];
 */
