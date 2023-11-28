import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/App.css";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvFp7jy_HKAxhgV7eXzb3wJSRFKtYcAcc",
  authDomain: "fvaccarezza-9affb.firebaseapp.com",
  projectId: "fvaccarezza-9affb",
  storageBucket: "fvaccarezza-9affb.appspot.com",
  messagingSenderId: "1047488617039",
  appId: "1:1047488617039:web:f1e434573f2945187ce83a",
  measurementId: "G-H5G8XH31PY"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter><App /></BrowserRouter>
);
