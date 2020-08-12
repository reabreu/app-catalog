import React from "react";
import ReactDOM from "react-dom";
import { TopNav } from "./header";
import GlobalStyle from "./global-styles";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <TopNav />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
