import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Photography from "../pages/Photography";

const LazyAboutMe = lazy(() => import("../pages/AboutMe"));
const LazyWork2 = lazy(() => import("../pages/Work2"));
const LazyContact = lazy(() => import("../pages/Contact"));
const LazyFrog = lazy(() => import("../components/Works/Frog"));
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
              <LazyWork2 />
              <LazyFrog prop="number, text, decription,date" />
              <LazyEstudio />
              <LazyMoreno />
              <LazyOpame />
              <LazyMichi />
              <LazyBroke />
              <LazyKp />
              <LazyLogofolio />
              <LazyMisc />
              <LazyContact />
            </Suspense>
          </>
        }
      />
      <Route path={"/ButtonUp"} element={<Home />} />
      <Route path={"/Photography"} element={<Photography />} />
      <Route path={"/AboutMe"} element={<LazyAboutMe />} />
      <Route path={"/Work"} element={<LazyWork2 />} />
      <Route
        path={"/Frog/:number"}
        element={(props) => {
          const { number } = props.match.params;

          const propsToPass = {
            number: number,
            text: "FROG BAZAR.",
          };
          return <LazyFrog {...propsToPass} />;
        }}
      />
      <Route path={"/Estudio/:number"} element={<LazyEstudio />} />
      <Route path={"/Moreno/:number"} element={<LazyMoreno />} />
      <Route path={"/Opame/:number"} element={<LazyOpame />} />
      <Route path={"/Michi/:number"} element={<LazyMichi />} />
      <Route path={"/Broke/:number"} element={<LazyBroke />} />
      <Route path={"/Kp/:number"} element={<LazyKp />} />
      <Route path={"/Logofolio/:number"} element={<LazyLogofolio />} />
      <Route path={"/Misc/:number"} element={<LazyMisc />} />
      <Route path={"/Contact"} element={<LazyContact />} />
    </Routes>
  );
};

export default Router;
