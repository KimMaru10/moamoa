import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import GlobalStyles from "./Styles/GlobalStyle";
import store from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  </React.StrictMode>
);
