import React, { useEffect, useState } from "react";
import "../src/styles/App.css";
import ButtonUp from "./components/Buttons/ButtonUp";
import Header from "./components/Header";
import Router from "./components/Router";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log('Scrolling...');
    const position = window.scrollY;
    setScrollPosition(position);
  };

  return (
    <div className="App-container">
      <Header />
      <Router />
      {/* <div className="overlay"></div> */}
      <ButtonUp />
    </div>
  );
}

export default App;
