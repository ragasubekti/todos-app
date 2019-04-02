import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Routes from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

import "./styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
