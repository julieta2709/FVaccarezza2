import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonUp from "../src/components/Buttons/ButtonUp";
import Header from "../src/components/Header";
import WorkContainer from "../src/components/Works/WorkContainer";
import WorkContext from "../src/components/Works/WorkContext";
import AboutMe from "../src/pages/AboutMe";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import Photography from "../src/pages/Photography";
import Broke from "./components/Works/Broke";
import Estudio from "./components/Works/Estudio";
import Frog from "./components/Works/Frog";
import Kp from "./components/Works/Kp";
import Logofolio from "./components/Works/Logofolio";
import Michi from "./components/Works/Michi";
import Misc from "./components/Works/Misc";
import Moreno from "./components/Works/Moreno";
import Opame from "./components/Works/Opame";

function App() {
  return (
    <div className="App-container">
      <Header />
      <WorkContext>
        <Routes>
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
        </Routes>
      </WorkContext>
      <ButtonUp />
    </div>
  );
}

function AllComponents() {
  return (
    <div>
      <Home />
      <ButtonUp />
      <AboutMe />
      <WorkContainer />
      <Frog />
      <Estudio />
      <Moreno />
      <Contact />
    </div>
  );
}

export default App;
