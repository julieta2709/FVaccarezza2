import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Frog1 from "../../assets/img/Frog/Frog1.png";
import Frog2 from "../../assets/img/Frog/Frog2.png";
import Frog3 from "../../assets/img/Frog/Frog3.png";
import Frog4 from "../../assets/img/Frog/Frog4.png";
import Frog5 from "../../assets/img/Frog/Frog5.png";
import Frog6 from "../../assets/img/Frog/Frog6.png";
import Frogcel1 from "../../assets/img/Frog/Frogcel1.png";
import Frogcel2 from "../../assets/img/Frog/Frogcel2.png";
import Frogcel4 from "../../assets/img/Frog/Frogcel4.png";
import "../../styles/Frog.css";
import "../../styles/Work.css";
import BeLink from "../Buttons/BeLink";
import Next from "../Buttons/Next";
import { WorkDataContext } from "./WorkContext";

const Frog = () => {
  const WorkData = useContext(WorkDataContext);
  const navigate = useNavigate();

  /*uso de la informacion del contexto*/
  const { index, title, description, date, url } = WorkData[0];
  const sentences = description.split("\n");

  /*Navegación en la página a través de los botones*/
  function quinticEaseOut(t) {
    return 1 - Math.pow(1 - t, 5);
  }
  const handleNextClick = () => {
    const nextElement = document.getElementById("estudio");
    if (nextElement) {
      const offset = 50;
      const elementPosition =
        nextElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
        easing: quinticEaseOut,
      });
    }
  };

  return (
    <div className="Work-FrogContainer">
      <div className="Work-TitleIndivCont">
        <div className="Work-TitleIndividual">
          <div className="Work-TitleIndivContainer">
            <span className="Work-NumberIndividual">{index}</span>
            <span className="Work-TextIndividual">{title}</span>
          </div>
          <div className="Next" onClick={handleNextClick}>
            <Next />
          </div>
          <div className="Work-DescriptionContainer">
            {sentences.map((sentence, index) => (
              <p className="WorkTitleDescription" key={index}>
                {sentence}
              </p>
            ))}
          </div>
          <p className="WorkTitleDate">{date}</p>
        </div>
      </div>
      <div className="WorkIndividualphoto-container">
        <img src={Frog1} alt="FrogBazar1" className="Frog1" />
        <img src={Frog2} alt="FrogBazar2" className="Frog2" />
        <img src={Frog3} alt="FrogBazar3" className="Frog3" />
        <img src={Frog4} alt="FrogBazar4" className="Frog4" />
        <img src={Frog5} alt="FrogBazar5" className="Frog5" />
        <img src={Frog6} alt="FrogBazar6" className="Frog6" />
        <img src={Frogcel1} alt="FrogBazarcel1" className="Frogcel1" />
        <img src={Frogcel2} alt="FrogBazarcel2" className="Frogcel2" />
        <img src={Frogcel4} alt="FrogBazarcel4" className="Frogcel4" />
        {/*imagenes de la animación*/}
        <div className="FrogCelanimation-container">
          {/* <ImageSequence /> */}
        </div>
        <div className="Belink-container">
          <BeLink link={url} />
        </div>
      </div>
    </div>
  );
};

export default Frog;

{
  /* <img src={Frogcel3} alt="FrogBazarcel3" className={`Frogcel3 ${currentIndex === 0 ? 'active' : ''}`} />
<img
  src={Frogcel3V2}
  alt="FrogBazarcelanimacion"
  className={`Frogcel3V2 ${currentIndex === 1 ? 'active' : ''}`}
/>
<img
  src={Frogcel3V3}
  alt="FrogBazarcelanimacion"
  className={`Frogcel3V3 ${currentIndex === 2 ? 'active' : ''}`}
/>
<img
  src={Frogcel3V4}
  alt="FrogBazarcelanimacion"
  className={`Frogcel3V4 ${currentIndex === 3 ? 'active' : ''}`}
/>
<img
  src={Frogcel3V5}
  alt="FrogBazarcelanimacion"
  className={`Frogcel3V5 ${currentIndex === 4 ? 'active' : ''}`}
/>
<img
  src={Frogcel3V6}
  alt="FrogBazarcelanimacion"
  className={`Frogcel3V6 ${currentIndex === 5 ? 'active' : ''}`}
/>
<img
  src={Frogcel3V7}
  alt="FrogBazarcelanimacion"
  className={`Frogcel3V7 ${currentIndex === 6 ? 'active' : ''}`}
/>
<img
  src={Frogcel3V8}
  alt="FrogBazarcelanimacion"
  className={`Frogcel3V8 ${currentIndex === 7 ? 'active' : ''}`}
/> */
}

/* animación para la carga de las imagenes secuencial */
/* const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const handleAnimationEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  images.forEach((imageRef, index) => {
    if (imageRef && imageRef.current) {
      const animationDelay = index * 1000;
      imageRef.current.style.animationName = "fadeIn";
      imageRef.current.style.animationDuration = "1500ms";
      imageRef.current.style.animationTimingFunction = "ease-out";
      imageRef.current.style.animationDelay = `${animationDelay}ms`;
      imageRef.current.addEventListener("animationend", handleAnimationEnd);
    }
  });
  return () => {
    imageRefs.current.forEach((imageRef) => {
      imageRef.current.removeEventListener(
        "animationend",
        handleAnimationEnd
      );
    });
  };
}, [currentIndex]); */
/* {images.map((image, index) => (
  <img
    key={index}
    src={image}
    alt={`FrogBazarcel${index + 3}`}
    className={`Frogcel${index + 3} ${
      currentIndex === index ? "active" : ""
    }`}
  />
))} */
/* const animationData = [
  { variant: "Variant1", timingFunction: "ease", duration: 1500, delay: 1500 },
  {
    variant: "Variant2",
    timingFunction: "ease-out",
    duration: 300,
    delay: 800,
  },
  { variant: "Variant3", timingFunction: "ease-in", duration: 300, delay: 1 },
  { variant: "Variant4", timingFunction: "ease", duration: 1500, delay: 800 },
  {
    variant: "Variant5",
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
    duration: 1500,
    delay: 400,
  },
  {
    variant: "Variant6",
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
    duration: 500,
    delay: 300,
  },
  { variant: "Variant7", timingFunction: "ease-in", duration: 300, delay: 1 },
  {
    variant: "Variant8",
    timingFunction: "cubic-bezier(0.42, 0, 0.11, 0.99)",
    duration: 1500,
    delay: 800,
  },
]; */
