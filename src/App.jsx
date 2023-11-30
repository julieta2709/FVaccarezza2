import React from "react";
import "../src/styles/App.css";
import ButtonUp from "./components/Buttons/ButtonUp";
import Header from "./components/Header";
import Router from "./components/Router";

function App() {

  return (
    <div className="App-container">
      <Header />
      <Router />
      {/* <div className="overlay"></div> */}
      <ButtonUp />
    </div>
  );

};
export default App;
