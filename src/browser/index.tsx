import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../styles/common.scss";
import "../styles/components.scss";
import { HashRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
