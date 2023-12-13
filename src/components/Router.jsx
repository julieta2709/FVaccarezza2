import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Frog from "../components/Works/Frog";
import Home from "../pages/Home";
import Photography from "../pages/Photography";
import WorkContext from "../pages/Work";
import WorkContainer from "./Works/WorkContainer";

const LazyAboutMe = lazy(() => import("../pages/AboutMe"));
const LazyContact = lazy(() => import("../pages/Contact"));
/* const LazyEstudio = lazy(() => import("../components/Works/Estudio"));
const LazyMoreno = lazy(() => import("../components/Works/Moreno"));
const LazyOpame = lazy(() => import("../components/Works/Opame"));
const LazyMichi = lazy(() => import("../components/Works/Michi"));
const LazyBroke = lazy(() => import("../components/Works/Broke"));
const LazyKp = lazy(() => import("../components/Works/Kp"));
const LazyLogofolio = lazy(() => import("../components/Works/Logofolio"));
const LazyMisc = lazy(() => import("../components/Works/Misc")); */

const Router = () => {
  return (
    <Routes>
      {/* Rutas que no necesitan el contexto */}
      <Route path={"/"} element={<Home />} />
      <Route path={"/ButtonUp"} element={<Home />} />
      <Route path={"/Photography"} element={<Photography />} />
      <Route path={"/AboutMe"} element={<LazyAboutMe />} />
      <Route path={"/Contact"} element={<LazyContact />} />
    
      {/* Rutas que necesitan el contexto */}
      <Route
        path={"/Work"}
        element={
          <WorkContext>
            <WorkContainer />
          </WorkContext>
        }
      />
      <Route
        path={"/Frog"}
        element={
          <WorkContext>
            <Frog />
          </WorkContext>
        }
      />
      {/* Otras rutas que requieran el contexto */}
    </Routes>
  );
};

export default Router;

{
  /* /*<Route path={"/Work"} element={<WorkContainer />} />
<Route path={"/Frog"} element={<Frog />} />
<Route path={"/Estudio"} element={<LazyEstudio />} />
<Route path={"/Moreno"} element={<LazyMoreno />} />
<Route path={"/Opame"} element={<LazyOpame />} />
<Route path={"/Michi"} element={<LazyMichi />} />
<Route path={"/Broke"} element={<LazyBroke />} />
<Route path={"/Kp"} element={<LazyKp />} />
<Route path={"/Logofolio"} element={<LazyLogofolio />} />
<Route path={"/Misc"} element={<LazyMisc />} />*/
}
