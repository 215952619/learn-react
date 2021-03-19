import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style/index.css";

import Routes from "./router";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
  rootElement
);
