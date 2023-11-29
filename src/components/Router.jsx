import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Photography from "../pages/Photography";


const Router = () => {
    const LazyAboutMe = lazy (()=>import("../pages/AboutMe"));
  return (
    <Routes>
      <Route path={"/"} element={<>
              <Home />
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAboutMe />
              </Suspense>
            </>} />
      <Route path={"/ButtonUp"} element={<Home />} />
      <Route path={"/Photography"} element={<Photography />} />
      <Route path={"/AboutMe"} element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAboutMe />
          </Suspense>
      } />
    </Routes>
  );
};

export default Router;
