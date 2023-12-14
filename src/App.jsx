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
import Frog from "./components/Works/Frog";

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
      <Contact />
    </div>
  );
}

export default App;
