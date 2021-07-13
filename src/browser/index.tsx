import React from "react";
import ReactDOM from "react-dom";
import { AppContextProvider } from "@/context/app";
import App from "./App";
import "../styles/common.scss";
import "../styles/components.scss";
import { HashRouter as Router } from "react-router-dom";
ReactDOM.render(
  <AppContextProvider>
    <Router>
      <App />
    </Router>
  </AppContextProvider>,
  document.querySelector("#root")
);
