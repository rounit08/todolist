import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Body from "./components/body";
import About from "./components/about.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Body />
  </React.StrictMode>,
  document.getElementById("root")
);
