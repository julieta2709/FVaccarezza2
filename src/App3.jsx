import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Photography from "../src/pages/Photography";
import "../src/styles/App.css";
import ButtonUp from "./components/Buttons/ButtonUp";
import Header from "./components/Header";
import Home from "./pages/Home";

const LazyAboutMe = React.lazy(() => import("./pages/AboutMe"));
const LazyWork = React.lazy(() => import("./pages/Work"));
const LazyContact = React.lazy(() => import("./pages/Contact"));
const LazyBroke = React.lazy(() => import("./components/Works/Broke"));
const LazyEstudio = React.lazy(() => import("./components/Works/Estudio"));
const LazyFrog = React.lazy(() => import("./components/Works/Frog"));
const LazyKp = React.lazy(() => import("./components/Works/Kp"));
const LazyLogofolio = React.lazy(() => import("./components/Works/Logofolio"));
const LazyMichi = React.lazy(() => import("./components/Works/Michi"));
const LazyMisc = React.lazy(() => import("./components/Works/Misc"));
const LazyMoreno = React.lazy(() => import("./components/Works/Moreno"));
const LazyOpame = React.lazy(() => import("./components/Works/Opame"));

function HomeFull() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyAboutMe />
      <LazyWork />
      <LazyFrog />
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
  );
}

function App() {
  return (
    <div className="App-container">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Home"} element={<HomeFull />} />
        <Route path={"/ButtonUp"} element={<Home />} />
        <Route path={"/Photography"} element={<Photography />} />
        <Route path={"/AboutMe"} element={<LazyAboutMe />} />
        <Route path={"/Work"} element={<LazyWork />} />
        <Route path={"/Contact"} element={<LazyContact />} />
        <Route path="/Broke/:number" element={<LazyBroke />} />
        <Route path={"/Estudio/:number"} element={<LazyEstudio />} />
        <Route path={"/Frog/:number"} element={<LazyFrog />} />
        <Route path={"/Kp/:number"} element={<LazyKp />} />
        <Route path={"/Michi/:number"} element={<LazyMichi />} />
        <Route path={"/Misc/:number"} element={<LazyMisc />} />
        <Route path={"/Moreno/:number"} element={<LazyMoreno />} />
        <Route path={"/Opame/:number"} element={<LazyOpame />} />
        <Route path={"/Logofolio/:number"} element={<LazyLogofolio />} />
      </Routes>
      {/* <div className="overlay"></div> */}
      <ButtonUp />
    </div>
  );
}
/* function HomeFull() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <>
      <Home />
      <AboutMe />
      <Work />
      <Contact />
    </>
  );
} */
export default App;
