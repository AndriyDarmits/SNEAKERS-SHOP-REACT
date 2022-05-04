import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/reducers/store";
import { FontStyles, GlobalStyles } from "./GlobalStyles";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyles />
    <FontStyles />
  </Provider>,
  document.getElementById("root")
);
