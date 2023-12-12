import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LazyFrog } from "../components/Works/WorkContainer";
import Home from "../pages/Home";
import Photography from "../pages/Photography";

const LazyAboutMe = lazy(() => import("../pages/AboutMe"));
const LazyWork = lazy(() => import("../pages/Work"));
const LazyContact = lazy(() => import("../pages/Contact"));
// const LazyFrog = lazy(() => import("../components/Works/Frog"));
const LazyEstudio = lazy(() => import("../components/Works/Estudio"));
const LazyMoreno = lazy(() => import("../components/Works/Moreno"));
const LazyOpame = lazy(() => import("../components/Works/Opame"));
const LazyMichi = lazy(() => import("../components/Works/Michi"));
const LazyBroke = lazy(() => import("../components/Works/Broke"));
const LazyKp = lazy(() => import("../components/Works/Kp"));
const LazyLogofolio = lazy(() => import("../components/Works/Logofolio"));
const LazyMisc = lazy(() => import("../components/Works/Misc"));

const Router = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <>
            <Home />
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAboutMe />
              <LazyWork />
              <LazyContact />
            </Suspense>
          </>
        }
      />
      <Route path={"/ButtonUp"} element={<Home />} />
      <Route path={"/Photography"} element={<Photography />} />
      <Route path={"/AboutMe"} element={<LazyAboutMe />} />
      <Route path={"/Work"} element={<LazyWork />} />
      <Route path={"/Frog"} element={<LazyFrog />} />
      <Route path={"/Estudio"} element={<LazyEstudio />} />
      <Route path={"/Moreno"} element={<LazyMoreno />} />
      <Route path={"/Opame"} element={<LazyOpame />} />
      <Route path={"/Michi"} element={<LazyMichi />} />
      <Route path={"/Broke"} element={<LazyBroke />} />
      <Route path={"/Kp"} element={<LazyKp />} />
      <Route path={"/Logofolio"} element={<LazyLogofolio />} />
      <Route path={"/Misc"} element={<LazyMisc />} />
      <Route path={"/Contact"} element={<LazyContact />} />
    </Routes>
  );
};

export default Router;
