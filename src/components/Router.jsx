import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Photography from "../pages/Photography";

const Router = () => {
  const LazyAboutMe = lazy(() => import("../pages/AboutMe"));
  const LazyWork = lazy(() => import("../pages/Work"));
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
      {/*         <LazyFrog />
              <LazyEstudio />
              <LazyMoreno />
              <LazyOpame />
              <LazyMichi />
              <LazyBroke />
              <LazyKp />
              <LazyLogofolio />
              <LazyMisc /> */}
              <LazyContact />
            </Suspense>
          </>
        }
      />
      <Route path={"/ButtonUp"} element={<Home />} />
      <Route path={"/Photography"} element={<Photography />} />
      <Route
        path={"/AboutMe"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAboutMe />
          </Suspense>
        }
      />
      <Route
        path={"/Work"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyWork />
          </Suspense>
        }
      />
      <Route
        path={"/Frog/:number"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyFrog />
          </Suspense>
        }
      />
      <Route
        path={"/Estudio/:number"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyEstudio />
          </Suspense>
        }
      />
      <Route
        path={"/Moreno/:number"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMoreno />
          </Suspense>
        }
      />
      <Route
        path={"/Opame/:number"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyOpame />
          </Suspense>
        }
      />
      <Route
        path={"/Michi/:number"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMichi />
          </Suspense>
        }
      />
      <Route
        path={"/Broke/:number"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyBroke />
          </Suspense>
        }
      />
      <Route
        path={"/Kp/:number"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyKp />
          </Suspense>
        }
      />
      <Route
        path={"/Logofolio/:number"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLogofolio />
          </Suspense>
        }
      />
      <Route
        path={"/Misc/:number"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMisc />
          </Suspense>
        }
      />
      <Route
        path={"/Contact"}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyContact />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
