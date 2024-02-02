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
      <div className="overlay">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home" style={{ width: "100%" }}>
                  <Home />
                </div>
                <WorkContext>
                  <div id="about" style={{ width: "100%" }}>
                    <AboutMe />
                  </div>
                  <div id="work" style={{ width: "100%" }}>
                    <WorkContainer />
                  </div>
                  <div className="IndividualWork-container">
                    <div
                      id="frog"
                      style={{ width: "100%", marginTop: "11.125rem" }}
                    >
                      <Frog />
                    </div>
                    <div
                      id="estudio"
                      style={{ width: "100%", marginTop: "11.125rem" }}
                    >
                      <Estudio />
                    </div>
                    <div
                      id="moreno"
                      style={{ width: "100%", marginTop: "11.125rem" }}
                    >
                      <Moreno />
                    </div>
                    <div
                      id="opame"
                      style={{ width: "100%", marginTop: "11.125rem" }}
                    >
                      <Opame />
                    </div>
                    <div
                      id="michi"
                      style={{ width: "100%", marginTop: "11.125rem" }}
                    >
                      <Michi />
                    </div>
                    <div
                      id="broke"
                      style={{ width: "100%", marginTop: "11.125rem" }}
                    >
                      <Broke />
                    </div>
                    <div
                      id="kp"
                      style={{ width: "100%", marginTop: "11.125rem" }}
                    >
                      <Kp />
                    </div>
                    <div
                      id="logofolio"
                      style={{ width: "100%", marginTop: "11.125rem" }}
                    >
                      <Logofolio />
                    </div>
                    <div
                      id="misc"
                      style={{ width: "100%", marginTop: "11.125rem" }}
                    >
                      <Misc />
                    </div>
                  </div>
                  <div id="contact" style={{ width: "100%" }}>
                    <Contact />
                  </div>
                </WorkContext>
              </>
            }
          />
          <Route
            path="/photography"
            element={<Photography className="Photography-container" />}
          />
        </Routes>
        <ButtonUp />
      </div>
    </div>
  );
}

export default App;
