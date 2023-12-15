import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonUp from "../src/components/Buttons/ButtonUp";
import Header from "../src/components/Header";
import WorkContainer from "../src/components/Works/WorkContainer";
import WorkContext from "../src/components/Works/WorkContext";
import AboutMe from "../src/pages/AboutMe";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import Frog from "./components/Works/Frog";
import Photography from "./pages/Photography";

function App() {
  return (
    <div className="App-container">
      <Header />
      <WorkContext>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="work">
          <WorkContainer />
        </div>
        <div id="Frog">
          <Frog />
        </div>
        <div id="contact">
          <Contact />
        </div>
        {/*  <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Home" element={<ButtonUp />} />
          <Route path="/Photography" element={<Photography />} />
          <Route path="/Work/*" element={<WorkContainer />} />
          <Route path="/Frog" element={<Frog />} />
          <Route path="/Estudio" element={<Estudio />} />
          <Route path="/Moreno" element={<Moreno />} />
          <Route path="/Opame" element={<Opame />} />
          <Route path="/Michi" element={<Michi />} />
          <Route path="/Broke" element={<Broke />} />
          <Route path="/Kp" element={<Kp />} />
          <Route path="/Logofolio" element={<Logofolio />} />
          <Route path="/Misc" element={<Misc />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<AllComponents />} />
        </Routes> */}
      </WorkContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Photography" element={<Photography />} />
      </Routes>
      <ButtonUp />
    </div>
  );
}

/* function AllComponents() {
  return (
    <div>
      <Home />
      <ButtonUp />
      <AboutMe />
      <WorkContainer />
      <Contact />
    </div>
  );
} */

export default App;
