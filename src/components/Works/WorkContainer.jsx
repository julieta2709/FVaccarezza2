import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import asterisk from "../../assets/img/icons/asterisk.svg";
import "../../styles/Work.css";
import Next from "../Buttons/Next";
import Prev from "../Buttons/Prev";
import MainWork from "./MainWork";
import { WorkDataContext } from "./WorkContext";

const WorkContainer = () => {
  const WorkData = useContext(WorkDataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const navigateToIndex = (index) => {
    console.log("Index received:", index);
    if (WorkData && Array.isArray(WorkData) && WorkData.length > 0) {
      setCurrentIndex(index);
      const currentWork = WorkData[index];
      console.log("Current work:", currentWork);
      if (currentWork && currentWork.id) {
        const id = currentWork.id;
        console.log("ID:", id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        navigate(`#${id}`);
      }
    }
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? WorkData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    navigateToIndex(newIndex); // Asegúrate de llamar a navigateToIndex con el nuevo índice
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === WorkData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    navigateToIndex(newIndex); // Asegúrate de llamar a navigateToIndex con el nuevo índice
  };

  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asterisk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <MainWork works={WorkData} />
      <div className="Work-componentTitle">
        <Prev className="prevNext" onClick={handlePrevClick} />
        <Next onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default WorkContainer;

/* useEffect(() => {
    if (componentRefs[currentIndex] && componentRefs[currentIndex].current) {
      componentRefs[currentIndex].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex, componentRefs]); */
{
  /*         {WorkData.map((work, index) => (
          <div key={index} id={work.id} ref={componentRefs[index]}>
            {work.id === "frog" && <Frog />}
            {work.id === "estudio" && <Estudio />}
          </div>
        ))} */
} /*  useEffect(() => {
/* useEffect(() => {
    scrollToComponent(indexToIdMap[currentIndex]);
  }, [currentIndex]);

  const scrollToComponent = (index) => {
    if (componentRefs[index] && componentRefs[index].current) {
      componentRefs[index].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }; */
/* const indexToIdMap = {};

  WorkData.forEach((item) => {
    indexToIdMap[WorkData.indexOf(item)] = item.id;
  }); */
/*  useEffect(() => {
    const currentId = WorkData[currentIndex].id;
    const element = document.getElementById(currentId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentIndex, WorkData]);
 */

/*  const scrollToComponent = (id) => {
    if (componentRefs[id] && componentRefs[id].current) {
      componentRefs[id].current.scrollIntoView({ behavior: "smooth" });
    }
  }; */

/* const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === WorkData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? WorkData.length - 1 : prevIndex - 1
    );
  };
  console.log(currentIndex); */
/* const currentId = WorkData[currentIndex].id;
    const element = document.getElementById(currentId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentIndex, WorkData]);
 */

/*  const scrollToComponent = (id) => {
    if (componentRefs[id] && componentRefs[id].current) {
      componentRefs[id].current.scrollIntoView({ behavior: "smooth" });
    }
  }; */

/* const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === WorkData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? WorkData.length - 1 : prevIndex - 1
    );
  };
  console.log(currentIndex); */
/*   const componentRefs = useRef({});

  useEffect(() => {
    componentRefs.current = WorkData.reduce((acc, item) => {
      acc[item.id] = React.createRef();
      return acc;
    }, componentRefs.current);
  }, [WorkData]); */

/*  const navigateToComponent = (index) => {
    setCurrentIndex(index);
    const id = WorkData.id;
    const element = componentRefs[id]?.current;

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }; */
