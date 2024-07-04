import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import GlobalStyles from "./Styles/GlobalStyle";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>
);
