import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LazyPages = ({ aboutMeRef, workRef, contactRef }) => {
  const LazyAboutMe = React.lazy(() => import("../pages/AboutMe"));
 /*  const LazyWork = React.lazy(() => import("../pages/Work"));
  const LazyContact = React.lazy(() => import("../pages/Contact")); */
 
  /* const LazyBroke = React.lazy(() => import("./Works/Broke"));
  const LazyEstudio = React.lazy(() => import("./Works/Estudio"));
  const LazyFrog = React.lazy(() => import("./Works/Frog"));
  const LazyKp = React.lazy(() => import("./Works/Kp"));
  const LazyLogofolio = React.lazy(() =>
    import("./Works/Logofolio")
  );
  const LazyMichi = React.lazy(() => import("./Works/Michi"));
  const LazyMisc = React.lazy(() => import("./Works/Misc"));
  const LazyMoreno = React.lazy(() => import("./Works/Moreno"));
  const LazyOpame = React.lazy(() => import("./Works/Opame")); */

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/lazy-pages/AboutMe" element={<LazyAboutMe aboutMeRef={aboutMeRef}/>}  />
        {/* <Route path="/lazy-pages/Work" element={<LazyWork workRef={workRef} />} />
        <Route path="/lazy-pages/Contact" element={<LazyContact contactRef={contactRef} />} /> */}
        {/* <Route path="/Broke/:number" element={<LazyBroke />} />
        <Route path={"/Estudio/:number"} element={<LazyEstudio />} />
        <Route path={"/Frog/:number"} element={<LazyFrog />} />
        <Route path={"/Kp/:number"} element={<LazyKp />} />
        <Route path={"/Michi/:number"} element={<LazyMichi />} />
        <Route path={"/Misc/:number"} element={<LazyMisc />} />
        <Route path={"/Moreno/:number"} element={<LazyMoreno />} />
        <Route path={"/Opame/:number"} element={<LazyOpame />} />
        <Route path={"/Logofolio/:number"} element={<LazyLogofolio />} /> */}
      </Routes>
    </Suspense>
  );
};

export default LazyPages;
