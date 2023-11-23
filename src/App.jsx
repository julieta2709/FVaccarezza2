import { Route, Routes, useLocation } from "react-router-dom";
import Photography from "../src/pages/Photography";
import "../src/styles/App.css";
import ButtonUp from "./components/Buttons/ButtonUp";
import Header from "./components/Header";
import Broke from "./components/Works/Broke";
import Estudio from "./components/Works/Estudio";
import Frog from "./components/Works/Frog";
import Kp from "./components/Works/Kp";
import Logofolio from "./components/Works/Logofolio";
import Michi from "./components/Works/Michi";
import Misc from "./components/Works/Misc";
import Moreno from "./components/Works/Moreno";
import Opame from "./components/Works/Opame";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";
function App() {
  return (
    <div className="App-container">
      <Header />
      <Routes>
        <Route path={"/"} element={<HomeFull />} />
        <Route path={"/ButtonUp"} element={<Home />} />
        <Route path={"/AboutMe"} element={<AboutMe />} />
        <Route path={"/Work"} element={<Work />} />
        <Route path={"/Contact"} element={<Contact />} />
        <Route path={"/Photography"} element={<Photography />} />
        <Route path="/Broke/:number" element={<Broke />} />
        <Route path={"/Estudio/:number"} element={<Estudio />} />
        <Route path={"/Frog/:number"} element={<Frog />} />
        <Route path={"/Kp/:number"} element={<Kp />} />
        <Route path={"/Michi/:number"} element={<Michi />} />
        <Route path={"/Misc/:number"} element={<Misc />} />
        <Route path={"/Moreno/:number"} element={<Moreno/>} />
        <Route path={"/Opame/:number"} element={<Opame />} />
        <Route path={"/Logofolio/:number"} element={<Logofolio />} />
      </Routes>
      {/* <div className="overlay"></div> */}
      <ButtonUp />
    </div>
  );
}
function HomeFull() {
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
}
export default App;
