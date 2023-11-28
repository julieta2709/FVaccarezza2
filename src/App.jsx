import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Photography from "../src/pages/Photography";
import "../src/styles/App.css";
import ButtonUp from "./components/Buttons/ButtonUp";
import Header from "./components/Header";
import LazyPages from "./components/LazyPages";
import Home from "./pages/Home";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const aboutMeRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  console.log('aboutMeRef:', aboutMeRef.current);
  console.log('workRef:', workRef.current);
  console.log('contactRef:', contactRef.current);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  return (
    <div className="App-container">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/ButtonUp"} element={<Home />} />
        <Route path={"/Photography"} element={<Photography />} />
        <Route
          path={"/lazy-pages"}
          element={
            <LazyPages
              aboutMeRef={aboutMeRef}
              workRef={workRef}
              contactRef={contactRef}
            />
          }
        />
      </Routes>
      {/* <div className="overlay"></div> */}
      <ButtonUp />
    </div>
  );
}
/* function HomeFull() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <>
      <Home />
      <AboutMe />
      <Work />
      <Contact />
    </>
  );
} */
export default App;
