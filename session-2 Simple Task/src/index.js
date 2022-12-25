import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import NavBar from "./Componenet/NavBar";
import Slider from "./Componenet/Slider";
import "./Componenet/Css Style/MainStyle.css";
import reportWebVitals from "./reportWebVitals";
import CardInfo from "./Componenet/Cardinfo";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <section className="contain">
        <NavBar />
        <Slider />
        <CardInfo />
      </section>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
